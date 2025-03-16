import Card from "../Card/Card";
import style from "./Home.module.css"

const Home = ({data}) => {
  return (
    <div className={style.home}>
        <div className="container">
            <div className={style.main_box}>
                <Card data={data} />
            </div>
        </div>
    </div>
  )
}

export default Home
