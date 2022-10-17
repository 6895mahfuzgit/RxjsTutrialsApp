import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromRoot from '../../../app/store';
import * as pizzaActions from '../actions/pizza.action';
import * as fromService from '../../services';
import { of } from "rxjs/observable/of";


@Injectable()
export class PizzasEffects {

    constructor(private actions$: Actions,
        private fromServices: fromService.PizzasService,) {

        this.fromServices.getPizzas().subscribe(data => {
            console.log(data, "drtjdtyjkfyuk")
        })
    }

    @Effect()
    loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
        .pipe(switchMap(() => {
            return this.fromServices.getPizzas()
                .pipe(
                    map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
                    catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
                )
        }));

    @Effect()
    createPizza$ = this.actions$.ofType(pizzaActions.CREATE_PIZZA)
        .pipe(
            map((action: pizzaActions.CreatePizza) => action.payload),
            switchMap(pizza => {
                return this.fromServices.createPizza(pizza)
                    .pipe(
                        map(pizza => new pizzaActions.CreatePizzaSuccess(pizza)),
                        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
                    )

            })
        )

    @Effect()
    createPizzaSuccess$ = this.actions$.ofType(pizzaActions.CREATE_PIZZAS_SUCCESS)
        .pipe(map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
            map(pizza => new fromRoot.Go({
                path: ['/products', pizza.id]
            }))
        );

    @Effect()
    updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA)
        .pipe(
            map((action: pizzaActions.UpdatePizza) => action.payload),
            switchMap(pizza => {
                return this.fromServices.updatePizza(pizza)
                    .pipe(
                        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
                        catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
                    )
            })
        )

        

    @Effect()
    removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA)
        .pipe(
            map((action: pizzaActions.RemovePizza) => action.payload),
            switchMap(pizza => {
                return this.fromServices.removePizza(pizza)
                    .pipe(
                        map(pizza => new pizzaActions.RemovePizzaSuccess(pizza)),
                        catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
                    )
            })
        );


        @Effect()
       removePizzaSuccess$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZAS_SUCCESS,pizzaActions.REMOVE_PIZZAS_SUCCESS)
            .pipe(
                map(() => new fromRoot.Go({
                    path: ['/products']
                }))
            ); 
}