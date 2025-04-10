import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
import { Article } from '../types';
import { dbx } from '../utils/dropbox';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch article content from Dropbox
        const response = await dbx.filesDownload({
          path: `/articles/${id}.json`
        });
        
        // Convert the file content to Article type
        const articleData = JSON.parse((response.result as any).fileBlob);
        setArticle(articleData);
      } catch (err) {
        setError('Failed to load article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !article) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          {error || 'Article not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 600 }}>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          By {article.author} | {article.date}
        </Typography>
        {article.imageUrl && (
          <Box sx={{ my: 4 }}>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              style={{ 
                width: '100%', 
                maxHeight: '500px', 
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Box>
        )}
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          {article.content}
        </Typography>
        {article.tags && (
          <Box sx={{ mt: 4 }}>
            {article.tags.map((tag) => (
              <Typography 
                key={tag} 
                variant="body2" 
                component="span" 
                sx={{ 
                  mr: 1, 
                  px: 2, 
                  py: 0.5, 
                  bgcolor: 'primary.light', 
                  color: 'primary.contrastText',
                  borderRadius: 1,
                  display: 'inline-block'
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ArticleDetail; 