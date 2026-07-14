<p align="center">
  <img src="public/solgate-logo-removebg-preview.png" width="160" alt="SolGate Logo" />
</p>

<h1 align="center">SolGate</h1>

<p align="center">
  <strong>Transparent Solana Proxy CLI for Windows — Native Linux Compile Speeds without WSL File-System Bottlenecks.</strong>
</p>

<p align="center">
  <a href="https://github.com/mannshah24/solgate/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-purple.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@mannshah24/solgate">
    <img src="https://img.shields.io/npm/v/@mannshah24/solgate.svg?color=green" alt="npm version" />
  </a>
  <a href="https://github.com/mannshah24/solgate">
    <img src="https://img.shields.io/github/stars/mannshah24/solgate.svg?color=blue" alt="GitHub stars" />
  </a>
</p>

---

## 💡 What is SolGate?

SolGate intercepts native Solana and Anchor commands on Windows and routes them to a hidden Linux Docker container. This bypasses the notoriously slow WSL boundary file system, giving developer operations (like Anchor compiles and Rust builds) native Linux compilation speeds directly from PowerShell or Windows Terminal.

This repository hosts the **high-end, responsive dark-mode landing page website** for the SolGate project, built using React, Vite, and Tailwind CSS.

---

## ✨ Website Features

* **Vibrant Dark Mode Aesthetics**: Sleek obsidian background (`#0A0A0A`) with curated purple, green, and blue accents, customized scrollbars, and background radial glows.
* **Glassmorphism Panels**: Reusable, responsive container cards with subtle borders, blurs, and hover glows.
* **Interactive Windows Terminal Mockup**:
  - Windows Terminal styling (tabs, minimize/maximize, close control buttons with Windows Terminal hover states).
  - Realistic typing speed (character-by-character) showing compilation and initialization commands.
  - Interactive replay controls to re-run the animation cycle.
  - Automatic success return terminal shell prompt `PS C:\dev\my-program>`.
* **Functional Code Boxes**: Built-in CLI copy buttons that copy shell commands to the clipboard and display visual feedback checkmarks.
* **Responsive Layouts**: Designed to be fully compatible across mobile, tablet, and ultra-wide desktop viewports.
* **SEO Best Practices**: Customized title headers, meta descriptions, and structural semantic markup.

---

## 🛠️ Technology Stack

- **Framework**: [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styles**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation & Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mannshah24/solgate.git
   cd solgate
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) in your browser to preview the site.*

4. **Build Production Bundle:**
   ```bash
   npm run build
   ```
   *The static compilation bundle will be generated in the `/dist` directory.*

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more details.
