import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorTutorialsComponent } from './operator-tutorials.component';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { OperatorsBtnComponent } from './operators-btn/operators-btn.component';
import { FormsModule } from '@angular/forms';
import { FromEventService } from './from-event/from-event.service';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { RangeOperatorComponent } from './range-operator/range-operator.component';
import { RangeOperatorService } from './range-operator/range-operator.service';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';
import { TimerOperatorComponent } from './timer-operator/timer-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { ReduceOperatorComponent } from './reduce-operator/reduce-operator.component';

const routes: Routes = [

  {
    path: '', component: OperatorTutorialsComponent, title:'tutorials',
    children: [
      { path: 'fromEvent', component: FromEventComponent, title:'from event example' },
      { path: 'of', component: OfOperatorComponent, title:'of example' },
      { path: 'range', component: RangeOperatorComponent, title:'range example' },
      { path: 'from', component: FromOperatorComponent, title:'from example' },
      { path: 'interval', component: IntervalOperatorComponent, title:'interval example' },
      { path: 'timer', component: TimerOperatorComponent, title:'timer example' },
      { path: 'map', component: MapOperatorComponent, title:'map example' },
      { path: 'filter', component: FilterOperatorComponent, title:'filter example' },
      { path: 'reduce', component: ReduceOperatorComponent, title:'reduce example' },
      
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OperatorTutorialsComponent,
    OperatorsBtnComponent,
    FromEventComponent,
    OfOperatorComponent,
    RangeOperatorComponent,
    FromOperatorComponent,
    IntervalOperatorComponent,
    TimerOperatorComponent,
    MapOperatorComponent,
    FilterOperatorComponent,
    ReduceOperatorComponent,

  ],
  providers: [
    FromEventService,
    RangeOperatorService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class OperatorTutorialsModule { }
