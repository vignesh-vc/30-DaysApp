Day 4: Build a Firebase Notes App with React + Tailwind + Firestore | Fullstack Beginner Project

Today we’re building a powerful yet beginner-friendly Notes App using React, Tailwind CSS, ShadCN, and Firebase Firestore. This is our first full-stack project in the 30-day challenge where data is stored and synced live via Firebase. Perfect for understanding real-time databases in modern web apps.


🧰 Tech Stack
React + Vite (TypeScript)
Tailwind CSS
ShadCN UI
Firebase (Firestore only)

💡 What You’ll Learn:
✅ How to set up and integrate Firebase Firestore
✅ Add, display, and delete notes from Firestore
✅ Real-time syncing using onSnapshot
✅ Firestore addDoc, collection, and deleteDoc
✅ Clean React component architecture
✅ Styling with Tailwind + ShadCN for beautiful UI
✅ Folder separation (lib/firebase.ts)

🧠 Real-World Interview Readiness:
* How does Firestore handle real-time updates?
* What are async data listeners in React?
* How do you structure a full-stack app frontend + backend?
* How would you secure a Firestore collection for user-specific data?

Task:
Add an “Edit Note” feature
Show created timestamps for each note
Add tags or categories to filter notes




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
