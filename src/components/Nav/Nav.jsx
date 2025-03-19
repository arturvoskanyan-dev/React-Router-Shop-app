import NavItem from "./NavItem/NavItem"
import { IoSearchSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import search from "../../assets/search.png"
import "./Nav.css"
import { NavLink } from "react-router-dom";

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
                {/* <img src={search} /> */}
                <IoSearchSharp className="search"/>
            </div>
            <div className="nav-basket">
              <NavLink to="/basket"><SlBasket className="basket" /></NavLink>
            </div>
        </div>
      </nav>
    )
}