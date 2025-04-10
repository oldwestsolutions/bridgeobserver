import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
import { Article } from '../types';
import { dropboxService } from '../utils/dropbox';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await dropboxService.downloadFile(`/articles/${id}.json`);
        const text = await response.text();
        const articleData = JSON.parse(text);
        setArticle(articleData);
      } catch (err) {
        setError('Failed to load article');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !article) {
    return (
      <Container>
        <Typography color="error" variant="h6">
          {error || 'Article not found'}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          By {article.author} • {article.date}
        </Typography>
        <Box sx={{ my: 4 }}>
          <img
            src={article.imageUrl}
            alt={article.title}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Box>
        <Typography variant="body1" paragraph>
          {article.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ArticleDetail; 