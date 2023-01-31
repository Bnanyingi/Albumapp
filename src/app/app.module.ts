import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './modules/land-page/land-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { SignupPageComponent } from './modules/signup-page/signup-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { UserPageComponent } from './modules/user-page/user-page.component';
import { AlbumPageComponent } from './modules/album-page/album-page.component';

// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    UserPageComponent,
    AlbumPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    
    // MatIconModule 

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
