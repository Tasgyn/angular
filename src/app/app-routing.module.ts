import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';


const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: '**', component: FormularioComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
