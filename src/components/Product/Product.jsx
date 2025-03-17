import { useParams } from "react-router-dom";
import React from 'react'
import star from "../../assets/star.png"
import style from "./Product.module.css"

const Product = ({ data }) => {
    const { id } = useParams()
    const newData = data.find((elem) => elem.id == id)

    return (
        <div className={style.product_box}>
            <div className={style.product_container}>
                <figure className={style.product_img}>
                    <img src={newData.image} />
                </figure>
                <section className={style.product_info}>
                    <div className={style.product_title}>
                        <h2>{newData.title}</h2>
                    </div>
                    <div className={style.product_rating}>
                        <span>
                            <img src={star} />
                            {newData.rating.rate}.
                            {newData.rating.count}
                        </span>
                    </div>
                    <div className={style.product_description}>
                        <p>{newData.description}</p>
                    </div>
                    <div className={style.product_price}>
                        <h2>{newData.price}$</h2>
                        <button>Buy</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Product
