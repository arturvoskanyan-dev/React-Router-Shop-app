import { NavLink } from "react-router-dom"
import style from "./BasketItem.module.css"

const BasketItem = ({ id, to, image, title, count, price, onMinus, onPlus, onRemove }) => {
    return (
        <div className={style.product_item} key={id}>
            <NavLink to={to}>
                <div className={style.product_img}>
                    <img src={image} />
                </div>
            </NavLink>
            <section className={style.product_info}>
                <NavLink to={to} className={style.product_navlink}>
                    <div className={style.product_title}>
                        <h2>{title}</h2>
                    </div>
                </NavLink>
                <div className={style.product_price}>
                    <div className={style.price_count}>
                        <button onClick={() => onMinus()}>-</button>
                        <span>{count}</span>
                        <button onClick={() => onPlus()}>+</button>
                    </div>
                    <span>{Math.round(price * count)}$</span>
                </div>
            </section>
            <button className={style.remove_btn} onClick={() => onRemove()}>x Remove</button>
        </div>
    )
}

export default BasketItem
