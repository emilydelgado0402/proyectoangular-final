import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciogameService } from '../serviciogame.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valor:string=""
  inforecibida:any=""

  constructor(private ruta:ActivatedRoute,private servicio:ServiciogameService) { 
    this.ruta.params.subscribe((data:any)=>{
      this.valor=data.value
      this.servicio.infodetalles(this.valor).subscribe((info:any)=>{
        this.inforecibida=info
      })
    })
  }

  ngOnInit(): void {
  }

}

  



