import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories : Category[] = []
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.collectAllCategory()

  }
//selecting category id
  categorySelected(c_id : string){
    console.log(c_id);

  }

  collectAllCategory(){
    this.categoryService.getAllCategories()
    .subscribe({
      next:(categories)=>{
        this.categories = categories
        console.log(categories);
        
      }, 
      error : (responce : HttpErrorResponse)=>{
        console.log(responce);
      }
    })
  }
}

/*    this.categoryService.getAllCategories()
    .subscribe({
      next : (categories)=>{
        this.categories = categories
        console.log(categories)

      },
      error : (responce : HttpErrorResponse)=>{
        console.log(responce);
      }
    })*/ 