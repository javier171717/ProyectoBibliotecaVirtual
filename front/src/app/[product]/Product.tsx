import React from 'react'

const Product = ( {params}) => {
  return (
    <div>
      <h1>Esta es la pagina de los prductos: { params.product}</h1>
    </div>
  )
}

export default Product


