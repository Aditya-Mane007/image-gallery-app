import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Bird from "../assets/bird.jpg"

function Home() {
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <div className="home">
      <div className="textSection">
        <h1 className="title">Image Flickr, Image Filtering App</h1>
        <p>
          Explore a stunning collection of images with Image Flickr! This
          powerful image filter app lets you effortlessly search and discover
          captivating visuals across various categories. With intuitive filters
          and customizable options, finding the perfect image has never been
          easier. Unleash your creativity and let your imagination shine with
          Image Flickr—where every picture tells a story!
        </p>
        <Link to="/search">
          <button className="btn">Get Started</button>
        </Link>
      </div>
      <div className="imageGallery">
        <marquee direction="up">
          {arr.map((item) => (
            <ImageDiv value={item} />
          ))}
        </marquee>
        <marquee direction="down">
          {arr.map((item) => (
            <ImageDiv value={item} />
          ))}
        </marquee>

        <marquee direction="up">
          {arr.map((item) => (
            <ImageDiv value={item} />
          ))}
        </marquee>
      </div>
    </div>
  )
}

export default Home

const ImageDiv = ({ value }) => {
  return (
    <div>
      <img
        src={Bird}
        alt=""
        style={{ width: "100%", height: "10rem", margin: "1rem 0" }}
      />
    </div>
  )
}

// Title: Image Flickr
// Description:
// Discover a world of stunning visuals with Image Flickr! Our powerful image filter app lets you explore a vast collection of captivating images across various categories. Whether you’re searching for inspiration, looking for the perfect photo for your project, or just browsing for fun, Image Flickr makes it easy to find exactly what you need.

// With intuitive search features and customizable filters, you can quickly narrow down results to discover the most relevant images. Unleash your creativity and let your imagination run wild with Image Flickr—where every picture tells a story!
