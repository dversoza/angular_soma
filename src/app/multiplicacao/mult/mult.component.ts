import { Component, OnInit } from '@angular/core';
import { MultiplicarService } from '../services';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css']
})
export class MultComponent implements OnInit {
  private result!: number;
  constructor(private multService: MultiplicarService) { }

  ngOnInit(): void {
  }

  multiplicar(num1: string, num2: string) {
    let n1: number = parseFloat(num1);
    let n2: number = parseFloat(num2);
    this.result = this.multService.multiplicar(n1, n2);
  }

  get resultado() {
    return this.result.toString();
  }

}
