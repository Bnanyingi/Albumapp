import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './modules/land-page/land-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import {UserPageComponent} from './modules/user-page/user-page.component';
import { AlbumPageComponent } from './modules/album-page/album-page.component'

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

  { 
    path: 'homepage', 
    component: HomePageComponent
  },

  { 
    path: 'users', 
    component: UserPageComponent
  },

  { 
    path: 'albumpage', 
    component: AlbumPageComponent
  },





  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
