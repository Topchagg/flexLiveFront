import { Routes, Route } from "react-router-dom"

import {Layout,Home, Gallery,AboutUs,NotFound,Contact} from "./pages/pagesApi"

import './extraStyles.css'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path={"gallery"} element={<Gallery/>}/>
        <Route path={"services"} element={<></>} />
        <Route path={"about-us"} element={<AboutUs/>}/>
        <Route path={"contact"} element={<Contact/>} />
        
      </Route>
      <Route path={"*"} element={<NotFound/>} />
    </Routes>
  )
}

export default App
