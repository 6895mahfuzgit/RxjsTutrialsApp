import { Action } from '@ngrx/store';
import { type } from 'os';
import { Pizza } from 'src/products/models/pizza.model';

//load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: any) { }
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: Pizza[]) { }
}

//create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZAS_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZAS_SUCCESS = '[Products] Create Pizza Success';


export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;
    constructor(public payload: Pizza) { }
}

export class CreatePizzaFail implements Action {
    readonly type = CREATE_PIZZAS_FAIL;
    constructor(public payload: any) { }
}

export class CreatePizzaSuccess implements Action {
    readonly type = CREATE_PIZZAS_SUCCESS;
    constructor(public payload: Pizza) { }
}


//update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZAS_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZAS_SUCCESS = '[Products] Update Pizza Success';


export class UpdatePizza implements Action {
    readonly type = UPDATE_PIZZA;
    constructor(public payload: Pizza) { }
}

export class UpdatePizzaFail implements Action {
    readonly type = UPDATE_PIZZAS_FAIL;
    constructor(public payload: any) { }
}

export class UpdatePizzaSuccess implements Action {
    readonly type = UPDATE_PIZZAS_SUCCESS;
    constructor(public payload: Pizza) { }
}



//update pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZAS_FAIL = '[Products] Remove Pizza Fail';
export const REMOVE_PIZZAS_SUCCESS = '[Products] Remove Pizza Success';


export class RemovePizza implements Action {
    readonly type = REMOVE_PIZZA;
    constructor(public payload: Pizza) { }
}

export class RemovePizzaFail implements Action {
    readonly type = REMOVE_PIZZAS_FAIL;
    constructor(public payload: any) { }
}

export class RemovePizzaSuccess implements Action {
    readonly type = REMOVE_PIZZAS_SUCCESS;
    constructor(public payload: Pizza) { }
}


// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
    | CreatePizza | CreatePizzaFail | CreatePizzaSuccess
    | UpdatePizza | UpdatePizzaFail | UpdatePizzaSuccess
    | RemovePizza | RemovePizzaFail | RemovePizzaSuccess
    ;

