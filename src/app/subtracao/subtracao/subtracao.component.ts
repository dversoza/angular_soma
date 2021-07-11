import { Component, OnInit } from '@angular/core';
import { SubtrairService } from '../services';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.component.html',
  styleUrls: ['./subtracao.component.css']
})
export class SubtracaoComponent implements OnInit {
  private resultado!: number;

  constructor(private subtrairService: SubtrairService) { }

  subtrair(num1: string, num2: string) {
    let n1: number;
    let n2: number;
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    this.resultado = this.subtrairService.subtrair(n1, n2);
  }

  get resposta() {
    return this.resultado.toString();
  }

  ngOnInit(): void {
  }


}
