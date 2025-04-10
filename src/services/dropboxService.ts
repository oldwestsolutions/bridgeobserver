import { Dropbox } from 'dropbox';

const accessToken = import.meta.env.VITE_DROPBOX_ACCESS_TOKEN;
const dbx = new Dropbox({ accessToken });

export const dropboxService = {
  async listFiles(path: string = '') {
    try {
      const response = await dbx.filesListFolder({ path });
      return response.result.entries;
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  },

  async getFileContent(path: string) {
    try {
      const response = await dbx.filesDownload({ path });
      return response.result;
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  },

  async uploadFile(path: string, content: string) {
    try {
      const response = await dbx.filesUpload({
        path,
        contents: content,
        mode: { '.tag': 'overwrite' }
      });
      return response.result;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}; 