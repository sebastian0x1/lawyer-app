import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from './components/material_components/angular-material.module';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AuthService } from './common/service/auth.service';
import { VerifyGuard } from './guards/verifyToken.guard';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    FormsModule

  ],
  providers: [
    AuthService,
    VerifyGuard 
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
