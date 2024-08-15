import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from './environment/environment';
import { DemandeInsc } from './demande-insc';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private API_URL='http://localhost:8092/api/demande/ListeDemande';
 private URL2='http://localhost:8092/api/demande/ajout';
 private URL3='http://localhost:8092/api/demande/ajoutClient';
 private URL4='http://localhost:8092/api/demande/nombre';

  constructor(private httpClient:HttpClient) {

  }
  ajouterDeamnde(formData:FormData):Observable<Object> {
    return this.httpClient.post(`${this.URL2}`,formData)
     }

  getDemandeListe():Observable<DemandeInsc[]>
  {
    return this.httpClient.get<DemandeInsc[]>(`${this.API_URL}`);
  }

  getDemandeById(codeconfidentiel: number): Observable<DemandeInsc>{
    return this.httpClient.get<DemandeInsc>(`${this.API_URL}/${codeconfidentiel}`);
  }

getNombreInscription(): Observable<number>{
   return this.httpClient.get<number>(`${this.URL4}`);
}

deleteDemande(codeconfidentiel: number):Observable<Object>{
  const confirmation = window.confirm("Etes-vous sur de supprimer");
  if(confirmation){
    return this.httpClient.delete(`${this.API_URL}/${codeconfidentiel}`);
  }else

  return new Observable;
}

deleteDem(codeconfidentiel: number):Observable<Object>{
  return this.httpClient.delete(`${this.API_URL}/${codeconfidentiel}`);
}

}
