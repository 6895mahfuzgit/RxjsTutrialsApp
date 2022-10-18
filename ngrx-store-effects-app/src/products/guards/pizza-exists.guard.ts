import { of } from 'rxjs/observable/of';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import * as fromStore from '../store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { filter, take, tap, switchMap, map } from 'rxjs/operators';
import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzaExists implements CanActivate {

    constructor(private store: Store<fromStore.ProductsState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkStore().pipe(switchMap(() => {  
            return this.hasPizza(+route.params.pizzaId);
        }));
    }

    hasPizza(id: number): Observable<boolean> {
        return this.store.select(fromStore.getPizzasEntities)
            .pipe(
                map((entities: { [key: number]: Pizza }) => !!entities[id]),
                take(1)
            );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getPizzasLoaded)
            .pipe(tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.LoadPizzas())
                }
            }),
                filter(loaded => loaded),
                take(1)
            );
    }

}