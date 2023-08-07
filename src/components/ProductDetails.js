import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import classes from './ProductDetails.module.css'
import { useSelector } from 'react-redux'


const ProductDetails = () => {
  const cart = useSelector((cart) => cart.cart )
  console.log(cart.items)
  const [product, setProduct]= useState({})
  const params = useParams()
  const productId = params.productId


  useEffect(() => {
    const currentProducts = async() => {
      const req = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const resp = await req.json()
      const currentProduct = {
        id: resp.id,
        title: resp.title,
        price: resp.price,
        description: resp.description,
        productImg: resp.image
      }
      setProduct(currentProduct)
    }

    currentProducts()
  }, []) 

  return (
    <div className={classes.product + ' container'}>
      <img className={classes['product-img']} src={product.productImg} alt='product' /> 
      <h2>{product.title}</h2>
      <p className={classes['product-desc']}>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductDetails

