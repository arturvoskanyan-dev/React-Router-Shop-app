import React from 'react'
import image from "../../assets/image.png"
import style from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={style.not_found}>
      <img src={image} />
    </div>
  )
}

export default NotFound
