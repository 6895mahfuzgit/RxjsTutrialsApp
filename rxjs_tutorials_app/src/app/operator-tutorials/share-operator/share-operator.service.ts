import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareOperatorService {

  posts$ = this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts`).pipe(share());
  
  constructor(private httpClient: HttpClient) { }
}
