import star from "../../../assets/star.png"
import "./ProductItem.css"

export default function ProductItem(props) {
    const {image, title, count, price, index, onPlus, onMinus, rate, ratingCount, category} = props

    return (
        <section className="box-item" key={index}>
            <img src={image} alt="Product" />

            <header className="box-item-header">
              <h2>{Math.round(price * count)}$</h2>
              <button onClick={onMinus}>-</button>
              <span>{count}</span>
              <button onClick={onPlus}>+</button>
            </header>

            <div className="box-item-info">
              <h3>{title}</h3>
              <p>/{category}</p>
            </div>

            <footer className="box-item-footer">
              <span>
                <img src={star} />
                {rate}
              </span>
              <span>./{ratingCount}</span>
            </footer>

            <button>Buy</button>
        </section>
    )
}