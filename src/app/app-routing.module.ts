import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DetailsComponent } from './details/details.component';
import { AuthGaurd } from './gaurds/auth.gaurd';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGaurd]},
  {path:'add/:id', component:AddClientComponent,canActivate:[AuthGaurd]},
  {path:'details/:id', component:DetailsComponent,canActivate:[AuthGaurd]}

  
  
];

@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
    providers:[AuthGaurd]
})
export class AppRoutingModule { }