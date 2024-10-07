import React from "react"
import { CiHeart } from "react-icons/ci"

function ImageCard({ link, description, userName, userProfilImage, likes }) {
  return (
    <div className="image-card">
      <div className="imageDiv">
        <img src={link} alt={description} />
      </div>
      {/* <div className="image-owner-info">
        <span className="user-info">
          <img src={userProfilImage} alt="" />
          <div className="name">{userName}</div>
        </span>
        <div className="image-stats">
          <CiHeart />
          {likes}
        </div>
      </div> */}
    </div>
  )
}

export default ImageCard
