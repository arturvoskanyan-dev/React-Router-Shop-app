import Card from "../../components/Card/Card";
import style from "./Electronics.module.css"

const Electronics = ({ data }) => {
  const newData = data.filter((elem) => elem.category === "electronics") 

  return (
    <div className={style.electronics}>
      <div className="container">
        <div className={style.electronics_box}>
          <Card data={newData} />
        </div>
      </div>
    </div>
  )
}

export default Electronics
