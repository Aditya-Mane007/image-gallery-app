import { configureStore } from "@reduxjs/toolkit"
import ImageReducer from "../features/imageSlice"

const store = configureStore({
  reducer: {
    image: ImageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export default store
