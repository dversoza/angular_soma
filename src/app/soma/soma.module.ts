import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './soma';
import { SomarService } from './services';



@NgModule({
  declarations: [
    SomaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomaComponent
  ],
  providers: [
    SomarService
  ]
})
export class SomaModule { }
