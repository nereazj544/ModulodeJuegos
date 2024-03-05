import { Component, OnInit } from '@angular/core';
import { stCubes } from './cubes';
import { dicionario } from './dicionario';

@Component({
  selector: 'app-boggle',
  templateUrl: './boggle.component.html',
  styleUrls: ['./boggle.component.css']
})
export class BoggleComponent implements OnInit{
  protected Size: number = 4; //!esto definira el tamaño 
  protected cubes: string[] = [];
  protected letras: string[] = [];
  protected palabrasEncontradas: string[] = [];

  protected SelecionarPalabra: string[]=[];
  protected LastSelecionCelda: [number, number] | null = null;
  protected SelecionarCeldas=new Set<string>();
  
  starGame() {
    this.palabrasEncontradas = [];
    this.SelecionarPalabra = [];
    this.SelecionarCeldas = new Set<string>();


    this.cubes = stCubes.concat();
    shuffle(this.cubes);
    this.letras = this.cubes.map(c => c[Math.round(Math.random() * 6)]);
  }

  protected selecionarLetra(row: number, col: number){
    if(!this.isCell(row, col)){
      return;
    }

    if(this.SelecionarCeldas.has(`${row}, ${col}`)){
      return;
    }

    this.SelecionarPalabra.push(this.letras[row * 4 + col])
    this.SelecionarCeldas.add(`${row}, ${col}`);
    this.LastSelecionCelda = [row, col];
}

protected isCell(row: number, col: number){
  return !this.LastSelecionCelda ||
  (Math.abs(row - this.LastSelecionCelda[0]) <= 1 && Math.abs(col - this.LastSelecionCelda[1]) <= 1);
}

  protected puntuaje() {

  }


  cPalabra() {
    const palabra = this.SelecionarPalabra.join('').toLowerCase();
    if(dicionario.includes(palabra)){
      this.palabrasEncontradas.push(palabra);
    }
    this.SelecionarCeldas = new Set();
    this.SelecionarPalabra
  }

  ngOnInit() {
    this.starGame();
  }

  

  // ! Fin del la clase  
}

function shuffle<T>(items: T[]): void {
  for (let i = 0; i < items.length - 2; i++) {
    const swapIndex = Math.floor(Math.random() * (items.length - i));
    [items[i], items[swapIndex]] = [items[swapIndex], items[i]];

  }
}