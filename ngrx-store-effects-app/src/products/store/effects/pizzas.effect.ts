import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { map, switchMap,catchError } from "rxjs/operators";

import * as pizzaActions from '../actions/pizza.action';
import * as fromService from '../../services';
import { of } from "rxjs/observable/of";


@Injectable()
export class PizzasEffects {

    constructor(private actions$: Actions,
        private fromServices: fromService.PizzasService,) { 
            
            this.fromServices.getPizzas().subscribe(data=>{
                console.log(data,"drtjdtyjkfyuk")
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

}