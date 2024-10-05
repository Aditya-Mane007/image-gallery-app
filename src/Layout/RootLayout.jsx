import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <div className="rootLayout">
      <div className="container">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default RootLayout
