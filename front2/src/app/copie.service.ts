import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Copie } from './copie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopieService {


  private API_URL='http://localhost:8092/api/copie/ListeDemande';
 private URL2='http://localhost:8092/api/copie/ListeDemand';
 private URL3='http://localhost:8092/api/copie/ajoutClient';
 private URL4='http://localhost:8092/api/copie/nombre';

  constructor(private httpClient:HttpClient) {

  }
  ajouterDeamnde(demande:Copie):Observable<Object> {
    return this.httpClient.post(`${this.URL2}`,demande)
     }

  getDemandeListe():Observable<Copie[]>
  {
    return this.httpClient.get<Copie[]>(`${this.API_URL}`);
  }

  getDemandeById(codeconfidentiel: number): Observable<Copie>{
    return this.httpClient.get<Copie>(`${this.API_URL}/${codeconfidentiel}`);
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


}
