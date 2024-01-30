import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafoliosComponent } from './componentes/portafolios/portafolios.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModulodeJuegos';
}




const routes: Routes = [
  { path: 'Componente', component: PortafoliosComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
