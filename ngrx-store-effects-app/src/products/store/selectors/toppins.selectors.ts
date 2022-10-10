import { createSelector } from '@ngrx/store';

import * as  fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';


export const getToppingState = createSelector(fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.toppings);

export const getToppingsEntities = createSelector(
    getToppingState,
    fromToppings.getToppingsEntities);

export const getAllToppings = createSelector(
    getToppingsEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[+id])
    });

    
export const getToppingsLoading = createSelector(
    getToppingState,
    fromToppings.getToppingsLoading);

export const getToppingsLoaded = createSelector(
    getToppingState,
    fromToppings.getToppingsLoaded);