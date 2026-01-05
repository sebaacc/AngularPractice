import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  // changeDetection: ChangeDetectionStrategy.OnPush ---> no hace falta en la versión actual para que funcione el update dentro del interval... de la línea 14.
})
export class HeroPageComponent {
  name = signal('Iron Man');
  age = signal(45);

  heroDescription = computed(() => {
    const heroDescription = `${this.name()} - ${this.age()} años.`;
    return heroDescription;
  });

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()} años`;
  // }
  capitalizedName = computed(() => {
    const capitalizedName = `${this.name().toUpperCase()}`;
    return capitalizedName;
  }) 

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm() {
    this.name.set('Iron Man');
    this.age.set(45);
  }
  changeAge(age: number) {
    this.age.set(age);
  }
}
