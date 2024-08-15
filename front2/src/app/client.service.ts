import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


import { DemandeInsc } from './demande-insc';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {



  private API_URL='http://localhost:8092/api/Client/ListeClient';
 private URL2='http://localhost:8092/api/Client/ajoutClient';
 private URL3='http://localhost:8092/api/Client/nbr';
  constructor(private httpClient:HttpClient) {

  }
  ajouterClient(demande:Client):Observable<Object> {
    return this.httpClient.post(`${this.URL2}`,demande)
     }

     private URL='http://localhost:8092/api/Client/ListeClient';




      getListecitoyen():Observable<Client[]>{
        return this.httpClient.get<Client[]>(`${this.URL}`);
    }
      getCitoyenById(id: string): Observable<Client>{
        return this.httpClient.get<Client>(`${this.URL}/${id}`);
      }
      updateCitoyen(id: string, citoyen: Client): Observable<Object>{
        return this.httpClient.put(`${this.URL}/${id}`,citoyen);
      }
      deleteCitoyen(id: string):Observable<Object>{
        const confirmation = window.confirm("Etes-vous sur de supprimer");
        if(confirmation){
          return this.httpClient.delete(`${this.URL}/${id}`);
        }else

        return new Observable;
    }

    getNombreSignature(): Observable<number>{
      return this.httpClient.get<number>(`${this.URL3}`);
   }

}




