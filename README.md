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
>
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
  return <div>Component</div>;
};
export default Component;

// RAFC (React Arrow Function Component)
const Component = () => {
  return <div>Component</div>;
};
// Requires manual export if needed
```

### Hooks in React

Hooks are functions that allow you to "hook into" React state and lifecycle features from function components.

Common Hooks:

```jsx
// useState - For managing component state
const [count, setCount] = useState(0);

// useEffect - For side effects
useEffect(() => {
  // Runs after component mounts
  return () => {
    // Cleanup function (runs before unmount)
  };
}, []); // Empty dependency array = run once on mount

// useRef - For persistent values
const inputRef = useRef(null);
```

### useEffect Hook in Detail

The `useEffect` hook allows you to perform side effects in functional components. Side effects include data fetching, DOM manipulation, subscriptions, and more.
ww

#### Basic Usage

```jsx
useEffect(() => {
  // Code to run after render
  console.log("Component rendered");
}, [dependencies]); // Optional dependency array
```

#### Dependency Array Behaviors

- **Empty array `[]`**: Effect runs only once after initial render (mount)
- **With dependencies `[dep1, dep2]`**: Effect runs when any dependency changes
- **No dependency array**: Effect runs after every render
- **Cleanup function**: Returns a function that runs before the component unmounts or before the next effect runs

#### Common useEffect Patterns

1. **Run once on mount (component initialization)**

```jsx
useEffect(() => {
  // Fetch initial data
  fetchUserData();
  // Set up event listeners
  window.addEventListener("resize", handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // Empty dependency array
```

2. **Run when specific values change**

```jsx
useEffect(() => {
  // Update document title when count changes
  document.title = `Count: ${count}`;
}, [count]); // Only re-run when count changes
```

3. **Synchronizing with external systems**

```jsx
useEffect(() => {
  const subscription = api.subscribe(userId, handleDataUpdate);

  return () => {
    subscription.unsubscribe();
  };
}, [userId]); // Re-subscribe when userId changes
```

4. **Data fetching with loading states**

```jsx
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [userId]);
```

### Props vs State

#### Props (Properties)

- Passed from parent to child components
- Read-only
- Changes trigger re-render

```jsx
// Parent
<ChildComponent name="John" age={25} />;

// Child
const ChildComponent = (props) => {
  return (
    <div>
      {props.name} is {props.age} years old
    </div>
  );
};
```

#### State

- Managed within component
- Can be modified using setState
- Changes trigger re-render

```jsx
const [count, setCount] = useState(0);
// Update state
setCount((prevCount) => prevCount + 1);
```

### Array Rendering in React

#### Why use map()?

- Transforms array data into JSX elements
- Declarative way to render lists
- Maintains array order

```jsx
const items = ["Apple", "Banana", "Orange"];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

#### Keys in Lists

Keys are required when rendering lists because:

- Help React identify which items changed, added, or removed
- Improve performance by avoiding re-rendering unchanged elements
- Maintain component state correctly

```jsx
// Bad Practice (using index as key)
{
  items.map((item, index) => <li key={index}>{item}</li>);
}

// Good Practice (using unique ID)
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

> **Note:** Using index as key is not recommended if:
>
> - List items can change (reordered, added, removed)
> - Items have state
> - List can be reordered or filtered

### React Router

React Router is the standard routing library for React applications. It enables navigation between views while keeping the UI in sync with the URL.

#### Setup

1. **Installation**

```bash
npm install react-router-dom
```

2. **Basic Router Setup**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### Navigation Components

1. **Link Component** - For navigation without page reload

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}
```

2. **NavLink Component** - Special version of Link that adds "active" styling

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
        Home
      </NavLink>
    </nav>
  );
}
```

3. **Programmatic Navigation**

```jsx
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic...
    navigate("/dashboard"); // Navigate after login
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

#### Route Parameters

Accessing URL parameters in components:

```jsx
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  return <div>Product ID: {productId}</div>;
}
```

#### Nested Routes

Creating layouts with nested routes:

```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <header>My E-commerce Site</header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <main>
        <Outlet /> {/* Child routes render here */}
      </main>

      <footer>© 2025 My Company</footer>
    </div>
  );
}
```

#### Protected Routes

Creating routes that require authentication:

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook to check auth status

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>;
```

#### Route Loading Data

Using loaders to fetch data before rendering:

```jsx
// With React Router v6.4+
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Loader function
async function productLoader({ params }) {
  const response = await fetch(`/api/products/${params.id}`);
  if (!response.ok) {
    throw new Response("Product not found", { status: 404 });
  }
  return response.json();
}

const router = createBrowserRouter([
  {
    path: "/products/:id",
    element: <ProductDetail />,
    loader: productLoader,
    errorElement: <ErrorPage />,
  },
]);

// In component:
function ProductDetail() {
  const product = useLoaderData(); // Access loader data
  return <div>{product.name}</div>;
}
```
