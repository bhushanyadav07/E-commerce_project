import { Component, OnInit } from '@angular/core';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import {User} from '../../models/user'
import { UserService } from 'src/app/services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error! : any;
  success! : any;





  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  navigateToLoginPage(){
    this.router.navigate(['login']) //navigate to login page
  }


  readValuesFromForm(form : HTMLFormElement){
  
    let name = (<HTMLFormElement>form.elements.namedItem('name')).value //I have proper info related name
    let email = (<HTMLFormElement>form.elements.namedItem('email')).value
    let password = (<HTMLFormElement>form.elements.namedItem('password')).value
    let phone = (<HTMLFormElement>form.elements.namedItem('phone')).value

    //so now i wrap all these thing into one object called user
    let user : User = {
      name,
      email,
      password,
      phone
    };
    return user;
  }
//create a event for signup

  signup(event: Event){
    event.preventDefault(); //means we disabled default operation's like default signup stuffs
    let form = <HTMLFormElement>event.target;
    let user = this.readValuesFromForm(form) //need to save this user info createUser
    this.createUser(user, form);//save the user info
    
  }

  createUser(user : User, form : HTMLFormElement){
    this.userService.signup(user).subscribe(
      {
        //coding part remaining for success
        next : (result)=>{
          console.log(result);
          this.success = result;
          
          //this.success = result.message
          form.reset();
          //this.navigateToLoginPage()
          this.error = undefined;
 
          
        },
        error : (responce : HttpErrorResponse)=>{
          console.log(responce);
          this.error = responce.error.error.message
          this.success = undefined;
          
        }
      }
    )
  }
}
