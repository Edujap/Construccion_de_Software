import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportesListComponent } from './reportes/reportes-list/reportes-list.component';
import { ReportesNewComponent } from './reportes/reportes-new/reportes-new.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
// Importar ReactiveFormsModule para los formularios
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const appRoutes: Routes = [
  {
    path: 'reporte',
    component: ReportesListComponent
  },
  {
    path: 'formulario',
    component: ReportesNewComponent
  },
  {path: '', redirectTo: 'reporte', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ReportesListComponent,
    ReportesNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
