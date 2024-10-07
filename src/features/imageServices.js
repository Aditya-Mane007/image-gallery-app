import axios from "axios"

const BASE_URL = "https://api.unsplash.com/"

const getRandomPhoto = async () => {
  const res = await axios.get(
    BASE_URL +
      `photos/random?page=1&per_page=10&count=32&client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`
  )
  const data = await res.data

  const jsonData = []

  await data.forEach((item) => {
    const imageData = {
      id: item.id,
      image: item.urls.regular,
      description: item.alt_description,
      userName: item.user.username,
      userProfilImage: item.user.profile_image.small,
      likes: item.likes,
    }

    jsonData.push(imageData)
  })

  return jsonData
}

export const getPhotoByCategory = async (category) => {
  const res = await axios.get(
    BASE_URL +
      `search/photos?query=${category}&page=1&per_page=12&count=30&client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`
  )

  const data = await res.data.results

  const jsonData = []

  await data.forEach((item) => {
    const imageData = {
      id: item.id,
      image: item.urls.regular,
      description: item.alt_description,
      userName: item.user.username,
      userProfilImage: item.user.profile_image.small,
      likes: item.likes,
    }

    jsonData.push(imageData)
  })

  return jsonData
}

const imageService = {
  getRandomPhoto,
  getPhotoByCategory,
}

export default imageService
