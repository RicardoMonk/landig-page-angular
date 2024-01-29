import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CasosComponent } from './casos/casos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    CasosComponent,
    NosotrosComponent,
    CertificacionesComponent,
    ContactoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,// esto es para formularios de tipo plantilla
    ReactiveFormsModule // esto es para formularios de tipos reativos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
