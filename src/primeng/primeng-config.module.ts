import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa los módulos de PrimeNG que utilizo para este proyecto
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule
  ]
})
export class PrimeNgConfigModule { }
