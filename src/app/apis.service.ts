import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://dummyapi.online/api/movies';
  private commentsApiUrl = 'https://jsonplaceholder.typicode.com/comments';
  private projectlist = 'https://dummyapi.online/api/social-profiles';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.commentsApiUrl);
  }
  getproject(): Observable<any[]> {
    return this.http.get<any[]>(this.projectlist);
  }
}
// Rajesh
