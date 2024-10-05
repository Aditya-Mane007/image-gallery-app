import React from "react"
import { Link } from "react-router-dom"
import { FaGithubAlt } from "react-icons/fa"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Image Flickr</Link>
      </div>
      <div className="navbar-links">
        <Link
          to="https://github.com/Aditya-Mane007/image-gallery-app"
          target="_blank"
          className="navbar-link"
        >
          <FaGithubAlt /> <span style={{ margin: "0 0.5rem" }}>Github</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
