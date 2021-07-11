import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivComponent } from './div/div.component';



@NgModule({
  declarations: [
    DivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DivComponent
  ]
})
export class DivisaoModule { }
