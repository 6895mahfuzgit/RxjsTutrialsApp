import { type } from 'os';
import { Topping } from './../../models/topping.model';
import { Action } from '@ngrx/store';

 //toppings
export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';

export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings';

export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}

export class LoaToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any) { }
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]) { }
}

export class VisualiseToppings implements Action {
    readonly type = VISUALISE_TOPPINGS;
    constructor(public payload: number[]) { }
}

export type ToppingsAction = LoadToppings | LoaToppingsFail | LoadToppingsSuccess | VisualiseToppings;

