import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorTutorialsComponent } from './operator-tutorials.component';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { OperatorsBtnComponent } from './operators-btn/operators-btn.component';
import { FormsModule } from '@angular/forms';
import { FromEventService } from './from-event/from-event.service';

const routes: Routes = [

  { path: '', component: OperatorTutorialsComponent,
   children:[
    { path: 'fromEvent', component: FromEventComponent},
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
    FromEventComponent
  ],
  providers:[
    FromEventService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class OperatorTutorialsModule { }
