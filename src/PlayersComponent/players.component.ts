import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from '../MediaComponent/fullscreen-modal/fullscreen-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { HeroComponent } from './hero/hero.component';
import { DetailComponent } from '../DetailComponent/detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-players',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [
    DetailComponent, 
    CommonModule, 
    FullscreenModalComponent, 
    NavBarComponent, 
    AppPlayersComponentPipes, 
    HeroComponent, 
    FormsModule
  ],
  templateUrl: './players.component.html'
})
export class PlayersComponent {

  firestore: Firestore = inject(Firestore);
  players: Observable<any[]>;

  editedPlayer: any; // Variable para almacenar los datos del jugador que se está editando
  isEditing = false; // Estado para controlar si se está editando un jugador

  constructor() {
    const aCollection = collection(this.firestore, 'jugadores');
    this.players = collectionData(aCollection);
  }

  isCardEnlarged = false; // Estado para controlar si la tarjeta está agrandada
  showModal = false; // Estado para controlar la visibilidad del modal
  @ViewChild('card') cardElement!: ElementRef;

  // Método para alternar el tamaño de la tarjeta
  toggleCardSize() {
    const card = this.cardElement.nativeElement;
    card.classList.toggle('enlarged');
    this.isCardEnlarged = !this.isCardEnlarged;
  }

  // Método para abrir el modal
  openModal() {
    this.showModal = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false;
  }

  editPlayer(player: any, event: MouseEvent) {
    event.stopPropagation();
    console.log('Editando jugador:', player); // Verificar si llega al evento
    this.editedPlayer = { ...player };
    this.isEditing = true;
    console.log('isEditing:', this.isEditing); // Verificar el cambio de estado
  }
  
  
  
  
  

  saveChanges() {
    const playerDocRef = doc(this.firestore, `jugadores/${this.editedPlayer.name}`);
    updateDoc(playerDocRef, this.editedPlayer).then(() => {
      this.isEditing = false;  // Cierra el formulario de edición
    }).catch((error) => {
      console.error('Error al actualizar el jugador: ', error);
    });
  }
  
  

  // Definir la función trackByFn para evitar el re-renderizado completo de la lista
  trackByFn(index: number, player: any): string {
    return player.name; // Usamos el nombre del jugador como identificador único
  }
}
