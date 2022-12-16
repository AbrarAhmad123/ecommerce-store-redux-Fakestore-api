import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [
    ] ,

}

const cartSlice = createSlice(
    {
         name: 'cart',
         initialState,
         reducers: {
            addToCart(state,action){
                const product=action.payload

                const exist = state?.cart?.find((x) => x.id === product.id)
                if (exist) {
                     exist.qty++ ;
                }
                else{
                    state.cart.push({...action.payload, qty:1})
                }
            },
            delCart(state,action){
                const productId = action.payload
                const exist1 = state?.cart?.find((x) => x.id === productId)
                if (exist1) {
                const vn=state?.cart?.filter((x) => x.id !== exist1.id)
                state.cart = vn;
            }
                 else {
                     return state.cart.map((x) =>
                         x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                 }
                },
                
            increaseqty(state,action){
                    const productId = action.payload
                    const incqty = state?.cart?.find((item)=> item.id === productId)
                    incqty.qty++; 
                    
                
            },
            decreaseqty(state,action){
                const decqty = state?.cart?.find((item)=>item.id === action.payload )
                if(decqty.qty === 1){
                    decqty = 1
                }
                else{
                    decqty.qty--;
                }
                
            }
        }
    }
)

export const {addToCart,delCart,increaseqty,decreaseqty} = cartSlice.actions;
export default cartSlice.reducer;
