import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";
import * as toppingsActions from '../actions/toopings.action';
import * as fromService from '../../services';


@Injectable()
export class ToppingsEffects {

    constructor(private actions$: Actions,
        private fromServices: fromService.ToppingsService,) { }

    @Effect()
    loadToppings$ = this.actions$.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
        switchMap(() => {
            return this.fromServices.getToppings().pipe(
                map(toopings => new toppingsActions.LoadToppingsSuccess(toopings),
                    catchError(error => of(new toppingsActions.LoaToppingsFail(error))))
            )
        })
    )

}