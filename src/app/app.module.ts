import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ComponentesModule } from './componentes/componentes.module';
import { ModulosModule } from './modulos/modulos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentesModule,
    ModulosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
