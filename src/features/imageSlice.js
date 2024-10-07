import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import imageService from "./imageServices"

const initialState = {
  imageCollection: [],
  pageNumber: 1,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
}

export const getRandomPhotos = createAsyncThunk(
  "image/getRandomImage",
  async (_, thunkAPI) => {
    try {
      return await imageService.getRandomPhoto()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getPhotosByCategories = createAsyncThunk(
  "image/getCategoryImage",
  async (category, thunkAPI) => {
    try {
      return await imageService.getPhotoByCategory(category)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const imageSlice = createSlice({
  name: "Image",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
    forward: (state) => {
      state.pageNumber = state.pageNumber + 1
    },
    backward: (state) => {
      state.pageNumber = state.pageNumber - 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomPhotos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRandomPhotos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = action.payload
      })
      .addCase(getRandomPhotos.fulfilled, (state, action) => {
        state.imageCollection = action.payload
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
      })
      .addCase(getPhotosByCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPhotosByCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = action.payload
      })
      .addCase(getPhotosByCategories.fulfilled, (state, action) => {
        state.imageCollection = action.payload
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
      })
  },
})

export const { reset, forward, backward } = imageSlice.actions
export default imageSlice.reducer
