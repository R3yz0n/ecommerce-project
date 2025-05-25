# E-commerce Project

A React-based e-commerce application built with Vite and TailwindCSS.

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Getting Started

1. Go to your fav folder (desktop preferred) and then clone the repository

```bash
git clone https://github.com/R3yz0n/ecommerce-project.git
cd ecommerce
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

- [React](https://react.dev/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting

## Project Structure

```
ecommerce/
├── src/            # Source files
│   ├── assets/     # Static assets
│   ├── App.jsx     # Main App component
│   └── main.jsx    # Entry point
├── public/         # Public static files
└── index.html      # HTML template
```

## Sync with Latest Changes

If you want to discard your local changes and sync with the latest version, you have two options:

### Option 1: Using git restore
```bash
# Discard all local changes
git restore .

# Pull the latest changes from main branch
git pull origin main
```

### Option 2: Using git stash (Alternative method)
```bash
# Temporarily store all modified tracked files
git stash

# Remove the stored changes completely
git stash drop

# Pull the latest changes from main branch
git pull origin main
```

> **What these commands do:**
> - `git stash`: Saves your current changes in a temporary storage
> - `git stash drop`: Permanently discards the stored changes
> - `git pull origin main`: Downloads and integrates the latest changes from the main branch

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## React Development Concepts

### Node.js and React
Node.js is required in React development for several reasons:
- Package management through npm (Node Package Manager)
- Running development servers
- Bundling and building React applications
- Managing dependencies
- Running build tools like Vite

### Component Creation Methods
#### RAFCE vs RAFC
```jsx
// RAFCE (React Arrow Function Component Export)
const Component = () => {
  return <div>Component</div>
}
export default Component

// RAFC (React Arrow Function Component)
const Component = () => {
  return <div>Component</div>
}
// Requires manual export if needed
```

### Hooks in React
Hooks are functions that allow you to "hook into" React state and lifecycle features from function components.

Common Hooks:
```jsx
// useState - For managing component state
const [count, setCount] = useState(0)

// useEffect - For side effects
useEffect(() => {
  // Runs after component mounts
  return () => {
    // Cleanup function (runs before unmount)
  }
}, []) // Empty dependency array = run once on mount

// useRef - For persistent values
const inputRef = useRef(null)
```

### Props vs State

#### Props (Properties)
- Passed from parent to child components
- Read-only
- Changes trigger re-render
```jsx
// Parent
<ChildComponent name="John" age={25} />

// Child
const ChildComponent = (props) => {
  return <div>{props.name} is {props.age} years old</div>
}
```

#### State
- Managed within component
- Can be modified using setState
- Changes trigger re-render
```jsx
const [count, setCount] = useState(0)
// Update state
setCount(prevCount => prevCount + 1)
```

### Array Rendering in React

#### Why use map()?
- Transforms array data into JSX elements
- Declarative way to render lists
- Maintains array order
```jsx
const items = ['Apple', 'Banana', 'Orange']
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)
```

#### Keys in Lists
Keys are required when rendering lists because:
- Help React identify which items changed, added, or removed
- Improve performance by avoiding re-rendering unchanged elements
- Maintain component state correctly

```jsx
// Bad Practice (using index as key)
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}

// Good Practice (using unique ID)
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

> **Note:** Using index as key is not recommended if:
> - List items can change (reordered, added, removed)
> - Items have state
> - List can be reordered or filtered
