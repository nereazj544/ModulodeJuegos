import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bricks-break',
  templateUrl: './bricks-break.component.html',
  styleUrls: ['./bricks-break.component.css']
})
export class BricksBreakComponent implements OnInit {
  ngOnInit(): void {

  }
  //!PUNTUAJE DEL JUGADOR
  puntuaje: number= 0;

}
