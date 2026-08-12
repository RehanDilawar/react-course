<div align="center">
  <h1>🌐 Chapter 05: Context API 🔗</h1>
  <p><i>Solving the prop-drilling problem with elegant global state management.</i></p>
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
</div>

---

## 📖 About this Chapter

As apps grow, passing props down through multiple layers of intermediate components (prop drilling) becomes a nightmare. This chapter introduces the **Context API**, a React built-in solution for sharing state globally across the component tree without passing it explicitly down at every level.

### 🌟 Key Concepts Covered:

- **Prop Drilling**: Understanding the pain points of deeply nested props.
- **Creating Context**: Using `React.createContext()` to initialize a global store.
- **Providing Context**: Wrapping the application using `<Context.Provider>` to supply data.
- **Consuming Context**: Utilizing the `useContext` hook to access the state from any nested component.
- **State Management**: Updating the context state dynamically from nested child components.

---

## 🛠️ Let's Run It!

Experience global state in action!

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

> _"Provide at the top, consume anywhere."_ 📡✨
