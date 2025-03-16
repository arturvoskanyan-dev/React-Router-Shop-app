import NavItem from "./NavItem/NavItem"
import search from "../../assets/search.png"
import "./Nav.css"

export default function Nav({nav}) {
    return (
      <nav>
        <div className="container">
            <div className="nav-logo">
                <h1>BombShop</h1>
            </div>

            <NavItem nav={nav} />
            
            <div className="nav-search">
                <input type="text" />
                <img src={search} />
            </div>
        </div>
      </nav>
    )
}