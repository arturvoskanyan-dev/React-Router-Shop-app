import Card from "../Card/Card";
import style from "./Mens.module.css"

const Mens = ({ data }) => {
  const newData = data.filter((elem) => elem.category === "men's clothing") 

  return (
    <div className={style.mens}>
      <div className="container">
        <div className={style.mens_box}>
          <Card data={newData} />
        </div>
      </div>
    </div>
  )
}

export default Mens
