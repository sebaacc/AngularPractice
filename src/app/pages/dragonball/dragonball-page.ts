import { Component, signal } from "@angular/core";

interface Characters {
    id: number;
    name: string;
    power: number;
}

@Component ({
    // selector:'app-dragonball', no hace falta ya que va a ser una PÁGINA.
    templateUrl: './dragonball-page.html',
})
export class DragonballComponent {
    characters = signal <Characters[]> ([
        { id:1, name: 'Goku', power: 9001},
        { id:2, name: 'Vegetta', power: 8000},
        { id:3, name: 'Piccolo', power: 7000},
    ]);
}