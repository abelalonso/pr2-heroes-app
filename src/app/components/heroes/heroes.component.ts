import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../interfaces/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Heroe>

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
  }


}
