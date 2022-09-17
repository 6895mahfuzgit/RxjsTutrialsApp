import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedRaplayOperatorService {

  posts$ = this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(shareReplay(1));
  
  constructor(private httpClient: HttpClient) { }

}
