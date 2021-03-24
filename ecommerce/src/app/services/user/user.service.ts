import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userSignupUrl = "http://localhost/api/users/signup"
  private userLoginUrl = "http://localhost/api/users/login"
  
//we simply injected http client here, httpClient is class check out its documentation
//once we created a object we can used any where we want
  constructor(private http : HttpClient) { }


  //creating usertoken 
  private saveTokenTolocalStorage(token : string){
    localStorage.setItem('token', token)
  }
  //get token
  getToken(){
    return localStorage.getItem('token') ? localStorage.getItem('token'):" ";
  }
  //now creating signup method for sending the info to server
  signup(user: User){
    return this.http.post(this.userSignupUrl, user).pipe(
      map(result=>{
        return <{message : string}>result
      })
    )

  }
  //now calling login service from user service it'll interact with api
  login(credentials : {email : string, password : string}){
    return this.http.post(this.userLoginUrl, credentials).pipe(
      map((result: any) =>{
        
        this.saveTokenTolocalStorage(result.token)
        //map((result : any)=>{
        //return <Category[]>result['categories']
        
        //in login method we saved the token
        //
        return <loginResponce>result
      })
    )
     
  }
}

 


interface loginResponce{
  token : string,
  message : string
}
