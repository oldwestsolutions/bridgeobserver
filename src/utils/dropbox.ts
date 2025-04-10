import { Dropbox, DropboxResponse, files } from 'dropbox';

export interface DropboxFile {
  id: string;
  name: string;
  path_display: string;
  size: number;
  client_modified: string;
  server_modified: string;
  '.tag': 'file' | 'folder';
  rev?: string;
}

// Initialize Dropbox client with your access token
// Note: In production, this should be stored in environment variables
const ACCESS_TOKEN = 'YOUR_DROPBOX_ACCESS_TOKEN';

export const dbx = new Dropbox({
  accessToken: import.meta.env.VITE_DROPBOX_ACCESS_TOKEN,
});

// Helper function to upload an article to Dropbox
export const uploadArticle = async (article: any, category: string) => {
  try {
    const path = `/articles/${category}/${article.id}.json`;
    const content = JSON.stringify(article);
    
    await dbx.filesUpload({
      path,
      contents: content,
      mode: { '.tag': 'overwrite' }
    });
    
    return true;
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
};

// Helper function to list articles in a category
export const listArticles = async (category: string) => {
  try {
    const response = await dbx.filesListFolder({
      path: `/articles/${category}`
    });
    
    return response.result.entries;
  } catch (error) {
    console.error('Error listing articles:', error);
    throw error;
  }
};

// Helper function to delete an article
export const deleteArticle = async (id: string, category: string) => {
  try {
    const path = `/articles/${category}/${id}.json`;
    await dbx.filesDeleteV2({ path });
    return true;
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};

export const listFiles = async (): Promise<DropboxFile[]> => {
  try {
    const response = await dbx.filesListFolder({ path: '' });
    const entries = response.result.entries;
    return entries.map((entry) => ({
      id: entry.id,
      name: entry.name,
      path_display: entry.path_display || '',
      size: 'size' in entry ? entry.size : 0,
      client_modified: 'client_modified' in entry ? entry.client_modified : '',
      server_modified: 'server_modified' in entry ? entry.server_modified : '',
      '.tag': entry['.tag'],
      rev: 'rev' in entry ? entry.rev : undefined,
    }));
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

export const uploadFile = async (file: File, path: string): Promise<DropboxFile> => {
  try {
    const response = await dbx.filesUpload({
      path: `${path}/${file.name}`,
      contents: file,
    });
    const result = response.result;
    return {
      id: result.id,
      name: result.name,
      path_display: result.path_display || '',
      size: result.size,
      client_modified: result.client_modified,
      server_modified: result.server_modified,
      '.tag': result['.tag'],
      rev: result.rev,
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const deleteFile = async (path: string): Promise<void> => {
  try {
    await dbx.filesDelete({ path });
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};

export const downloadFile = async (path: string): Promise<Blob> => {
  try {
    const response = await dbx.filesDownload({ path });
    if ('fileBlob' in response.result) {
      return response.result.fileBlob;
    }
    throw new Error('File download failed');
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
}; 