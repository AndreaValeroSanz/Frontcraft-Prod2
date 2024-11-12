import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PlayersService } from "../../services/players.service";

@Component({
    selector: 'players-new-player',
    templateUrl: './new-player.component.html',
    styleUrls: ['./new-player.component.css']
})

export class NewPlayerComponent implements OnInit{
    formulario:FormGroup;

    constructor(
        private PlayersService: PlayersService
    ){
        this.formulario = new FormGroup({
            name: new FormControl(),
            ppg: new FormControl(),
            rpg: new FormControl(),
            apg: new FormControl(),
            age: new FormControl(),
            height: new FormControl(),
            weight: new FormControl(),
            image: new FormControl(),
        })
    }
    ngOnInit(): void {
        
    }
    async onSubmit(){
        console.log(this.formulario.value)
        const response = await this.PlayersService.addPlayer(this.formulario.value)
        console.log(response);
    }
}