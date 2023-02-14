import {create} from 'zustand'
import { Product } from '../types/types'
import { TypeUseStore } from '../types/types'


export const useStore = create<TypeUseStore>((set) => ({
  counterProducts: 0,
  incrementCounterProduct: () => set(state =>({counterProducts: state.counterProducts+1})),
  decrementCounterProduct: () => set(state =>({counterProducts: state.counterProducts -1})),
  removeAllProducts: () =>set(()=>({counterProducts:0})),

  Products:[],

  deleteOneProduct:(id:string)=>set(state=>(
    {Products:state.Products.filter((product:Product) =>{ 
      if(product._id === id)  state.subTotal -=product.totalPrice
      return product._id !== id}) 
    }
    )),

/*   deleteOneProduct:(id:string)=>set(state=>{
  
    return {}
  }), */

  addOneProduct:(newProduct:Product) =>set((state)=>{
    let copyProducts = [...state.Products]
    let isAddedProduct:Product | undefined = copyProducts.find((product)=>product._id === newProduct._id)
    
    if(isAddedProduct === undefined) {

      newProduct.cantidad=1
      newProduct.totalPrice = newProduct.price
      copyProducts.push(newProduct)
      state.subTotal +=newProduct.price
      return {Products:copyProducts}
    }
    

    let incrementProduct = copyProducts.map(product => {
      if(product._id === newProduct._id){
         product.cantidad+=1
         newProduct.totalPrice += newProduct.price
         state.subTotal +=newProduct.price
      }
      return product
    })
    return {Products:incrementProduct}
  }),
  reduceProductQuantity:(newProduct:Product) =>set((state)=>{

    let decrementProduct = state.Products.map(product => {
      if(product._id === newProduct._id){
        if(product.cantidad>1){
          product.cantidad-=1
          product.totalPrice -=product.price
          state.subTotal -=newProduct.price
        }
        }
      return product
    })
    return {Products:decrementProduct}
  }),
  deleteAllProducts:(id:string)=>set((state:any)=>({Products:[]})),

  subTotal : 0,
  discount:20,
  totalPrice:0,
 
}))