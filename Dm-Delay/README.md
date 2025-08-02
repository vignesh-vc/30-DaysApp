Day 1 App: DM Delay Button
✅ This app delays your message with a timer before sending — giving you a chance to cancel it.

💡 What you’ll learn today:
* setTimeout() & clearTimeout()
* useState for message, delay, timer
* Conditional rendering (Send vs Cancel)
* Clean UI with TailwindCSS + ShadCN
* Folder structure: components/pages separation
* Real-world thinking — “Undo” logic in messaging

🧠 Tech Stack Covered:
✅ React + Vite (TypeScript)
✅ Tailwind CSS
✅ ShadCN UI Components
❌ Firebase (we’ll add later)

🎯 Why This Matters in Interviews:
* Shows you understand timers (async logic)
* Good for system design questions (cancel queues, message buffers)
* Demonstrates clean UI logic with conditional rendering

📌 Extra Task: 
1. Recreate the DM Delay Button app from scratch.
2. Add a custom delay input (10s/30s/60s).
3. Replace “Message Sent” with a toast notification.
4. Optional: Add a message preview before sending.

🧪 5 Interview Questions Based on Today’s App:
1. How does setTimeout() work in JavaScript?
2. What is the purpose of clearTimeout()?
3. What are React hooks, and how did we use them here?
4. How can you conditionally render a UI component in React?
5. How would you convert this to work with a backend like Firebase?





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
