import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card'; 

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule 
  ]
})
export class PrimeNgConfigModule { }
