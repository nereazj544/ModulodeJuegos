import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tresenraya',
  templateUrl: './tresenraya.component.html',
  styleUrls: ['./tresenraya.component.css']
})
export class TresenrayaComponent implements OnInit{

  currentPlayer: number = 1;
  board: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; 
  winner: number | null = null; 
  cplay1: number = 0; 
  cplay2: number = 0; 
  resultado: string = "";

  ngOnInit(): void {

    this.resetGame();
  }

  // Manejar el clic en una celda
  cellClicked(row: number, col: number): void {
    // Verificar si la celda está vacía y el juego no ha terminado
    if (this.board[row][col] === 0 && !this.winner) {
      // Marcar la celda con el jugador actual
      this.board[row][col] = this.currentPlayer;

      // Verificar si hay un ganador después del movimiento
      this.checkWinner();

      // Cambiar al siguiente jugador
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
  }

  checkWinner(): void {
    const lines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.board[a[0]][a[1]] &&
        this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
        this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
      ) {
      this.resultado = "Jugador " + this.currentPlayer + " ha ganado";
        if (this.currentPlayer === 1) {
          this.cplay1++;
        } else {
          this.cplay2++;
        }
      }
    }
  }

  // Reiniciar el juego
  resetGame(): void {
    this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.currentPlayer = 1;
    this.winner = null;
    this.resultado="";
  }

  rest(){
    this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    this.resultado="";
    this.cplay1=0;
    this.cplay2=0;
  }
}