import {PizzaGuard} from './pizzas.guard';
import { PizzaExists } from './pizza-exists.guard';

export const guards=[PizzaGuard,PizzaExists]

export * from './pizzas.guard';
export * from './pizza-exists.guard';