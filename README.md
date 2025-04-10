# BridgeObserver

A modern finance news website built with React, TypeScript, and Material-UI.

## Features

- Responsive design
- Multiple news sections
- User authentication
- Dropbox integration for file management
- Modern UI with Material-UI components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Dropbox API access token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bridgeobserver.git
cd bridgeobserver
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Dropbox access token:
```
VITE_DROPBOX_ACCESS_TOKEN=your_access_token_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Dropbox API](https://www.dropbox.com/developers)

## License

This project is licensed under the MIT License.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
