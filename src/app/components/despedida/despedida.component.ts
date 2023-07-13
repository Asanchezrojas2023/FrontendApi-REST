import { Component } from '@angular/core';

@Component({
  selector: 'app-despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent {
 data = [
  {
    title: 'Title 1',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora sequi amet doloribus!',
    button:'ver mas'
  },
  {
    title: 'Title 2',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora sequi amet doloribus!',
    button:'ver mas'
  },
  {
    title: 'Title 3',
    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora sequi amet doloribus!',
    button:'ver mas'
  }

 ];
}
