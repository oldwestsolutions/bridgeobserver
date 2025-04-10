import { Dropbox, DropboxFile } from 'dropbox';

class DropboxService {
  private dropbox: Dropbox;

  constructor(accessToken: string) {
    this.dropbox = new Dropbox({ accessToken });
  }

  async listFiles(path: string = ''): Promise<DropboxFile[]> {
    try {
      const response = await this.dropbox.filesListFolder({ path });
      return response.entries;
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  }

  async uploadFile(file: File, path: string): Promise<DropboxFile> {
    try {
      const response = await this.dropbox.filesUpload({
        path: `${path}/${file.name}`,
        contents: file
      });
      return response;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  async deleteFile(path: string): Promise<void> {
    try {
      await this.dropbox.filesDelete({ path });
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }

  async downloadFile(path: string): Promise<Blob> {
    try {
      const response = await this.dropbox.filesDownload({ path });
      return response.fileBlob;
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  }
}

export default DropboxService; 