import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {


    private baseUrl='http://localhost:8092/api/login/loginuser';
    private url='http://localhost:8092/api/login/login/citoyen';

     constructor(private httpClient:HttpClient) {

      }
     loginUser(citoyen: User): Observable<any> {
       const url = `${this.baseUrl}`;
       return this.httpClient.post(url,citoyen);
   }

   loginCl(citoyen: Client): Observable<any> {
    const url = `${this.url}`;
    return this.httpClient.post(url,citoyen);
}

}
