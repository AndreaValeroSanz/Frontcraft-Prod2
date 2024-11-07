import { Component } from '@angular/core';
import { CardGridModule } from '../card-grid/Card-grid.module';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { DetailComponentModule } from '../DetailComponent/detail.module';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [AppPlayersComponentPipes, DetailComponentModule, CardGridModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersArray {

  //Funcion para que al pulsar la flecha, te redirecione hacia la parte de arriba de la pagina
  goUp() {
    const element = document.getElementById('hero-section');
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

  }
  // Array completo de jugadores (datos iniciales)
  players = [
    { name: 'Jayson Tatum', ppg: '27.0', rpg: '7.1', apg: '5.7', age: 25, height:'2.03 m' ,weight:'95 Kg', image: 'Players/playerCard1.webp' },
    { name: 'Kemba Walker', ppg: '25.0', rpg: '4.1', apg: '5.9', age: 29, height:'1.83 m' ,weight:'84 Kg', image: 'Players/walker.webp' },
    { name: 'Stephen Curry', ppg: '26.0', rpg: '5.9', apg: '6.5', age: 34,height:'1.88 m' ,weight:'84 Kg', image: 'Players/curry.webp' },
    { name: 'Lebron James', ppg: '26.0', rpg: '6.8', apg: '6.0', age: 38, height:'2.06 m',weight:'113 Kg', image: 'Players/lebron.webp' },
    { name: 'Giannis Antetokounmpo', ppg: '24.0', rpg: '4.6', apg: '5.9', age: 28, height:'2.11 m' ,weight:'110 Kg', image: 'Players/giannis.webp' },
    { name: 'Russell Westbrook', ppg: '25.0', rpg: '5.9', apg: '6.0', age: 35, height:'1.93 m' ,weight:'91 Kg', image: 'Players/westbrook.webp' },
    { name: 'Nikola Jokic', ppg: '23.0', rpg: '4.1', apg: '5.0', age: 27, height:'2.11 m',weight:'129 Kg', image: 'Players/jokic.webp' },
    { name: 'Dejounte Murray', ppg: '23.0', rpg: '3.0', apg: '5.0', age: 26, height:'1.96 m',weight:'82 Kg', image: 'Players/murray.webp' },
    { name: 'Joel Embiid', ppg: '22.0', rpg: '3.5', apg: '4.5', age: 30, height:'2.13 m' ,weight:'127 Kg', image: 'Players/embiid.webp' }
  ];

  // Jugadores filtrados para mostrar en CardGridComponent
  filteredPlayers = [...this.players];
 // Índice del jugador seleccionado para mostrar detalles
 selectedPlayerIndex: number | null = null;
  // Método para manejar el evento de filtro
  onFilterChange(filter: { name: string, age: number | null }) {
    this.filteredPlayers = this.players.filter(player =>
      player.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      (filter.age === null || player.age === filter.age)
    );
  }
  selectPlayer(index: number) {
    this.selectedPlayerIndex = index;
  }
}
