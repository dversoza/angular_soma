import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DividirService {

  constructor() { }

  dividir(n1: number, n2: number) {
    return n1 / n2;
  }
}
