import { PizzaGuard } from './pizzas.guard';
import { PizzaExists } from './pizza-exists.guard';
import { ToppingsGuard } from './toppings.guard';

export const guards = [PizzaGuard, PizzaExists, ToppingsGuard]

export * from './pizzas.guard';
export * from './pizza-exists.guard';
export * from './toppings.guard';