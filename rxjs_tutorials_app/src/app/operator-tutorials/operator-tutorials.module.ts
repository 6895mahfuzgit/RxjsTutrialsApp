import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorTutorialsComponent } from './operator-tutorials.component';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { OperatorsBtnComponent } from './operators-btn/operators-btn.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ScanOperatorComponent } from './scan-operator/scan-operator.component';
import { CountTimeComponent } from './count-time/count-time.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './take-operator/take-operator.component';
import { TakeWhileOperatorComponent } from './take-while-operator/take-while-operator.component';
import { DistinctUntilChangedDebounceTimeDistinctUntilChangedService } from './distinctUntilChanged-DebounceTime-DistinctUntilChanged/distinctUntilChanged-DebounceTime-DistinctUntilChanged.service';
import { DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent } from './distinctUntilChanged-DebounceTime-DistinctUntilChanged/distinctUntilChanged-DebounceTime-DistinctUntilChanged.component';
import { MergeMapOperatorComponent } from './merge-map-operator/merge-map-operator.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhastMapComponent } from './exhast-map/exhast-map.component';
import { StartWithEndWithOperatorsComponent } from './start-with-end-with-operators/start-with-end-with-operators.component';
import { ConcatOperatorComponent } from './concat-operator/concat-operator.component';
import { MergeOperatorComponent } from './merge-operator/merge-operator.component';
import { CombineLatestForkJoinComponent } from './combineLatest-forkJoin/combineLatest-forkJoin.component';
import { SubjectRxjsComponent } from './subject-rxjs/subject-rxjs.component';
import { LoaderComponent } from './subject-rxjs/loader/loader.component';
import { SubjectRxjsService } from './subject-rxjs/_services/subject-rxjs.service';
import { LoaderInterceptor } from './subject-rxjs/_interceptors/loader-interceptor';
import { ShareOperatorService } from './share-operator/share-operator.service';
import { ShareOperatorComponent } from './share-operator/share-operator.component';
import { ShareReplaySubjectComponent } from './share-replay-subject/share-replay-subject.component';
import { ShareReplaySubjectService } from './share-replay-subject/share-replay-subject.service';
import { SharedReplayOperatorComponent } from './shared-replay-operator/shared-replay-operator.component';
import { SharedRaplayOperatorService } from './shared-replay-operator/shared-raplay-operator.service';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { AsyncScheduleComponent } from './async-schedule/async-schedule.component';

const routes: Routes = [

  {
    path: '', component: OperatorTutorialsComponent, title: 'tutorials',
    children: [
      { path: 'fromEvent', component: FromEventComponent, title: 'from event example' },
      { path: 'of', component: OfOperatorComponent, title: 'of example' },
      { path: 'range', component: RangeOperatorComponent, title: 'range example' },
      { path: 'from', component: FromOperatorComponent, title: 'from example' },
      { path: 'interval', component: IntervalOperatorComponent, title: 'interval example' },
      { path: 'timer', component: TimerOperatorComponent, title: 'timer example' },
      { path: 'map', component: MapOperatorComponent, title: 'map example' },
      { path: 'filter', component: FilterOperatorComponent, title: 'filter example' },
      { path: 'reduce', component: ReduceOperatorComponent, title: 'reduce example' },
      { path: 'scan', component: ScanOperatorComponent, title: 'scan example' },
      { path: 'count-timer', component: CountTimeComponent, title: 'count-timer example' },
      { path: 'tap', component: TapOperatorComponent, title: 'tap example' },
      { path: 'take', component: TakeOperatorComponent, title: 'take example' },
      { path: 'take-while', component: TakeWhileOperatorComponent, title: 'take while example' },
      { path: 'distinct-debounce', component: DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent, title: '' },
      { path: 'merge-map', component: MergeMapOperatorComponent, title: '' },
      { path: 'switch-map', component: SwitchMapComponent, title: '' },
      { path: 'concat-map', component: ConcatMapComponent, title: '' },
      { path: 'exhast-map', component: ExhastMapComponent, title: '' },
      { path: 'start-end-with', component: StartWithEndWithOperatorsComponent, title: '' },
      { path: 'concat', component: ConcatOperatorComponent, title: '' },
      { path: 'merge', component: MergeOperatorComponent, title: '' },
      { path: 'combine-fork-comp', component: CombineLatestForkJoinComponent, title: '' },
      { path: 'subject', component: SubjectRxjsComponent, title: '' },
      { path: 'shared', component: ShareOperatorComponent, title: '' },
      { path: 'replay-subject', component: ShareReplaySubjectComponent, title: '' },
      { path: 'shared-replay', component: SharedReplayOperatorComponent, title: '' },
      { path: 'async-subject', component: AsyncSubjectComponent, title: '' },
      { path: 'async-schedule', component: AsyncScheduleComponent, title: '' },

    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
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
    ScanOperatorComponent,
    CountTimeComponent,
    TapOperatorComponent,
    TakeOperatorComponent,
    TakeWhileOperatorComponent,
    DistinctUntilChangedDebounceTimeDistinctUntilChangedComponent,
    MergeMapOperatorComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ExhastMapComponent,
    StartWithEndWithOperatorsComponent,
    ConcatOperatorComponent,
    MergeOperatorComponent,
    CombineLatestForkJoinComponent,
    SubjectRxjsComponent,
    LoaderComponent,
    ShareOperatorComponent,
    ShareReplaySubjectComponent,
    SharedReplayOperatorComponent,
    AsyncSubjectComponent,
    AsyncScheduleComponent,
  ],
  providers: [
    FromEventService,
    RangeOperatorService,
    DistinctUntilChangedDebounceTimeDistinctUntilChangedService,
    SubjectRxjsService,
    ShareOperatorService,
    ShareReplaySubjectService,
    SharedRaplayOperatorService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class OperatorTutorialsModule { }
