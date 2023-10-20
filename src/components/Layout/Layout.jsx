import NavBar from "../NavBar/NavBar"

const Layout  = ({children}) => {
    return (
        <div>
            <NavBar/>
            <div>
                {children}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Layout