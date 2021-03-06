import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
  {path : '', component : HomeComponent},  //if we want on same staring page blank path display default home
  {path : 'home', component : HomeComponent},
  {path : 'orders', component : UserOrdersComponent},
  {path : 'cart', component : CartComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
