import { Component, OnInit,} from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input()imagen:string=''
  @Input()parrafo:string=''
  @Input()boton:string=''
  @Input()idJuego:string=""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irdetalles(){
    this.router.navigate(["detalles",this.idJuego])
  }





}
