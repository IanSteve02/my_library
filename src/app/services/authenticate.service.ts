import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      if ( credentials.email == "ianmiranda02@gmail.com" && credentials.password == "Ian020903")
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }
}
