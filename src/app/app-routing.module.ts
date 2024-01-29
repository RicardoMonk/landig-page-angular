import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CasosComponent } from './casos/casos.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

//En este arrat colocaremos nuestras rutas para generar una SPA (cada ruta sera un objeto)
const routes: Routes = [
  {path:'servicios', component:ServiciosComponent},
  {path:'casos', component:CasosComponent},
  {path:'nosotros', component:NosotrosComponent },
  {path:'certificaciones', component:CertificacionesComponent},
  {path:'blog', component:BlogComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
