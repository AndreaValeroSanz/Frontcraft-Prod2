import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})

export class ListComponentComponent {
  isFormOpen = false;

  openForm() { this.isFormOpen = true; }

  closeForm() { this.isFormOpen = false; }// Variable para controlar si el formulario está open

}

