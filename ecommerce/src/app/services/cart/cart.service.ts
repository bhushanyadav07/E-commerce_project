import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : string  [] ;
  constructor() {
    if(!this.isCartExists())
    localStorage.setItem('cart', JSON.stringify(this.cart));
    
   }
  addTocart(product : string){
    //this.cart[product._id];
    console.log(product)
    this.cart.push(product)
    localStorage.setItem('cart', JSON.stringify(this.cart));

  }
  isCartExists(){
    if(localStorage.getItem('cart')){
      return true
    }else{
      return false
    }
    
  }
  removeFromCart(product : Product){

  }
}
