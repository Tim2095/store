import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import classes from './ProductDetails.module.css'
import AddBtn from '../ui/AddBtn'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'


const ProductDetails = () => {

  const dispatch = useDispatch()
  const [product, setProduct]= useState({})
  const params = useParams()
  const productId = params.productId

  const addProductHandler = () => {
    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      amount: 1
    }
    dispatch(cartActions.addToCart(newItem))
  }

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
  }, [productId]) 

  return (
    <div className={classes.product + ' container'}>
      <img className={classes['product-img']} src={product.productImg} alt='product' /> 
      <h2 className={classes.title}>{product.title}</h2>
      <p className={classes['product-desc']}>{product.description}</p>
      <p className={classes.price}>{product.price} $</p>
      <AddBtn btnClass="add-cart-btn" text="add" onClick={addProductHandler} />
    </div>
  )
}

export default ProductDetails

