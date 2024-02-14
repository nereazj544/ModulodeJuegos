import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * !COMPONENTES
 */
import { PptComponent } from './componentes/ppt/ppt.component';
import { PortafoliosComponent } from './componentes/portafolios/portafolios.component';

/** 
 * ! MATERIAL ANGULAR
*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BricksBreakComponent } from './componentes/bricks-break/bricks-break.component';
import { TresenrayaComponent } from './componentes/tresenraya/tresenraya.component';


@NgModule({
  declarations: [
    AppComponent,
    PortafoliosComponent,
    PptComponent,
    InicioComponent,
    ErrorComponent,
    BricksBreakComponent,
    TresenrayaComponent
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
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
