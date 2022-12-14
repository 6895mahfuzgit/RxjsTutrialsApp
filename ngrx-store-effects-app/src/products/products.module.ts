import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';

import { reducers,effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

// services
import * as fromServices from './services';
import { StoreEnum } from './store/enum/store-enum';
import { EffectsModule } from '@ngrx/effects';


// routes
export const ROUTES: Routes = [
  {
    path: '',
    canActivate:[fromGuards.PizzaGuard],
    component: fromContainers.ProductsComponent,
  },
  {
    path: 'new',
    canActivate:[fromGuards.PizzaGuard,fromGuards.ToppingsGuard],
    component: fromContainers.ProductItemComponent,
  },
  {
    path: ':pizzaId',
    canActivate:[fromGuards.PizzaExists,fromGuards.ToppingsGuard],
    component: fromContainers.ProductItemComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature(StoreEnum.PRODUCTS,reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services,...fromGuards.guards
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}
