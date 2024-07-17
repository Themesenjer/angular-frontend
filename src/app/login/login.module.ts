import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgConfigModule } from '../../primeng/primeng-config.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgConfigModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
