import {NavItem, IoSearchSharp, SlBasket, NavLink} from "../index"
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
                <IoSearchSharp className="search"/>
            </div>
            <div className="nav-basket">
              <NavLink to="/basket"><SlBasket className="basket" /></NavLink>
            </div>
        </div>
      </nav>
    )
}