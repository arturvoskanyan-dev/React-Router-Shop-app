import { useState } from "react"
import CardItem from "./CardItem/CardItem"

export default function Card({ data }) {
    const [items, setItems] = useState(
        data.map((elem) => ({
            ...elem,
            count: 1
        }))
    )

    const plus = (index) => {
        setItems((prevItems) =>
            prevItems.map((elem, i) =>
                i === index ? {
                    ...elem,
                    count: elem.count + 1
                } : elem
            )
        )
    }

    const minus = (index) => {
        setItems((prevItems) =>
            prevItems.map((elem, i) =>
                i === index && elem.count > 1 ? {
                    ...elem,
                    count: elem.count - 1
                } : elem
            )
        )
    }

    return items.map((elem, index) => (
        <CardItem
            key={index}
            id={elem.id}
            image={elem.image}
            title={elem.title}
            price={elem.price}
            count={elem.count}
            rate={elem.rating.rate}
            category={elem.category}
            ratingCount={elem.rating.count}
            onPlus={() => plus(index)}
            onMinus={() => minus(index)}
        />
    ))
}