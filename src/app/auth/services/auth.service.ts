import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from '../models/iregister';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user: Iregister): Observable<any>{
    return this.httpClient.post('/apiX/users',user);
  }
}
