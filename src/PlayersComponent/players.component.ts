import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
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
  imports: [DetailComponent, CommonModule, FullscreenModalComponent, NavBarComponent, AppPlayersComponentPipes, HeroComponent, AsyncPipe], // Importa otros componentes y módulos necesarios
  templateUrl: './players.component.html' // Define la plantilla HTML del componente
})
export class PlayersComponent {
  
  firestore: Firestore = inject(Firestore);
  players: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'jugadores')
    this.players = collectionData(aCollection);
  }



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
