import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgConfigModule } from '../../primeng/primeng-config.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgConfigModule
  ],
  declarations: [RegistroComponent]
})
export class RegistroModule {}
