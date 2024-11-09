// players.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  imports: [CommonModule, PlayersComponent, AppPlayersComponentPipes, NavBarComponent, HeroComponent]
})
export class PlayersModule { }