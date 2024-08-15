import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeModiService {




  constructor(private httpClient:HttpClient) { }
  private URL='http://localhost:8092/api/modification/demandmodif';
  private URL2='http://localhost:8092/api/modification/AM';
  choixmenu : string='A';
  public dataForm!: FormGroup;



  getListedemande():Observable<Object>{
    return this.httpClient.get<Object[]>(`${this.URL2}`);
}

  createData(formData:Object ):Observable<Object> {
    return this.httpClient.post(`${this.URL2}`,formData)
    .pipe(
      catchError(error => {
        console.error('Error during data creation:', error);
        throw error;  // Rethrow the error for the component to handle
      })
    );
}

deleteDemande(codeconfidentiel: number):Observable<Object>{
  const confirmation = window.confirm("Etes-vous sur de supprimer");
  if(confirmation){
    return this.httpClient.delete(`${this.URL2}/${codeconfidentiel}`);
  }else

  return new Observable;
}
}

