// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersModule } from '../PlayersComponent/players.module';
import { FullscreenModalComponent } from '../MediaComponent/fullscreen-modal/fullscreen-modal.component';
import { PlayersComponent } from "../PlayersComponent/players.component";
import { NavBarComponent } from '../PlayersComponent/nav-bar/nav-bar.component';
import { HeroComponent } from '../PlayersComponent/hero/hero.component';
import { AppPlayersComponentPipes } from '../PlayersComponent/Pipes/pipes.component';
import {NewPlayerComponent} from '../PlayersComponent/new-player/new-player.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppPlayersComponentPipes, HeroComponent, PlayersModule, RouterOutlet, FullscreenModalComponent, PlayersComponent, NavBarComponent, NewPlayerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontcraft-Prod2';


}
