import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciogameService } from '../serviciogame.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

link:any=""
busqueda:any=""

  constructor(private route:ActivatedRoute, private servicio:ServiciogameService) {

    this.route.params.subscribe((data:any)=>{
      this.link=data.id
      console.log(this.link)
      this.servicio.infobuscar(this.link).subscribe((info:any)=>{
        this.busqueda=info
        console.log(this.busqueda)
      }
      )
    })
   }

  ngOnInit(): void {
  }

}
