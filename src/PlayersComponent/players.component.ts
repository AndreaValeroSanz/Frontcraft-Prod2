import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from '../MediaComponent/fullscreen-modal/fullscreen-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { HeroComponent } from './hero/hero.component';
import { DetailComponent } from '../DetailComponent/detail.component';


@Component({
  selector: 'app-players',
  styleUrls: ['./players.component.css'],
  standalone: true, // Indica que este componente puede ser utilizado de manera independiente
  imports: [DetailComponent, CommonModule, FullscreenModalComponent, NavBarComponent, AppPlayersComponentPipes, HeroComponent], // Importa otros componentes y módulos necesarios
  templateUrl: './players.component.html' // Define la plantilla HTML del componente
})
export class PlayersComponent {

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


  isCardEnlarged = false; // Estado para controlar si la tarjeta está agrandada
  showModal = false; // Estado para controlar la visibilidad del modal
  @ViewChild(DetailComponent, { static: false }) detailComponentRef?: DetailComponent; // Referencia al componente de detalle
  @ViewChild('card') cardElement!: ElementRef; // Referencia al elemento de la tarjeta en el DOM
 

 
  // Método para alternar el tamaño de la tarjeta
  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged'); // Alterna la clase "enlarged" en el elemento de la tarjeta
    this.isCardEnlarged = !this.isCardEnlarged; // Cambia el estado de isCardEnlarged
  }

  // Método para abrir el modal
  openModal() {
    this.showModal = true; // Cambia el estado para mostrar el modal
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false; // Cambia el estado para ocultar el modal
  }
 
}
