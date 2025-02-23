Chatbot for stock information made in React.js
![picture](https://github.com/user-attachments/assets/4e977209-be54-4301-9be3-fce5c036dbca)

# React Project Setup Guide

## Prerequisites
Ensure you have:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

Verify installations:
```sh
node -v
npm -v
git --version
```

## Setup
### 1. Clone Repository
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Install Dependencies
```sh
npm install  # OR yarn install
```

### 3. Run Development Server
```sh
npm run dev  # OR yarn dev
```
App runs at `http://localhost:5173/` (Vite) or `http://localhost:3000/` (CRA).

### 4. Build for Production
```sh
npm run build  # OR yarn build
```
Output is in `dist/` or `build/`.

### 5. Lint & Format (Optional)
```sh
npm run lint
npm run format
```

## Troubleshooting
- **Permission errors:** Try `sudo npm install`
- **Dependency issues:**
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- **CORS issues:** Configure a proxy in `vite.config.js` or `package.json`.


