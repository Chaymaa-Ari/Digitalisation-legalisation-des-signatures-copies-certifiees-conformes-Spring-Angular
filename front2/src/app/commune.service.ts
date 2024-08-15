import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commune } from './commune';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {


  private API_URL='http://localhost:8092/api/commune/ListeCommune';
  private URL2='http://localhost:8092/api/commune/ajtCommune';

  constructor(private httpClient:HttpClient) { }

  ajouterComune(demande:Commune):Observable<Object> {
    return this.httpClient.post(`${this.URL2}`,demande)
     }

  getCommuneListe():Observable<Commune[]>
  {
    return this.httpClient.get<Commune[]>(`${this.API_URL}`);
  }

  getCommuneById(codeconfidentiel: number): Observable<Commune>{
    return this.httpClient.get<Commune>(`${this.API_URL}/${codeconfidentiel}`);
  }

  updateCitoyen(id: number, com: Commune): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/${id}`,com);
  }


  deleteCommune(id: number):Observable<Object>{
    const confirmation = window.confirm("Etes-vous sur de supprimer");
    if(confirmation){
      return this.httpClient.delete(`${this.API_URL}/${id}`);
    }else

    return new Observable;
}


}
