import { Component, OnInit } from '@angular/core';
import  { HeroesService,HeroeI  } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:HeroeI[]=[];

  constructor(private _heroService:HeroesService, private router:Router) { 
    

  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
    
  }

  buscarHeroes(termino:string):HeroeI[]{
      let heroesArr:HeroeI[] = [];
      termino = termino.toLowerCase();
      for( let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
          if(nombre.indexOf(termino)>=0){
            heroesArr.push(heroe);  
          }
      }
    return heroesArr;
  }

}
