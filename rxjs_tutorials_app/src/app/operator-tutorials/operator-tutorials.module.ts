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

const routes: Routes = [

  {
    path: '', component: OperatorTutorialsComponent, title:'tutorials',
    children: [
      { path: 'fromEvent', component: FromEventComponent, title:'from event example' },
      { path: 'of', component: OfOperatorComponent, title:'of example' },
      { path: 'range', component: RangeOperatorComponent, title:'range example' },
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
    RangeOperatorComponent
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
