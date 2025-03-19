import Card from "../../components/Card/Card"
import style from "./Jewelery.module.css"

const Jewelery = ({data}) => {
  const newData = data.filter((elem) => elem.category === "jewelery") 

  return (
    <div className={style.jewelery}>
      <div className="container">
        <div className={style.jewelery_box}>
          <Card data={newData} />
        </div>
      </div>
    </div>
  )
}

export default Jewelery
