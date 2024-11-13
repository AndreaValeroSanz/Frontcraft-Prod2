import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Firestore, setDoc, doc,collection,addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css'
})



export class NewPlayerComponent  {

  player = {
    name: '',
    ppg: null,
    rpg: null,
    apg: null,
    height: '',
    weight: '',
    age: null,
  };
  constructor(private firestore: Firestore) {}

  isFormOpen = false;

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  async addPlayer() {
    const playerData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      ppg: +(document.getElementById('ppg') as HTMLInputElement).value,
      rpg: +(document.getElementById('rpg') as HTMLInputElement).value,
      apg: +(document.getElementById('apg') as HTMLInputElement).value,
      height: (document.getElementById('height') as HTMLInputElement).value,
      weight: (document.getElementById('weight') as HTMLInputElement).value,
      age: +(document.getElementById('age') as HTMLInputElement).value,
    };

    try {
      const collectionRef = collection(this.firestore, 'jugadores');
      await addDoc(collectionRef, playerData);
      console.log('Jugador agregado con éxito');

      this.closeForm();
    } catch (error) {
      console.error('Error al agregar jugador:', error);
    }
  }
}

