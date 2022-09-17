import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { SubjectRxjsService } from '../_services/subject-rxjs.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public service: SubjectRxjsService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.service.changeLoadingValue(true);
      return next.handle(req).pipe(
           delay(5000),
          finalize(() => this.service.changeLoadingValue(false))
      );
  }
}
