import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes: Hero[] = HEROS
  selectedHero?: Hero

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  ngOnInit(): void {
  }

}
