import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  CircularProgress,
  Alert,
  Paper
} from '@mui/material';
import { dropboxService } from '../services/dropboxService';
import { files } from 'dropbox';

type DropboxFile = files.FileMetadataReference | 
                   files.FolderMetadataReference | 
                   files.DeletedMetadataReference;

export const DropboxManager: React.FC = () => {
  const [files, setFiles] = useState<DropboxFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await dropboxService.listFiles();
      if (response.entries) {
        setFiles([...response.entries]);
      }
    } catch (err) {
      setError('Failed to load files. Please try again.');
      console.error('Error loading files:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadFile) return;

    try {
      setLoading(true);
      setError(null);
      await dropboxService.uploadFile(uploadFile.name, '/');
      await loadFiles();
      setUploadFile(null);
    } catch (err) {
      setError('Failed to upload file. Please try again.');
      console.error('Error uploading file:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dropbox Manager
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            variant="contained"
            component="label"
            disabled={loading}
          >
            Select File
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!uploadFile || loading}
          >
            Upload
          </Button>
          {uploadFile && (
            <Typography variant="body2">
              Selected: {uploadFile.name}
            </Typography>
          )}
        </Box>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Files
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {files.map((file) => (
              <ListItem key={file.path_display}>
                <ListItemText
                  primary={file.name}
                  secondary={file['.tag'] === 'file' ? 'File' : 'Folder'}
                />
              </ListItem>
            ))}
            {files.length === 0 && (
              <ListItem>
                <ListItemText primary="No files found" />
              </ListItem>
            )}
          </List>
        )}
      </Paper>
    </Box>
  );
}; 