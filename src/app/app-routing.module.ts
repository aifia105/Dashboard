import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';


const routes: Routes = [
  {path: '', component:AuthentificationComponent},
  {path: "authentification", data: {breadcrumb:"Authentification"} , component: AuthentificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
