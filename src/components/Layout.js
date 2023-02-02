
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { Outlet } from "react-router-dom"
import Testimonials from "./testimonials/Testimonials"


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Layout