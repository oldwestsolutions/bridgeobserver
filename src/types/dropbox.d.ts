declare module 'dropbox' {
  export interface DropboxFile {
    id: string;
    name: string;
    path_display: string;
    size: number;
    client_modified: string;
    server_modified: string;
    '.tag': string;
  }

  export interface ListFolderResult {
    entries: DropboxFile[];
    cursor: string;
    has_more: boolean;
  }

  export interface DropboxOptions {
    accessToken: string;
  }

  export class Dropbox {
    constructor(options: DropboxOptions);
    filesListFolder(options: { path: string }): Promise<ListFolderResult>;
    filesUpload(options: { path: string; contents: File | string }): Promise<DropboxFile>;
    filesDelete(options: { path: string }): Promise<void>;
    filesDownload(options: { path: string }): Promise<{ fileBlob: Blob }>;
  }
} 