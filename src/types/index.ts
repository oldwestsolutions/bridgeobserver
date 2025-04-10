export interface Article {
    id: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    category: string;
}

export interface NavItem {
    label: string;
    path: string;
}

export interface NewsCardProps {
    article: Article;
}

export interface FeaturedArticleProps {
    article: Article;
} 