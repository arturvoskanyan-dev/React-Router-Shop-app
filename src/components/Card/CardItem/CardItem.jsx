import { NavLink, Buy, star} from "../../index"
import "./CardItem.css"

export default function CardItem(props) {
  const { image, title, count, price, index, onPlus, onMinus, rate, ratingCount, category, id } = props
  const newData = [{id, image, title, count, price, rate, ratingCount, category, onMinus, onPlus}]

  return (
    <section className="box-item" key={index}>
      <NavLink to={`/product/${title.replaceAll(" ", "_")}/${id}`}>
        <img src={image} className="product-img" />
      </NavLink>

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

      <Buy newData={newData} />
    </section>
  )
}