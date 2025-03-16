import { NavLink } from "react-router-dom"
import "./NavItem.css"

export default function NavItem({nav}) {
    return (
        <div className="nav-items">
            {
                nav.map((elem, index) => {
                    return (
                        <div className="nav-item" key={index}>
                            <NavLink to={elem.replace("home", "/").replace(" ", "_")}>{elem}</NavLink>
                        </div>
                    )
                })
            }
      </div>
    )
}