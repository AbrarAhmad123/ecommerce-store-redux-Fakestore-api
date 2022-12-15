import React from 'react'
import { useSelector } from 'react-redux'
import { delCart } from '../redux/Reducer/cartSlice'
import { useDispatch } from 'react-redux'


export const Cart = () => {

  const state = useSelector((state) => state?.cartReducer?.cart)
  const dispatch = useDispatch()

  const handleclose = (product) => {
    dispatch(delCart(product))

  }



  const Cartitems = ({ statex }) => {

    const increase = () => {
      return statex.qty + 1

    }
    const decrease = () => {
      return statex.qty - 1

    }

    return (
      <div>
        <div className="px-4 my-5 bg-light rounded-3" key={statex.id}>
          <div className="container py-4">
            <button className="btn-close float-end " onClick={() => handleclose(statex)} aria-label='close' ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={statex?.image} alt={statex?.title} height="200px" width="180px" />
              </div>
              <div className="col-md-4">
                <h3>{statex?.title}</h3>
                <p className='lead fw-bold'>${statex.price}</p>
                <div className="d-flex flex-row ">
                  <button className="btn btn-danger me-1 m-4 " height="10px" width="10px" onClick={decrease}>-</button>
                  <p className='lead fw-bolms-2 m-4'>{statex.qty}</p>
                  <button className="btn btn-success ms-1 m-4" height="20px"  onClick={increase}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptycart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" >
        <div className="container py-4">
          <div className="row">
            <h3>Cart is Empty Bro:(</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {state?.length === 0 && emptycart()}
      {state?.length !== 0 && state?.map(item => <Cartitems statex={item}/>)}
    </>
  )
}
