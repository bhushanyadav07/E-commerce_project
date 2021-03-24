import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form! : HTMLFormElement;
  error! : any;
  success! : any;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  login(event : Event){
    event.preventDefault();
    this.form = <HTMLFormElement>event.target
    this.readFormValues();
  }

  //navigate the page when login performs
  navigateToHomePage(){
    this.router.navigate([''])

  }

  readFormValues(){
    let email = (<HTMLFormElement>
                  this.form.elements.namedItem('email')).value
    let password = (<HTMLFormElement>
                    this.form.elements.namedItem('password')).value


    let credentials = {
      email, password
    }
    //calling userService
    console.log(credentials);
    this.userService.login(credentials).subscribe({
      next : (result)=>{
        console.log(result);
        this.success = result.message
        this.error = undefined
        //this.userService.saveTokenTolocalStorage(result.token)
        this.navigateToHomePage()
 
      },
      error : (responce : HttpErrorResponse)=>{
        console.log(responce.error);
        this.success = undefined
        this.error = responce.error.error.message
      }
    })

  }

}
