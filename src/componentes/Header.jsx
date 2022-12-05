import '../assets/estilos/header.css'
import imagenes from '../assets/imagenes/logo.jpeg'

function Header() {
    return ( 
        <nav>
            <div class="contenedor">
                <ul  class="nav-ul_menu" >
                    <img className='logo' src={imagenes}></img>
                </ul>
            </div>
        </nav>    
    );
}

export default Header;