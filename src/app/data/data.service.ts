import { Injectable } from '@angular/core';
import { IUserSettings } from './user-settings';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Weekly','Monthly', 'Annual', 'Lifetime']);
  }

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: IUserSettings) : Observable<any> {
    
      return this.http.post('https://eo2fxds2br1dihl.m.pipedream.net', userSettings);
    }
}
