import React from 'react'
import Product from "../containers/Product";

export default function ProductList(props) {
  const products = props.products.products || [];
  console.log(products)
  return (
    <div>
      {products.map((product, i) => <Product key={i} product={product} />)}
    </div>
  )
}
