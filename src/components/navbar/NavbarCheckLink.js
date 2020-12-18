import { darkTheme, lightTheme } from '../../styles/themes';

const NavbarCheckLink = () => {

    const handleChange = e => {
        const themeCheckboxLabel = document.getElementById('themeCheckboxLabel');
        const { checked } = e.target;
        
        if (checked) {
            themeCheckboxLabel.innerText = 'Dark'
            changeTheme(darkTheme)
        } else {
            themeCheckboxLabel.innerText = 'Light'
            changeTheme(lightTheme)
        }
    }

    const changeTheme = theme => {
        const rootStyles = document.documentElement.style;
        Object.keys(theme).forEach(cssVar => {
            rootStyles.setProperty(cssVar, theme[cssVar])
        })
    }

    return (
        <li className="navbar__link">
            <input type="checkbox" id="themeCheckbox" onChange={handleChange} />
            <label htmlFor="themeCheckbox" id="themeCheckboxLabel">Light</label>
        </li>
    )
}

export default NavbarCheckLink
