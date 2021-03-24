import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineAll, map } from 'rxjs/operators';
import { Product } from 'src/app/models/products';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  token : any;
  getAllProductsURL = 'http://localhost/api/products'
  constructor(private http : HttpClient, private userService : UserService) { }

  //calling the components
  getAllProducts(){
    //console.log(this.userService.getToken())
    this.token = this.userService.getToken()
    return this.http.get(this.getAllProductsURL, 
    {
      headers : {
      'authorization' : `Bearer ${this.token}`
    }
  })
  
  
  }
}


