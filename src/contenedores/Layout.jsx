import Header from "../componentes/Header"
import Footer from "../componentes/Footer"



function Layout({children}) {
    return ( 
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Layout;