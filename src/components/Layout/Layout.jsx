import Style from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";
function Layout() {
    return <div>
    <Navbar/>
    <div className="container">
    <Outlet></Outlet>
    </div>
    <Footer/>
    </div>
}

export default Layout;