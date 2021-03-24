import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
//input decorator
@Input('product')
product : Product;


  constructor(private CartService: CartService) { }

  ngOnInit(): void {
      console.log(this.product);
  }

  addToCart(){
    console.log(this.product._id);
    this.CartService.addTocart(this.product._id)
  }

}
