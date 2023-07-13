import {  Component } from "@angular/core";

@Component({
    selector: 'como-quiero',      // app-Saludo
    templateUrl: './saludo.component.html',
    styleUrls: [ './saludo.component.css' ]
})

export class Saludo{
    saludo = 'Hola Mundo desde Angular';
}                   //SaludoComponent