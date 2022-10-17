import { of } from 'rxjs/observable/of';
import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import { take, tap, filter, switchMap, catchError } from "rxjs/operators";

import * as fromStore from '../store';

@Injectable()
export class PizzaGuard implements CanActivate {

    constructor(private store: Store<fromStore.ProductsState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStore().pipe(switchMap(() => of(true)), catchError(() => of(false)));
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