import React from "react"
import Header from "./Components/Header"
import ListCharacters from "./Pages/ListCharacters"
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <>
      <Header/>
      <Navbar />
      <ListCharacters />
    </>
  )
}

export default App
