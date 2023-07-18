import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
// A tributos

  registerForm: FormGroup = this.fb.group({
    nombre:[
      '', // valor por defecto para campo
      [   // validaciones
        Validators.required
      ]
    ],
    email: [
      '',  // valor por defecto para el campo
      [  // validaciones
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',  // valor por defecto para el campo
      [  // validaciones
        Validators.required,
        Validators.minLength( 8 ),
      ]
    ]
  })

  // inyeccion de dependencia
 constructor ( private fb: FormBuilder)  {}
 // Metodo: Register
 register(){
  console.group('registerForm');
  console.info( this.registerForm.value);
  console.info( this.registerForm.valid);
  console.groupEnd();
  
 }
}
