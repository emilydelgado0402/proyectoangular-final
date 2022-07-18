import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
    {path:"game",component:GameComponent},
    {path:"detalles/:value",component:DetallesComponent},
    {path:"",component:GameComponent},
    {path:"search/:id",component:BusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }