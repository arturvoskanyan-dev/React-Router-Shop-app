const Buy = ({newData}) => {
    const buy = () => {
        let basketData = JSON.parse(localStorage.getItem("data")) || [];
        let updateData = [...basketData, ...newData].filter((elem, index, arr) => {
            return index === arr.findIndex((t) => t.id === elem.id)
        })
        localStorage.setItem("data", JSON.stringify(updateData));
    }
  return (
    <>
        <button onClick={() => buy()}>Buy</button>
    </>
  )
}

export default Buy