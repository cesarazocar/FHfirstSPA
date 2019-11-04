import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      
        this.heroe = this._heroesService.getHeroe(params['id']);

    });
  }


}
