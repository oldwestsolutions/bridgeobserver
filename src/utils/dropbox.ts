import { Dropbox } from 'dropbox';

// Initialize Dropbox client with your access token
// Note: In production, this should be stored in environment variables
const ACCESS_TOKEN = 'YOUR_DROPBOX_ACCESS_TOKEN';

export const dbx = new Dropbox({
  accessToken: ACCESS_TOKEN,
  fetch: fetch
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