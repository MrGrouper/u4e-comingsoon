// import { React} from 'react'
import Header from "./components/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
