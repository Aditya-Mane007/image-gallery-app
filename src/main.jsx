import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./Root.jsx"
import { Provider } from "react-redux"
import store from "./app/store.js"

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
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
