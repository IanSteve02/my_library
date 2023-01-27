import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authenticate: AuthenticateService,
    private alertController: AlertController) { 

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ),
      
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ),

      document_type: new FormControl(),

      document_number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(10)
        ])
      ),

      career: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ),

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
      )
    });
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

  registerUser(register_form: any){
    console.log(register_form)
    this.authenticate.registerUser(register_form).then( res =>{
      this.navCtrl.navigateForward("/login");
    }).catch(err => {

    })
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

}
