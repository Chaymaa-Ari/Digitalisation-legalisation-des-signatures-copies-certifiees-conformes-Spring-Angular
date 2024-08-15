import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'http://localhost:8092/api/mail/sendemail';

  public formData: FormGroup = this.fb.group({
    id: null,
    destinataire: ['', [Validators.required]],
    objet: ['', [Validators.required]],
    message: ['', [Validators.required]],
  }) ;
  constructor(private http: HttpClient,private fb:FormBuilder) { }


  sendMail(info: Object): Observable<Object>{
    alert("save email");
    return this.http.post(`${this.apiUrl}`,info)

  }
}
