import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../interfaces/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroeTarjeta',
  templateUrl: './heroeTarjeta.component.html',
  styleUrls: ['./heroeTarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: Number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.index ])
  }
}
