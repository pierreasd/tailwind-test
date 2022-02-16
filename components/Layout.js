import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center">
            <Navbar />
            <div className="h-12" />
            { children }
            <div className="h-12" />
            <Footer />
        </div>
    )
}

export default Layout
