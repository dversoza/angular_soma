import { Component, OnInit } from '@angular/core';
import { SomarService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  private res!: number;

  constructor(private somarService: SomarService) { }

  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1)
    n2 = parseFloat(numero2)
    this.res = this.somarService.somar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

  ngOnInit(): void {
  }

}