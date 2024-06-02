import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { SuperlistComponent } from './components/superlist/superlist.component';

const routes: Routes = [
  { path: 'marvel', component: SuperlistComponent },
  { path: 'bitacora', component: BitacoraComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
