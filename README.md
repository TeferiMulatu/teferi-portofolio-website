# 🌐 Personal Portfolio Website (TM.dev)

A modern, high-performance modular portfolio website designed with a component-driven architecture. This single-page application features a fluid Bento grid design framework, an optimized custom dark/light theme engine, and physics-driven micro-interactions.

🔗 **Live Production Link:** [your-portfolio-link.vercel.app](https://your-portfolio-link.vercel.app)

---

## 🛠️ Architectural Toolkit

This portfolio is engineered using a modern front-end stack focused on performance, type safety, and clean layout layers:

* **Framework:** React 19 (Single Page Application)
* **Language Runtime:** TypeScript (Strict end-to-end type safety)
* **Styling Engine:** Tailwind CSS v4.0 (Utilizing modern CSS-first design variables)
* **Animation Pipeline:** Framer Motion (Spring-physics micro-interactions and layout transitions)
* **Iconography Library:** Lucide React

---

## ✨ Key Technical Implementations

### 1. Advanced Bento Grid Architecture
Organizes technical skillsets, open-source connection links, and project deployment deep-dives into a clean, highly scannable grid configuration that adapts cleanly across mobile and desktop viewports.

### 2. Native Tailwind v4 Theme Engine
Powered by a decoupled React Context configuration (`ThemeContext`). It monitors user system preferences using hardware media queries (`prefers-color-scheme`) and caches selections locally inside `localStorage` to prevent style flashing.

### 3. Asynchronous Data Dispatch Gateway
The interactive "Start a Project" card features full client-side state handling and form validation. It handles user text payloads and processes network delivery pipelines smoothly to remote endpoints.

---

## 📁 Repository Map

```text
├── src/
│   ├── components/       # Reusable UI parts (ContactForm, Cards, etc.)
│   ├── context/          # State engines (ThemeContext layout configuration)
│   ├── index.css         # Global Tailwind stylesheet mapping design tokens
│   ├── App.tsx           # Layout Orchestrator and state engine hub
│   └── main.tsx          # DOM injection entry point
