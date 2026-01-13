import { Component, computed, signal } from '@angular/core';
import { DragonBallCharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from '../../interfaces/character';
import { DragonBallCharacterAdd } from "../../components/dragonball/character-add/character-add";


@Component({
  // selector:'app-dragonball', no hace falta ya que va a ser una PÁGINA.
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [DragonBallCharacterList, DragonBallCharacterAdd]
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegetta', power: 8000 },
  ]);

  poweClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter(character: Character) {
    // if (!this.name() || !this.power() || this.power() <= 0) return;

    // const newCharacter: Character = {
    //   id: this.characters.length + 1,
    //   name: this.name(),
    //   power: this.power(),
    // };

    // //this.characters().push(newCharacter) //Tratar de NO usar estos métodos para actualizar listas, sino un Update
    // this.characters.update((list) => [...list, newCharacter]);
    // this.resetFields(); --> esto ya no es necesario, ahora lo manejamos desde otro componente
    this.characters.update(
      list => [...list, character]
    )
  }
  
  resetFields(){
    this.name.set(''),
    this.power.set(0)
  }
}
