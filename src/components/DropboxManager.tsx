import React, { useState } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';
import DropboxService from '../services/dropboxService';
import { DropboxFile } from 'dropbox';

const DropboxManager: React.FC = () => {
  const [files, setFiles] = useState<DropboxFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dropboxService, setDropboxService] = useState<DropboxService | null>(null);

  const loadFiles = async () => {
    if (!dropboxService) return;
    
    setLoading(true);
    setError(null);
    try {
      const fileList = await dropboxService.listFiles();
      setFiles(fileList);
    } catch (err) {
      setError('Failed to load files');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!dropboxService || !event.target.files?.length) return;
    
    const uploadFile = event.target.files[0];
    setLoading(true);
    setError(null);
    
    try {
      await dropboxService.uploadFile(uploadFile, '/');
      await loadFiles();
    } catch (err) {
      setError('Failed to upload file');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileDelete = async (path: string) => {
    if (!dropboxService) return;
    
    setLoading(true);
    setError(null);
    try {
      await dropboxService.deleteFile(path);
      await loadFiles();
    } catch (err) {
      setError('Failed to delete file');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Dropbox File Manager
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={loadFiles}
          disabled={loading}
          sx={{ mr: 2 }}
        >
          Refresh Files
        </Button>
        
        <input
          accept="*/*"
          style={{ display: 'none' }}
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="file-upload">
          <Button
            variant="contained"
            component="span"
            disabled={loading}
          >
            Upload File
          </Button>
        </label>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {files.map((file) => (
            <ListItem
              key={file.path_display}
              secondaryAction={
                <Button
                  color="error"
                  onClick={() => handleFileDelete(file.path_display)}
                  disabled={loading}
                >
                  Delete
                </Button>
              }
            >
              <ListItemText
                primary={file.name}
                secondary={`Size: ${(file.size / 1024).toFixed(2)} KB`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default DropboxManager; 