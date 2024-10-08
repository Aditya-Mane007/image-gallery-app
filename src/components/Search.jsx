import React, { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import { FaChevronLeft } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import {
  backward,
  forward,
  getPhotosByCategories,
  getRandomPhotos,
  reset,
} from "../features/imageSlice"

import { toast } from "react-toastify"

function Search() {
  const [inputSearch, setInputSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [displayBtn, setDisplayBtn] = useState(false)
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
    setSelectedCategory(inputSearch)

    const data = {
      category: selectedCategory,
      page: pageNumber,
    }
    dispatch(getPhotosByCategories(data))

    setInputSearch("")
    setDisplayBtn(true)
  }

  useEffect(() => {
    const data = {
      category: selectedCategory,
      page: pageNumber,
    }
    dispatch(getPhotosByCategories(data))
  }, [pageNumber])

  useEffect(() => {
    const data = {
      page: pageNumber,
    }
    dispatch(getRandomPhotos(data))

    if (isSuccess) {
      toast.success("Image Fetched Successfully")
    }

    if (isError) {
      toast.error(message)
    }

    setSelectedCategory("")
    return () => {
      dispatch(reset())
    }
  }, [])

  const categoryHandler = (value) => {
    setSelectedCategory(value)
    setDisplayBtn(true)

    const data = {
      category: selectedCategory,
      page: pageNumber,
    }
    dispatch(getPhotosByCategories(data))
  }
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
        <button className="btn" onClick={() => categoryHandler("Mountain")}>
          Mountain
        </button>
        <button className="btn" onClick={() => categoryHandler("Beaches")}>
          Beaches
        </button>
        <button className="btn" onClick={() => categoryHandler("Birds")}>
          Birds
        </button>
        <button className="btn" onClick={() => categoryHandler("Food")}>
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
      {displayBtn && (
        <div className="pagination">
          <button
            className="left btn"
            disabled={pageNumber === 1 ? true : false}
            onClick={() => dispatch(backward())}
          >
            <FaChevronLeft />
          </button>
          <div className="pageCount">{pageNumber}</div>
          <button className="right btn" onClick={() => dispatch(forward())}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default Search
