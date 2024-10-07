import React, { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import { FaChevronLeft } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import {
  getPhotosByCategories,
  getRandomPhotos,
  reset,
} from "../features/imageSlice"

function Search() {
  const [inputSearch, setInputSearch] = useState("")
  const dispatch = useDispatch()
  const {
    imageCollection,
    pageNumber,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useSelector((state) => state.image)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(getPhotosByCategories(inputSearch))
  }
  useEffect(() => {
    dispatch(getRandomPhotos())

    return () => {
      dispatch(reset())
    }
  }, [])
  return (
    <div className="searchDiv">
      <form className="formDiv" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </form>
      <div className="catgories-btn">
        <button
          className="btn"
          onClick={() => dispatch(getPhotosByCategories("Mountain"))}
        >
          Mountain
        </button>
        <button
          className="btn"
          onClick={() => dispatch(getPhotosByCategories("Beaches"))}
        >
          Beaches
        </button>
        <button
          className="btn"
          onClick={() => dispatch(getPhotosByCategories("Birds"))}
        >
          Birds
        </button>
        <button
          className="btn"
          onClick={() => dispatch(getPhotosByCategories("Food"))}
        >
          Food
        </button>
      </div>
      <div className="image-collection">
        {isLoading ? <p className="loading">Loading...</p> : ""}
        {imageCollection && imageCollection.length > 0 && (
          <>
            {imageCollection.map((image) => (
              <ImageCard
                key={image.id}
                link={image.image}
                description={image.description}
                userName={image.userName}
                userProfilImage={image.userProfilImage}
                likes={image.likes}
              />
            ))}
          </>
        )}
      </div>
      <div className="pagination">
        <button className="btn left" disabled={pageNumber === 1}>
          <FaChevronLeft />
        </button>
        <div className="pageCount">{pageNumber}</div>
        <button className=" btn right">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Search
