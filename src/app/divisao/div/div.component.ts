import { Component, OnInit } from '@angular/core';
import { DividirService } from '../services';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
  private valor!: number;
  constructor(private divService: DividirService) { }

  ngOnInit(): void {
  }

  divisao(num1: string, num2: string) {
    let n1: number = parseFloat(num1);
    let n2: number = parseFloat(num2);
    this.valor = this.divService.dividir(n1, n2);
  }

  get talquetal() {
    return this.valor.toString();
  }
}
