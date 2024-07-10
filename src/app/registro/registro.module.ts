import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { PrimeNgConfigModule } from '../../primeng/primeng-config.module';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistroRoutingModule,
    PrimeNgConfigModule
  ]
})
export class RegistroModule { }

