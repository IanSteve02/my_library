import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

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

  registerUser(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user",userData);
  }
}
