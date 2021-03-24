import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getURL = "http://localhost/api/categories"

  constructor(private http : HttpClient, private user : UserService) { }
 
  getAllCategories(){
    return this.http.get(this.getURL)
    .pipe(
      map((result : any)=>{
        return <Category[]>result['categories']
      })
    )
  }

}
