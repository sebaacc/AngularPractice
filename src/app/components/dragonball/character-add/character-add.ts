import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class DragonBallCharacterAdd {
  name = signal('');
  power = signal(0);

  NewCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    //this.characters().push(newCharacter) //Tratar de NO usar estos métodos para actualizar listas, sino un Update
    //this.characters.update((list) => [...list, newCharacter]);
    //console.log({ newCharacter });

    this.NewCharacter.emit(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set(''), this.power.set(0);
  }
}
