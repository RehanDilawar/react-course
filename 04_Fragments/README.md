<div align="center">
  <h1>🧹 Chapter 04: React Fragments 🧩</h1>
  <p><i>Keeping our DOM clean and avoiding the dreaded "div soup".</i></p>
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
</div>

---

## 📖 About this Chapter

React requires every component to return a single parent element. Often, developers wrap everything in a `<div>`, leading to an unnecessarily deeply nested DOM. Enter **React Fragments**! This chapter will teach you how to group multiple elements without adding extra nodes to the DOM.

### 🌟 Key Concepts Covered:

- **The Wrapper Problem**: Understanding why React enforces a single root node.
- **Introducing Fragments**: Using `<React.Fragment>` to group siblings seamlessly.
- **The Shorthand Syntax**: Implementing `<>` and `</>` for cleaner code.
- **Keyed Fragments**: When and how to pass a `key` to a fragment (e.g., mapping over arrays).
- **Performance & CSS**: How fragments improve performance and unbreak CSS layouts built with Flexbox/Grid by avoiding extra wrappers.

---

## 🛠️ Let's Run It!

Check out the clean DOM structure!

1. **Install Packages**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **View in Browser**
   Open [http://localhost:5173](http://localhost:5173) or [http://localhost:3000](http://localhost:3000)

---

> _"Less DOM nodes, more performance!"_ ⚡✨
