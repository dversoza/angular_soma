import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultComponent } from './mult/mult.component';



@NgModule({
  declarations: [
    MultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultComponent
  ]
})
export class MultiplicacaoModule { }
