// detail.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() players: any[] = []; // Recibe el array completo de jugadores
  @Input() selectedPlayerIndex: number = 0; // Índice del jugador seleccionado

  get selectedPlayer() {
    return this.players[this.selectedPlayerIndex]; // Obtiene el jugador seleccionado por índice
  }

  constructor() { }
}