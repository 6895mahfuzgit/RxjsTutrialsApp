import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { StoreEnum } from '../enum/store-enum';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(StoreEnum.PRODUCTS);



