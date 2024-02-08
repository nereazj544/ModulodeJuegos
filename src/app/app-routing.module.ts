import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './componentes/ppt/ppt.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PortafoliosComponent } from './componentes/portafolios/portafolios.component';
import { BricksBreakComponent } from './componentes/bricks-break/bricks-break.component';

const routes: Routes = [
  //!PAGINA INICIO

  {path: '', component: InicioComponent},
  //!JUEGOS

  {path: 'piedra-papel-tijera', component: PptComponent },
  {path: 'BrickBreaker', component: BricksBreakComponent},
  
  //!PORTAFOLIOS (CV)
  {path: 'portafolios', component: PortafoliosComponent},

  //!ERROR
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
