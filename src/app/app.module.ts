import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './componentes/input-text/input-text.component';
import { ApiService } from './api/api.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    CalendarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
