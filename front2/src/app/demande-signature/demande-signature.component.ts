import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Signature } from '../signature';
import { SignatureService } from '../signature.service';
import { Router } from '@angular/router';
import { InscriptionService } from '../inscription.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-demande-signature',
  templateUrl: './demande-signature.component.html',
  styleUrls: ['./demande-signature.component.css']
})
export class DemandeSignatureComponent implements OnInit {
 userFile!:any ;
 message! :String;
  signatureRequest :Signature=new Signature();
  selctfile!:File;
  imgURL!:any;
  public imagePath!:any;


 constructor(private fb: FormBuilder, private router:Router,public inscriptionService: SignatureService) {

}

 ngOnInit(): void {

 }
 onSelectFile(event: any){
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.userFile = file;
   // this.f['profile'].setValue(file);

  var mimeType = event.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();

  this.imagePath = file;
  reader.readAsDataURL(file);
  reader.onload = (_event) => {
    this.imgURL = reader.result;
  }
}
}


 onSubmit(): void {
   console.log(this.signatureRequest);
   this.addData();
 }
 addData() {
  const formData = new  FormData();
  formData.append('file', this.userFile);
  formData.append('demande', JSON.stringify(this.signatureRequest));
  this.inscriptionService.createData(formData).subscribe(() => {
  this.router.navigate(['/clientDash']);
  });
}
}
