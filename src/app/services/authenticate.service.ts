import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any){
    return new Promise((accept, reject) =>{
      const LoginData = this.getRegUser();
      LoginData.then(log => {
        if ( atob(log.password) == credentials.password && log.email == credentials.email)
      {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
      })
    });
  }

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user",userData);
  }

  getRegUser(){
    return this.storage.get("user")
  }
}
