import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './modules/land-page/land-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandPageComponent 
  },
  { 
    path: 'login', 
    component: LoginPageComponent
  },
  { 
    path: 'signup', 
    component: SignupPageComponent
  },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
