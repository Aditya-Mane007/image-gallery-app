import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root.jsx"

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
