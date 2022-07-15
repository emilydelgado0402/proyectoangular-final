import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent  {

  @Input() juegos:string=''
  @Input() parrafo:string=''
  @Input() imagen:string=''
}
