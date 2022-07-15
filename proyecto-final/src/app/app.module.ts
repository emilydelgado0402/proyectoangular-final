import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { GameComponent } from './game/game.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BannerComponent } from './banner/banner.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetasComponent,
    GameComponent,
    DetallesComponent,
    BannerComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
