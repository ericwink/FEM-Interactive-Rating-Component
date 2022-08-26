import { useState } from "react"
import Rating from "./components/Rating"
import ThankYou from "./components/ThankYou"

function App() {
  const [rating, setRating] = useState('')
  const [submit, setSubmit] = useState(false)

  return (
    <>
      {!submit ?
        <Rating rating={rating} setRating={setRating} setSubmit={setSubmit} />
        :
        <ThankYou rating={rating} />}
    </>
  )
}

export default App
