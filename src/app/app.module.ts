import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { PrimeNgConfigModule } from '../primeng/primeng-config.module';
import { NavbarComponent } from './assets-header/navbar/navbar.component';
import { LoginComponent } from './login/login.component';  
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgConfigModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent  // Declara el componente
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}

