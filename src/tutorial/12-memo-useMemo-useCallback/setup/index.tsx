import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
// const calculateMostExpensive = (products: Product[]) => {
//   console.log('🚀 calculateMostExpensive')
//   return (
//     products.reduce((total, item) => {
//       const price = item.fields.price
//       if (price >= total) {
//         total = price
//       }
//       return total
//     }, 0) / 100
//   )
// }
export default function PerformaceContainerSetup() {
  const { products, loading } = useFetch(url)
  const [count, setCount] = useState(0)

  // 2) Add addToCart in SingleProduct and Try to click counter, and then how to stop re-render addToCart using useCallback
  // const [cart, setCart] = useState(0)
  // const addToCart = () => {
  //   setCart(cart + 1)
  // }

  // 3) Need to show mostExpensive and Try to click counter, and then stop re-render mostExpensive using useMemo
  // const mostExpensive = calculateMostExpensive(products)

  if (loading) {
    return <h2>Loading API ...</h2>
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      {/* Case 3 */}
      {/* <h1>Most Expensive : ${mostExpensive}</h1> */}

      {/* Case 1 */}
      <ProductList products={products} />

      {/* Case 2 */}
      {/* <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <ProductList products={products} addToCart={addToCart} /> */}
    </>
  )
}

type ProductImage = {
  url: string
}

type ProductField = {
  name: string
  price: number
  image: ProductImage[]
}

type Product = {
  id: number
  fields: ProductField
}

type ProductListProps = {
  products: Product[]
  addToCart?: () => void
}

// 1) Add React.memo() for stop re-render ProductList when click counter
const ProductList = ({ products, addToCart }: ProductListProps) => {
  useEffect(() => {
    console.count('hello from ProductList')
  })

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            field={product.fields}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
}

type SingleProductProps = {
  field: ProductField
  addToCart?: () => void
}
const SingleProduct = ({ field, addToCart }: SingleProductProps) => {
  let { name, price } = field
  price = price / 100
  const image = field.image[0].url

  useEffect(() => {
    console.count('hello from SingleProduct')
  })
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
