import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_message = {
    email: [
      {type: "required", message: "EL CORREO ES OBLIGATORIO"},
      {type: "pattern", message: "TU CORREO ES INVALIDO"}
    ],

    password: [
      {type: "required", message: "LA CONTRASEÑA ES OBLIGATORIA"},
      {type: "minLength", message: "El numero de caracteres es incorrecto"}
    ]

  }

  errorMessage: any;

  constructor(private formBuilder: FormBuilder, 
    private authenticate: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController) { 


    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ),

    });
  }

  ngOnInit() {
  }

  async presentAlert(header: any, subHeader: any, message: any ){
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ["Ok"]
      }
    );
    await alert.present();
  }
  
  loginUser(credentials: any){
     console.log(credentials);
     this.authenticate.loginUser(credentials).then( (res: any) => {
      this.storage.set("isUserLoggedIn",true);
      console.log(res, "Respuesta del usuario")
      this.storage.set("user_id", res.user.id)
      this.navCtrl.navigateForward("/menu/home");
     }).catch(err =>{
      this.errorMessage = err
     });
    }

    goToRegister(){
      this.navCtrl.navigateForward("/register")
    }
  
}
