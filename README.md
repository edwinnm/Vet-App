# Vet-App

Vet-App is an application for managing veterinary appointments.

The project was created with Vite, React adn TailwindCSS.

This application has been created for educational purposes.

## Installation

- Clone the project.

- Run the command to install the dependencies.

```bash
npm install
```

- Run the command to start the development server.

```bash
npm run dev
```

## How to deploy in GH-Pages

- Add base in the vite.config.js file.

```js
export default defineConfig({
    base: '/Vet-App/',
    ...,
}
```

- Run the command to build the project.

```bash
npm run build
```

- Add and push the static files generated in /dist.

```git
git add dist -f
git commit -m 'Adding dist'.
git subtree push --prefix dist origin gh-pages
```
