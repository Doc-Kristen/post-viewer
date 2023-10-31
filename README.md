Приложение для просмотра статей о космосе, собранных из [NASA Open APIs](https://api.nasa.gov/)

**Стэк**: Vite/TypeScript/React/RTK/RTK Query/Material UI
**Демонстрация**: [PostViewer](https://post-viewer-six.vercel.app)
**Особенности приложения**:
- **Бесконечный скроллинг**: поддерживает бесконечную загрузку статей.
- **Виртуализация**: используются технологии [react-window ](https://github.com/bvaughn/react-window) и [react-window-infinite-loader](https://www.npmjs.com/package/react-window-infinite-loader) для оптимизации списка статей. Это улучшает производительность при работе с большими объемами данных.

**В процессе**: тесты (Vitest, React Testing Library)

---

Инструкция по запуску сборки:

1. Скачать архив
2. `npm i`
3. `npm run dev`

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
