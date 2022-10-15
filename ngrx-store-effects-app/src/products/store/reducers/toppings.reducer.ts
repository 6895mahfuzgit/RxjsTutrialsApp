import * as fromToppings from '../actions/toopings.action';

import { Topping } from '../../models/topping.model';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loaded: boolean;
    loading: boolean;
    selctedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false,
    selctedToppings: []
};

export function reducer(state = initialState,
    action: fromToppings.ToppingsAction): ToppingsState {
    switch (action.type) {
        case fromToppings.VISUALISE_TOPPINGS: {
            const selctedToppings = action.payload;
            return {
                ...state,
                selctedToppings
            }
        }

        case fromToppings.LOAD_TOPPINGS: {

            return {
                ...state,
                loading: true,
            };
        }


        case fromToppings.LOAD_TOPPINGS_SUCCESS: {
            const toppings = action.payload;
            const entities = toppings.reduce((entities: { [id: number]: Topping }, topping: Topping) => {

                return {
                    ...entities,
                    [topping.id]: topping
                };
            }, {
                ...state.entities,
            });
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }

        case fromToppings.LOAD_TOPPINGS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getSelctedToppings = (state: ToppingsState) => state.selctedToppings;