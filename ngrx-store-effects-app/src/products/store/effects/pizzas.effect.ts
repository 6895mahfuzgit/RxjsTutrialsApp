import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { of } from "core-js/core/array";

import * as pizzaActions from '../actions/pizza.action';
import * as fromService from '../../services';


@Injectable()
export class PizzasEffects {

    constructor(private actions$: Actions,
        private fromServices: fromService.PizzasService,) { }

    @Effect()
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
        .pipe(switchMap(() => {
            return this.fromServices.getPizzas()
                .pipe(
                    map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                    catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
                )
        }));

}