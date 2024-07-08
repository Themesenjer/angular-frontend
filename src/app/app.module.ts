import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    RegistroModule
  ],
  declarations: [AppComponent],
  providers: [AuthService],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent); // Bootstrap manual del componente AppComponent
  }
}
