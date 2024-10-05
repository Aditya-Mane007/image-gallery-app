import React from "react"
import { Routes, Route } from "react-router-dom"
import RootLayout from "../../Layout/RootLayout"
import Search from "../Search"
import Home from "../Home"

function Pages() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default Pages
