<div align="center">

# Streamline

**A lightweight, real-time item manager built with React.**

Add, remove, and manage timestamped items in a live list.

Built by [Reabot6](https://seofg.xyz/) at **SFG** · Open source under the MIT License

</div>

---

## Overview

Streamline is a lightweight React application for managing a live list of timestamped items. It provides a simple foundation for building event-driven interfaces where users need to add items, remove them, and see updates reflected immediately.

The project focuses on clean component architecture, reusable state logic, accessible interactions, and maintainable styling.

Instead of keeping all the list logic inside a single component, Streamline separates state management into a custom React hook and keeps the UI and styles organized into dedicated files.

## Features

* **Live item management** — add and remove items from a list.
* **Automatic timestamps** — associate items with timestamps.
* **Reusable state logic** — manage list operations through a custom React hook.
* **Component-based UI** — keep presentation separate from application logic.
* **BEM-style CSS** — organize component styles with predictable naming conventions.
* **Accessibility improvements** — use accessible labels and modern keyboard event handling.
* **Loading state** — provide a dedicated loading state in the root application.
* **Test setup** — use React Testing Library for component testing.

## Tech Stack

| Layer    | Technology                     |
| -------- | ------------------------------ |
| UI       | React 18                       |
| Styling  | Plain CSS with BEM conventions |
| Tooling  | Create React App 5             |
| Testing  | React Testing Library          |
| Language | JavaScript, JSX                |

## Project Structure

```text
streamline/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   └── ItemBoard.jsx
    ├── hooks/
    │   └── useItemList.js
    ├── styles/
    │   ├── global.css
    │   └── ItemBoard.css
    ├── App.jsx
    ├── App.test.js
    └── index.js
```

### How It's Organized

* **`components/ItemBoard.jsx`** — renders the main item list interface.
* **`hooks/useItemList.js`** — encapsulates list state and add/remove operations.
* **`styles/global.css`** — contains application-wide styles.
* **`styles/ItemBoard.css`** — contains component-specific styles using BEM conventions.
* **`App.jsx`** — provides the root application component and loading state.
* **`App.test.js`** — contains the application test setup.
* **`index.js`** — serves as the React application entry point.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) and npm
* Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/reabot6/streamline.git
cd streamline
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm start
```

Open http://localhost:3000 in your browser.

The development server reloads the application when you make changes to the source files.

## Available Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm start`     | Start the development server                     |
| `npm run build` | Create an optimized production build in `/build` |
| `npm test`      | Run the test suite                               |

## Code Improvements

Streamline includes several structural and maintainability improvements over the original implementation.

| Before                                 | After                                             |
| -------------------------------------- | ------------------------------------------------- |
| `TideloomContainer.jsx`                | `ItemBoard.jsx`                                   |
| `TideloomContainer.css`                | `styles/ItemBoard.css`, using BEM                 |
| `App.css`                              | `styles/global.css`                               |
| List logic embedded in the component   | State logic extracted into `useItemList`          |
| Deprecated `onKeyPress` event handling | Modern `onKeyDown` event handling                 |
| Missing ARIA attributes                | Accessible labels for relevant inputs and buttons |

These changes make the code easier to maintain, extend, and test.

## Development Roadmap

* [ ] Persist items using `localStorage`.
* [ ] Support drag-and-drop item reordering.
* [ ] Add filtering and search.
* [ ] Introduce item categories and tags.
* [ ] Expand automated test coverage.

## Contributing

Contributions, bug reports, and feature suggestions are welcome.

1. Fork the repository.
2. Create a branch for your changes.
3. Follow the existing component structure and coding conventions.
4. Run the available tests.
5. Submit a pull request describing your changes.

For significant changes, open an issue first to discuss the proposed approach.

## License

Streamline is open-source software licensed under the [MIT License](LICENSE).

## Author

**Reabot6** — built at [SFG](https://seofg.xyz/).

---

<div align="center">

**Streamline — simple state management for a live list.**

</div>
