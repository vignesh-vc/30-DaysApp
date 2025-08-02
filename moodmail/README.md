Day 2 App: MoodMail – Emotion-Based Email Generator

✅ This app takes your mood (like “happy” or “sad”) and instantly gives you a creative email subject line + a footer emoji signature — all based on how you feel.

⸻

💡 What You’ll Learn Today:

* Handling user input with useState
* Logic mapping: mood → smart output
* String manipulation (toLowerCase, includes check)
* Conditional rendering (if / else if / else)
* Clean UI design with TailwindCSS + ShadCN
* Folder-based file separation for reusability

⸻

🧠 Tech Stack Covered:

✅ React + Vite (TypeScript)
✅ Tailwind CSS
✅ ShadCN UI Components
❌ Firebase (coming on Day 3 👀)

⸻

🎯 Why This Matters in Interviews:

* Demonstrates real-world string logic
* Shows you can build dynamic input-based UIs
* Good intro to form handling + conditional display
* Tests your frontend thinking beyond static pages

⸻

📌 Extra  Task:
	1.	Rebuild the MoodMail app using your own moods (try “nervous”, “excited”).
	2.	Add emoji suggestions or quotes based on the mood.
	3.	Improve the subject by adding today’s date (bonus: use Date()).
	4.	Add a “Copy to Clipboard” button to copy the subject/footer.

⸻

🧪 5 Interview Questions Based on Today’s App:
	1.	How do you handle user input in React?
	2.	What’s the difference between if and switch? Which would be better here?
	3.	How can you normalize user input (like case-insensitive checks)?
	4.	What are controlled components in React?
	5.	How would you make this dynamic with Firebase or AI APIs?




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
