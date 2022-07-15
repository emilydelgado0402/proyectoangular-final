import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input()imagen:string=''
  @Input()parrafo:string=''
  @Input()logo:string=''

}
