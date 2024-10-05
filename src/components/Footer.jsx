import React from "react"

function Footer() {
  const d = new Date()
  return (
    <div className="footer">
      <div className="logo">Image Filckr</div>
      <p>&copy; {d.getFullYear()} Image Filckr </p>
    </div>
  )
}

export default Footer
