import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  product : any;
  products : any;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.collectProducts()
  }

  collectProducts(){
    this.productService.getAllProducts().subscribe({
      next : (result)=>{
        this.product = result;
        //console.log(this.product.products);
        this.products = this.product.products;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
