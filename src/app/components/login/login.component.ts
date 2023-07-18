import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // atributos de la clase
loginForm: FormGroup = this.fb.group({
  email:[ 
    '',      // valor predeterminado del campo
     [      // validaciones
      Validators.required,
      Validators.email
     ]
    ],
    password: [
      '',    // valor predeterminado del campo
      [
        Validators.required,
        Validators.minLength ( 8 )
      ]
    ]
})

  //  cosntructor: inyeccion de dependencias
 constructor( private fb: FormBuilder ) {}
// Login//
login(){
  console.group('loginForm');
  console.info(this.loginForm.value);
  console.info( this.loginForm.valid);
  
  console.groupEnd();
  
}

}
