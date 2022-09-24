import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { stat } from 'fs';
import { StoreEnum } from '../enum/store-enum';
import * as fromPizzas from './pizzas.reducer'

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(StoreEnum.PRODUCTS);

//pizzas state 
export const getPizzaState = createSelector(
    getProductsState,
    (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(
    getPizzaState,
    fromPizzas.getPizzas);

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading);

export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded);