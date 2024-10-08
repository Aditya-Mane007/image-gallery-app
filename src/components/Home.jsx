import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Bird from "../assets/bird.jpg"

function Home() {
  const arr = [
    "https://images.unsplash.com/photo-1703002574227-4548b3e76237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1719579002883-8bab62509288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1725571712202-73d2a270d4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1725656471389-b78f4703271f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1725714107655-114c53550c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726013646985-ef31b9471032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726086678905-63add8b5c5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726103076524-33a93fe1d11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726179655325-6abb713219ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726221439176-29a86774534a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726243204340-becde5d070db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726338363658-82554516b959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726345876982-efe17dab64bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726393500770-be9efcab65db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726398110813-1c03b6ef3217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726412513968-49c53a01c831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726503454447-6c67b92dcc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726510114046-b7938cdc1bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726519372376-6825c67bef15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726629597558-7450add25eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726835479857-68943bccbf94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1726864175528-2773f04a3327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1727053850589-732559330974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1727086758266-c5cb3e4b8ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1727112210607-e0a73550e8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",

    "https://images.unsplash.com/photo-1727229766396-efc10f50c169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",

    "https://images.unsplash.com/photo-1727434032792-c7ef921ae086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1727447903891-f4a3bad38598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1727478922223-2814a5095450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjE1MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjgzNjc0MDV8&ixlib=rb-4.0.3&q=80&w=1080",
  ]
  const arr1 = [...arr]
  const arr2 = [...arr].splice(1, 10)
  arr1.reverse()

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
        <div
          className="animationDiv"
          style={{ left: "0", animationDuration: "15s" }}
        >
          {arr.map((item, index) => (
            <div key={index}>
              <img src={item} alt="random Images" />
            </div>
          ))}
        </div>
        <div
          className="animationDiv"
          style={{ left: "50", right: "50", animationDuration: "10s" }}
        >
          {arr2.map((item, index) => (
            <div key={index}>
              <img src={item} alt="random Images" />
            </div>
          ))}
        </div>
        <div
          className="animationDiv"
          style={{ right: "0", animationDuration: "15s" }}
        >
          {arr1.map((item, index) => (
            <div key={index}>
              <img src={item} alt="random Images" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

// Title: Image Flickr
// Description:
// Discover a world of stunning visuals with Image Flickr! Our powerful image filter app lets you explore a vast collection of captivating images across various categories. Whether you’re searching for inspiration, looking for the perfect photo for your project, or just browsing for fun, Image Flickr makes it easy to find exactly what you need.

// With intuitive search features and customizable filters, you can quickly narrow down results to discover the most relevant images. Unleash your creativity and let your imagination run wild with Image Flickr—where every picture tells a story! for your project, or just browsing for fun, Image Flickr makes it easy to find exactly what you need.

// With intuitive search features and customizable filters, you can quickly narrow down results to discover the most relevant images. Unleash your creativity and let your imagination run wild with Image Flickr—where every picture tells a story!
