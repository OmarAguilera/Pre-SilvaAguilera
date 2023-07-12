import { CartWidget } from "./CartWidget"

let linkStyles = {display: "flex", justifyContent: "center", marginLeft: "35px", fontSize: "20px"}
let menuStyles = {textDecoration: "none", listStyleType: "none", color: "inherit", marginRight: "10px", color: "brown"}

let general = {display: "flex"}

export function NavBar(){
    return (
        <nav style={general}>
            <CartWidget/>
            <ul style={linkStyles}>
                <a style={menuStyles}
                href=""><li>Home</li></a>
                <a style={menuStyles}
                href=""><li>Candies</li></a>
                <a style={menuStyles}
                href=""><li>Perfil</li></a>
            </ul>
        </nav>
    )
}