
import React from 'react'

const DetailProdut = ( {params} : {params: {productId: string}}) => {
  return (
    <div>
      Detalle del producto : { params.productId}
    </div>
  )
}

export default  DetailProdut 
