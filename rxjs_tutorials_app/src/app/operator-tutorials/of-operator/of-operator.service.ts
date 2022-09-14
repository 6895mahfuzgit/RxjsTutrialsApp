import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfOperatorService {

  private items$ = of({ 'name': 'shazol' }, 1, "mahfuz", 5.8, 'w', [1, 2, 3, 4], () => { console.log('arrow function'); });
  constructor() { }

  getItems(): Observable<any> {
    return this.items$;
  }

}
