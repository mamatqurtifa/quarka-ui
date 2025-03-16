<div align="center">
  <img src="https://quarkaui.qurtifa.my.id/quarka.svg" alt="Quarka UI Logo" width="200" height="auto" />
  <h1>Quarka UI</h1>
  <p><strong>Modern Tailwind CSS Component Library for Light Themes</strong></p>
  
  <p>
    <a href="#components"><strong>Components</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#documentation"><strong>Documentation</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a>
  </p>
  
  <p>
    <a href="https://github.com/mamatqurtifa/quarka-ui/stargazers">
      <img src="https://img.shields.io/github/stars/mamatqurtifa/quarka-ui" alt="Stars">
    </a>
    <a href="https://github.com/mamatqurtifa/quarka-ui/network/members">
      <img src="https://img.shields.io/github/forks/mamatqurtifa/quarka-ui" alt="Forks">
    </a>
    <a href="https://github.com/mamatqurtifa/quarka-ui/issues">
      <img src="https://img.shields.io/github/issues/mamatqurtifa/quarka-ui" alt="Issues">
    </a>
    <a href="https://github.com/mamatqurtifa/quarka-ui/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/mamatqurtifa/quarka-ui" alt="License">
    </a>
  </p>
</div>

## About Quarka UI

Quarka UI is a modern Tailwind CSS component library specifically designed for light themes. The name "Quarka" combines "Qurtifa" (our founder) and "Arka" (meaning light), embodying our focus on creating beautiful, light-themed UI components.

### Key Features

- 🎨 **Light Theme Optimized**: Every component is crafted specifically for light mode aesthetics
- 🧩 **Modern Design Language**: Clean, seamless, rounded elements with a contemporary feel
- 🌈 **Curated Color Palette**: Focused on blue-400 to indigo-600 color ranges
- ✨ **Modern UI Patterns**: Incorporating bento grids, subtle blur effects, and modern layouts
- ⚙️ **Alpine JS Integration**: Enhanced interactivity without heavy JavaScript frameworks
- 🖋️ **Lucide Icons**: Beautiful, consistent icons throughout the component library
- 🔤 **Plus Jakarta Sans**: Modern, readable typography as the default font

## Getting Started

### Installation

```bash
npm install quarka-ui
```

Or with yarn:

```bash
yarn add quarka-ui
```

### Quick Setup

1. Install Quarka UI
2. Add it to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
    './node_modules/quarka-ui/**/*.js',
  ],
  plugins: [
    require('quarka-ui/plugin'),
    // ...
  ],
}
```

3. Import the CSS in your main CSS file:

```css
@import 'quarka-ui/dist/style.css';
```

4. Start using components:

```html
<button class="quarka-btn quarka-btn-primary">
  Get Started
</button>
```

## Components

Quarka UI includes a wide range of components for building modern websites:

### Basic Elements
- Buttons
- Typography
- Cards
- Inputs
- Badges
- Alerts

### Navigation
- Navbar
- Sidebar
- Tabs
- Breadcrumbs
- Pagination

### Layout
- Hero Sections
- Bento Grids
- Containers
- Dividers
- Glass Morphism Panels

### Feedback
- Modals
- Toasts
- Tooltips
- Progress Indicators

### Content Display
- Testimonials
- Pricing Tables
- Feature Sections
- Statistics Displays
- Team Member Cards

## Documentation

Visit our documentation website at [docs.quarka-ui.com](https://docs.quarka-ui.com) to see detailed usage examples, component API references, and live demos.

## Technology Stack

- **Tailwind CSS**: Utility-first CSS framework
- **Alpine JS**: Lightweight JavaScript for enhanced interactivity
- **Lucide Icons**: Simple, consistent, and beautiful icons
- **Plus Jakarta Sans**: Modern, readable font face

## Why Quarka UI?

- **Light Theme Focus**: Unlike many dark-mode focused libraries, Quarka UI is specifically optimized for light themes
- **Modern Aesthetics**: Follows the latest design trends like bento grids, subtle blur effects, and seamless transitions
- **Developer Experience**: Easy to customize, implement, and extend
- **Lightweight**: Minimal performance impact with optimized code
- **Accessibility**: Designed with accessibility in mind

## Roadmap

- [ ] Initial Component Library Release (Q2 2025)
- [ ] Component Playground & Builder
- [ ] Template Collection
- [ ] Figma UI Kit
- [ ] Dark Mode Alternative Versions

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

## License

Quarka UI is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Tailwind CSS Team
- Alpine JS Contributors
- Lucide Icons Project
- Plus Jakarta Sans Type Foundry
- All our contributors and supporters

---

<div align="center">
  <p>Created with ❤️ by <a href="https://github.com/mamatqurtifa">Qurtifa</a></p>
  <p>© 2025 Quarka UI. All rights reserved.</p>
</div>