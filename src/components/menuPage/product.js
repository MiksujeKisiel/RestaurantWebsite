import React from "react"

const Product = ({ name, allergen, price, content }) => {
  return (
    <div>
      <div>
        <p>
          {name}
          <span>{allergen}</span>
        </p>
        <p>{price}</p>
      </div>
      <p>{content}</p>
    </div>
  )
}
export default Product


