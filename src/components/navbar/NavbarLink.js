const NavbarLink = ({ href, text }) => {
    return (
        <li className="navbar__link">
            <a href={href}>{text}</a>
        </li>
    )
}

export default NavbarLink
