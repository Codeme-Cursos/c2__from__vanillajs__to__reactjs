import NavbarCheckLink from "./NavbarCheckLink"
import NavbarLink from "./NavbarLink"

const Navbar = () => {
    return (
        <>
            {/* Sección de barra de navegación */}
            <div className="navbar__fake" />
            <nav className="navbar" id="navbar">
                <div className="navbar__logo">
                    <a href="/#banner">Logotipo</a>
                </div>
                <ul>

                    <NavbarLink href="/#banner" text="Profesión" />
                    <NavbarLink href="/#portfolio" text="Portafolio" />
                    <NavbarLink href="/#experiences" text="Experiencia" />
                    <NavbarLink href="/#contact" text="Contacto" />
                    <NavbarLink href="/#footer" text="Sobre Mi" />
                    <NavbarCheckLink />
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar
