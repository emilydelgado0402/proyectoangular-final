import { Component, OnInit } from '@angular/core';
import {ServiciogameService} from '../serviciogame.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  inforecibida:any=""

  constructor(private servicio:ServiciogameService) {
    servicio.informacion().subscribe((data)=>{
      this.inforecibida=data
    })
   }

  ngOnInit(): void {
  }

}
