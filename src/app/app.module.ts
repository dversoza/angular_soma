import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SomaModule } from '../app/soma';
import { SubtracaoModule } from '../app/subtracao'
import { MultiplicacaoModule } from '../app/multiplicacao'
import { DivisaoModule } from './divisao';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomaModule,
    SubtracaoModule,
    MultiplicacaoModule,
    DivisaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
