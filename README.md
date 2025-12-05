# My Portfolio

![Version](https://img.shields.io/badge/version-0.2.0-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-latest-brightgreen?logo=vite)
![Material-UI](https://img.shields.io/badge/MUI-7.3.5-007FFF?logo=mui)

Personal portfolio website of **Aryuna Poselenova**, showcasing skills, projects, and contact information in a clean, responsive design.

---

## Changelog 

### (v0.1.0 → v0.2.0)
- Upgraded React 16 → 19
- Upgraded Material-UI v4 → v7.3.5  
- Migrated project from CRA to Vite  
- Fixed Grid layout issues (removed deprecated props `item`, `justify`)  
- React 18 root rendering updated (`createRoot`)  
- Fully compatible with Vite + MUI + React 19

### (v0.2.0 → v0.2.1)
- Added pagination with React router
- Added game integration case study

---

## Features

- Responsive **About**, **Portfolio**, and **Contact** pages
- Projects dynamically rendered from `portfolio_data.js`
- Minimalistic design using MUI v7
- Contact email link functional
- Deployed with GitHub Pages

---

## Installation

```bash
git clone https://github.com/ami619847/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open in browser: http://localhost:5173

## Deployment

```bash
npm run build
npm run deploy
```

See deployed [page](https://ami619847.github.io/my-portfolio).

## Project Structure

src/
 ├─ components/   # About, Contact, Footer, Navbar, Portfolio, Project, GameIntegrationCaseStudy
 ├─ diagrams/     # ad-flow.svg, ad-timer.svg, integration-flow.svg  
 ├─ files/        # portfolio_data.js, images
 ├─ App.jsx
 └─ main.jsx
public/
 ├─ favicon/
 └─ manifest.json
