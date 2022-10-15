import { createSelector } from '@ngrx/store';

import * as  fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

import * as fromToppings from './toppins.selectors';

import { Pizza } from '../../models/pizza.model';


//pizzas state 
export const getPizzaState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.pizzas);

export const getPizzasEntities = createSelector(
    getPizzaState,
    fromPizzas.getPizzasEntities);

export const getSelectedPizza = createSelector(getPizzasEntities,
    fromRoot.getRouterState, (entities, router): Pizza => {
        return router.state && entities[router.state.params.pizzaId]
    });

export const getPizzaVisualied=createSelector(
    getSelectedPizza,
    fromToppings.getToppingsEntities,
    fromToppings.getSelctedToppings,
    (pizza,toppingsEntity,selectedToppings)=>{
         const toppings=selectedToppings.map(id=>toppingsEntity[id]);
         return {...pizza,toppings};  
    }
);

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[+id])
    });

export const getPizzasLoading = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoading);

export const getPizzasLoaded = createSelector(
    getPizzaState,
    fromPizzas.getPizzasLoaded);