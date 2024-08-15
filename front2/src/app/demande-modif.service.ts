import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemModif } from './dem-modif';

@Injectable({
  providedIn: 'root'
})
export class DemandeModifService {



  constructor(private httpClient:HttpClient) { }
  private URL2='http://localhost:8092/api/modification/modifs';

  private URL='http://localhost:8092/api/modification/AM';




  getListedemande():Observable<DemModif[]>{
    return this.httpClient.get<DemModif[]>(`${this.URL2}`);
}

  ajouterDemande(demande:DemModif):Observable<Object> {
    return this.httpClient.post(`${this.URL}`,demande)
}

deleteDemande(codeconfidentiel: number):Observable<Object>{
  const confirmation = window.confirm("Etes-vous sur de supprimer");
  if(confirmation){
    return this.httpClient.delete(`${this.URL2}/${codeconfidentiel}`);
  }else

  return new Observable;
}


}
