import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
    ],

    number: [
      {type: "required", message: "EL CELULAR ES OBLIGATORIO"},
      {type: "maxLength", message: "El numero de celular es incorrecto"}
    ]
  }

  constructor(private formBuilder: FormBuilder) { 
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

      number: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(10)
        ])
      )
    });
  }

  ngOnInit() {
  }
  loginUser(Credentials: any){
     console.log(Credentials);
    }
}
