import { Pizza } from './../../models/pizza.model';
import * as fromPizzas from '../actions/pizza.action';

export interface PizzaState {
    entities: { [id: number]: Pizza };
    loaded: boolean;
    loading: boolean;
}

export const initialState: PizzaState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromPizzas.PizzasAction
): PizzaState {

    switch (action.type) {
        case fromPizzas.LOAD_PIZZAS: {

            return {
                ...state,
                loading: true,
            };
        }

        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            const pizzas = action.payload;
            const entities = pizzas.reduce((entities: { [id: number]: Pizza }, pizza: Pizza) => {

                return {
                    ...entities,
                    [pizza.id]: pizza
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

        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case fromPizzas.CREATE_PIZZA: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza
            };
            return {
                ...state,
                entities
            };
        }

        case fromPizzas.UPDATE_PIZZA:
        case fromPizzas.CREATE_PIZZAS_SUCCESS: {
            const pizza = action.payload;
            const entities = {
                ...state.entities,
                [pizza.id]: pizza
            };
            return {
                ...state,
                entities
            };
        }

        case fromPizzas.REMOVE_PIZZAS_SUCCESS: {
            const pizza = action.payload;
            const { [pizza.id]: removed, ...entities } = state.entities;
            return {
                ...state,   
                entities
            };
        }

    }
    return state;
}


export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;