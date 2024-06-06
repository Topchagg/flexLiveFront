import { Outlet } from "react-router-dom";


import {Header,Footer} from "../../sections/sectionsApi";

const Layout = () => {

    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout