 Day 3: Build a Time Tracker Pie Chart App using React, Tailwind CSS, ShadCN & Chart.js


🚀 What You'll Learn :
✅ How to build a React project with Vite and TypeScript
✅ How to use Chart.js in React to visualize data
✅ Create reusable components (Form + Chart)
✅ Style beautifully with Tailwind CSS & ShadCN
✅ Real-world project logic: user input, state updates, chart rendering
✅ Best practices for beginner React projects

🧑‍💻 Tech Stack Used:
React + Vite (with TypeScript)
Tailwind CSS for styling
ShadCN UI components
Chart.js for data visualization
No Firebase yet (Coming on Day 4!)

📁 Folder Structure
src/
├── components/
│   ├── TimeInputForm.tsx
│   └── TimeChart.tsx
├── pages/
│   └── Home.tsx
├── App.tsx
├── main.tsx
└── index.css

🎯  Tasks:
Show total hours tracked and warn if over 24
Let users pick a color for each activity
Save the data using localStorage (optional)

🔎 Interview Questions You’ll Be Ready For:
• How to use Chart.js in React
• Difference between controlled & uncontrolled components
• How to manage dynamic lists in React
• Real-world usage of useState and component props
• How to structure clean and scalable React apps

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
