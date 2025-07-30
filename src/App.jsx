
import React from "react"
import { Link, BrowserRouter, Route, Routes, Router } from "react-router-dom"
import { Home } from "./components/home/home"
import { Notfound } from "./components/pagenotfound/notfound"
import { Navbar } from "./components/navbar/navabar"
import NotFoundPage from "./components/not found page/notfound"
import { Footer } from "./components/footer/footer"
import { Contact } from "./components/contact/contact"
import AboutMe from "./components/about/about"

function App() {


  return (
    <div>
      
      <Navbar/>
        
        <Routes>

          <Route index element={<Home />} />
                    <Route path="/about"  element={<AboutMe/>}/>

          <Route path="/contact"  element={<Contact/>}/>
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

        <Footer/>



     



    </div>
  )
}
export default App