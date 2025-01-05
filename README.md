# React Component Library Template

A modern template for creating your own React component library with Rollup. This boilerplate includes advanced features and simplifies configuration to help you get started quickly.

## Purpose

This repository was created to:

1. Simplify the process of creating a React component library with advanced features and configuration.
2. Serve as a learning resource, especially for understanding Rollup-based bundling.

---

## Features

- **Rollup for bundling**: Outputs `commonjs` and `es` module formats.
- **TypeScript support**: Includes a TypeScript configuration for strongly typed code.
- **Jest and React Testing Library**: Enables unit and integration testing.
- **CSS/SASS support**: Allows styling of components with CSS or SASS.
- **Storybook**: Helps design, test, and showcase components visually.
- **Optimized bundle size**: Uses [terser](https://www.npmjs.com/package/@rollup/plugin-terser) for minification.
- **Peer dependency support**: Externalizes dependencies like Ant Design using [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external).
- **ESLint**: Ensures code quality and style consistency.
- **Storybook Deployment**: Deploys Storybook to GitHub Pages with ease.
- **Sourcemap creation**: Facilitates debugging by generating source maps.

---

## Getting Started

### Clone the Repository

Clone the template and install dependencies:

```bash
git clone https://github.com/yhelwa/react-components-library.git"
cd rollup-react-library-starter
npm install
```

### Development

- **Storybook**: Run Storybook to visually test and iterate on your components:

```bash
npm run storybook
```

- **Rollup Watch and Build**: For local development, use Rollup to watch for changes and rebuild automatically:

```bash
npm run dev
```

- **Build the Library**: Compiles the library into the `dist` directory:

```bash
npm run build
```

- **Run Tests**: Executes tests using Jest and generates a coverage report:

```bash
npm run test
```

### Publishing to npm

To publish the library to npm or GitHub Packages:

- **For npm Registry**: Ensure you’re logged in and then run:

```bash
npm publish
```

- **For GitHub Packages**: Set up your `~/.npmrc` file as follows:

```bash
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

then publish:

```bash
npm publish
```
