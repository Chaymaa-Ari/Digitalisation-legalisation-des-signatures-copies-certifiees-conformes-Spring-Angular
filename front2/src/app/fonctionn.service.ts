import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fonctionn } from './fonctionn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FonctionnService {

  private API_URL='http://localhost:8092/api/demande/ListeFonction';
  private URL3='http://localhost:8092/api/demande/ajoutFonctio';
  private URL4='http://localhost:8092/api/demande/nombr';

   constructor(private httpClient:HttpClient) {

   }
   ajouterFonctionnaie(demande:Fonctionn):Observable<Object> {
     return this.httpClient.post(`${this.URL3}`,demande)
      }

   getFonctListe():Observable<Fonctionn[]>
   {
     return this.httpClient.get<Fonctionn[]>(`${this.API_URL}`);
   }

   getDemandeById(codeconfidentiel: number): Observable<Fonctionn>{
     return this.httpClient.get<Fonctionn>(`${this.API_URL}/${codeconfidentiel}`);
   }


 deleteDemande(codeconfidentiel: number):Observable<Object>{
   const confirmation = window.confirm("Etes-vous sur de supprimer");
   if(confirmation){
     return this.httpClient.delete(`${this.API_URL}/${codeconfidentiel}`);
   }else

   return new Observable;
 }

 updateCitoyen(id: number, citoyen:Fonctionn): Observable<Object>{
  return this.httpClient.put(`${this.API_URL}/${id}`,citoyen);
}

getNombreSignature(): Observable<number>{
  return this.httpClient.get<number>(`${this.URL4}`);
}
}
