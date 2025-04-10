export interface Article {
    id: number | string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
    author?: string;
    content?: string;
    tags?: string[];
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