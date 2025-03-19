import { useState } from "react";
import BasketItem from "./BasketItem/BasketItem";
import style from "./Basket.module.css"

const Basket = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const plus = (id) => {
        setData((prevItems) => {
            const updatedData = prevItems.map((elem) =>
                elem.id === id 
                    ? { 
                        ...elem, 
                        count: ++elem.count 
                    }
                    : elem
            )
            localStorage.setItem("data", JSON.stringify(updatedData))
            return updatedData
        })
    }

    const minus = (id) => {
        setData((prevItems) => {
            const updatedData = prevItems.map((elem) =>
                elem.id === id && elem.count > 1
                    ? { 
                        ...elem, 
                        count: --elem.count }
                    : elem
            )
            localStorage.setItem("data", JSON.stringify(updatedData))
            return updatedData
        })
    }

    const remove = (id) => {
        setData((prevData) => {
            const updatedData = prevData.filter((elem) => elem.id !== id);
            localStorage.setItem("data", JSON.stringify(updatedData))
            return updatedData
        })
    }

    return (
        <div className={style.basket}>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>Basket</h1>
                </div>
                {
                    data.map((elem) => {
                        return (
                            <BasketItem
                                key={elem.id}
                                image={elem.image}
                                title={elem.title}
                                count={elem.count}
                                price={elem.price}
                                onMinus={() => minus(elem.id)}
                                onPlus={() => plus(elem.id)}
                                onRemove={() => remove(elem.id)}
                                to={`/product/${elem.title.replaceAll(" ", "_")}/${elem.id}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Basket