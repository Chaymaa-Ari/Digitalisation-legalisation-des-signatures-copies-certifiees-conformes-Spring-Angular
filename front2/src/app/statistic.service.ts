import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://votre-api-backend/statistiques'; // URL de votre API



  getDemandesParVille(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
}

}
