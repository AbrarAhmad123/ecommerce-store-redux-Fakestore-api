import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { Footer } from './Footer'
import { addToCart } from '../redux/Reducer/cartSlice'




const Productt = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  
  
  
  
  const addProduct = (product) => {
    dispatch(addToCart(product));
  }




  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct();
  }, [])

  const Loading = () => {

    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />

        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} style={{ lineHeight: 2 }} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    )
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-5">
          <img src={product.image} alt={product.title}
            height="400px" width="400px" />
        </div>
        <div className="col-md-6 ">
          <h4 className="text-uppercase text-black-420">
            {product.category}
          </h4>
          <h1 className="display-5" >{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            <h3 className="display-6 fw-4 my-4">
              ${product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
              Add to cart</button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-4 py-2">Go to Cart</NavLink>
          </p>
        </div>
      </>
    )
  }


  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Productt
