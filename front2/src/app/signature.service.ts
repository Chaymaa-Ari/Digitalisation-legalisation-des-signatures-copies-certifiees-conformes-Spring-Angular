import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signature } from './signature';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  private imageDataSubject = new BehaviorSubject<string |null>(null)
  private concatenatedImageDataSubject = new BehaviorSubject<ArrayBuffer|null>(null);

 choixmenu : string='A';
  public dataForm!: FormGroup;


  private API_URL='http://localhost:8092/api/signature/ListeSignature';
  private URL2='http://localhost:8092/api/signature/signature';
  private URL3='http://localhost:8092/api/signature/nombr';


   constructor(private httpClient:HttpClient) {

   }

   getDemandeById(codeconfidentiel: number): Observable<Signature>{
    return this.httpClient.get<Signature>(`${this.API_URL}/${codeconfidentiel}`);
  }
      createData(formData:FormData):Observable<Object> {
        return this.httpClient.post(`${this.URL2}`,formData)
        .pipe(
          catchError(error => {
            console.error('Error during data creation:', error);
            throw error;  // Rethrow the error for the component to handle
          })
        );
    }

      getDemandeListe():Observable<Signature[]>
  {
    return this.httpClient.get<Signature[]>(`${this.API_URL}`);
  }

  getNombreSignature(): Observable<number>{
    return this.httpClient.get<number>(`${this.URL3}`);
 }



 getImageData(): BehaviorSubject<string | null> {
  return this.imageDataSubject;
}
getConcatenatedImageData(): BehaviorSubject<ArrayBuffer | null> {
  return this.concatenatedImageDataSubject;
}

concatImages(imageData1: string | null, imageData2: string): void {
  if (imageData1) {
    // Simuler la concaténation (remplacer cela avec la logique réelle si nécessaire)
    const concatenatedImageData = `${imageData1}_concat_${imageData2}`;
    this.imageDataSubject.next(concatenatedImageData);
}
}
deleteDem(codeconfidentiel: number):Observable<Object>{
  return this.httpClient.delete(`${this.API_URL}/${codeconfidentiel}`);
}

}
