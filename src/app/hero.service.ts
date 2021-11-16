import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
// não bloqueante
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // tem que ser assim pq é Observable
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }


  constructor(private messageService: MessageService) { }
}
