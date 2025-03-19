import Card from "../../components/Card/Card"
import style from "./Womens.module.css"

const Womens = ({data}) => {
  const newData = data.filter((elem) => elem.category === "women's clothing") 

  return (
    <div className={style.womens}>
      <div className="container">
        <div className={style.womens_box}>
          <Card data={newData} />
        </div>
      </div>
    </div>
  )
}

export default Womens
