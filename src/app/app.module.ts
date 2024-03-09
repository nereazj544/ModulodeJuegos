/** 
 * !COSAS DE ANGULAR
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * !COMPONENTES
 */
import { PptComponent } from './componentes/ppt/ppt.component';
import { PortafoliosComponent } from './componentes/portafolios/portafolios.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BricksBreakComponent } from './componentes/bricks-break/bricks-break.component';
import { TresenrayaComponent } from './componentes/tresenraya/tresenraya.component';
// import { MemorygameComponent } from './componentes/memorygame/memorygame.component';
import { SearchComponent } from './componentes/search/search.component';
import { BoggleComponent } from './componentes/boggle/boggle.component';

/** 
 * ! MATERIAL ANGULAR
*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContactoZonaComponent } from './componentes/contacto-zona/contacto-zona.component';


@NgModule({
  declarations: [
    AppComponent,
    PortafoliosComponent,
    PptComponent,
    InicioComponent,
    ErrorComponent,
    BricksBreakComponent,
    TresenrayaComponent,
    SearchComponent,
    BoggleComponent,
    ContactoZonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
