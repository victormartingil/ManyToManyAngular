import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyC0y4gHyhm2UmlUOsujUNxFucbO1YCP8jM';
  private signupEndpoint = `signUp?key=${this.apikey}`;
  private loginEndpoint = `signInWithPassword?key=${this.apikey}`;

  // Sign up with email and password - Firebase Auth
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Sign in with email and password - Firebase Auth
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  register(user: User){
    const authData = {
      // ...user, (esto abreviaría la construcción del objeto user)
      email: user.email,
      password: user.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}${this.signupEndpoint}`,
      authData
    );
  }

  login(user: User){
    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}${this.loginEndpoint}`,
      authData);
  }

  logout(){

  }

}
