import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authentification } from '../models/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private logged =false;
  private baseUrl = "";

  constructor(private http : HttpClient) { }
  login(authentificationRequest : authentification): Observable<authentification>{
    return this.http.post<authentification>(`${this.baseUrl}/login`,{authentificationRequest}).pipe();
  }

  isLoggedIn(){
    if(this.login != null){
      this.logged = true;

    } 
    return true;

  }
  getToken(){
    
  }
}
