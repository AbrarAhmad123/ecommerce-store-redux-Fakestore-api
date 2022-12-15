import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [] ,

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
            delCart:(state,action)=>{
                const product = action.payload
                const exist1 = state?.cart?.find((x) => x.id === product.id)
                if (exist1 === 1) {
                const vn=state?.cart?.filter((x) => x.id !== exist1.id)
                state.cart.push(vn)
                }
                else {
                    return state.cart.map((x) =>
                        x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                }
            }
        }
    }
)

export const {addToCart,delCart} = cartSlice.actions;
export default cartSlice.reducer;
