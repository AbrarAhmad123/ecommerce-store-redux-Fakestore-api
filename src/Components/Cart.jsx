import React from 'react'
import { useSelector } from 'react-redux'
import { delCart,increaseqty,decreaseqty } from '../redux/Reducer/cartSlice'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'


export const Cart = () => {

  const state = useSelector((state) => state?.cart?.cart)
  const dispatch = useDispatch()

  const handleclose = (product) => {
    dispatch(delCart(product))

  }

  const increasequantity = (product) => {
    dispatch(increaseqty(product))
  }

  const decreasequantity = (product) => {
    dispatch(decreaseqty(product))
  }


  
  const Cartitems = ({ statex }) => {
 
   
    return (
      <div >
        <div className="px-4 my-5 bg-light rounded-3" >
          <div className="container py-4">
            <button className="btn-close float-end " onClick={() => handleclose(statex.id)} aria-label='close' ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={statex?.image} alt={statex?.title} height="200px" width="180px" />
              </div>
              <div className="col-md-4">
                <h3>{statex?.title}</h3>
                <p className='lead fw-bold'>${statex.price}</p>
                <div className="d-flex flex-row ">
                  <button className="btn btn-danger me-1 m-4 ms-1 " height="10px" width="10px" 
                  onClick={()=>decreasequantity(statex.id)}>-</button>
                  <p className='lead fw-bolms-2 m-4'>{statex.qty}</p>
                  <button className="btn btn-success ms-1 m-4" height="10px" 
                   onClick={()=>increasequantity(statex.id)}>+</button>
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

  const chekcoutbtn = () => {
    return(
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-dark w-25 position-absolute top-70 start-50 translate-middle mt-1" >Proceed To CheckOut </NavLink>"  
        </div>
      </div>
    )
  }

  return (
    <>
      {state?.length === 0 && emptycart()}
      {state?.length !== 0 && state?.map(item => <Cartitems key={item.id} statex={item}/>)}
      {state.length !== 0 && chekcoutbtn()}
    </>
  )
}
