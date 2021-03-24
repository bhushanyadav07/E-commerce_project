export interface User{
    name: string;
    email: string;
    password: string;
    phone: string;
    isAdmin ?: boolean //"?" means optional value
  }