import { Component, OnInit } from '@angular/core';
import { DemandeInsc}  from '../demande-insc';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
 newClient :DemandeInsc=new DemandeInsc();

 userFile!:any ;
 message! :String;
 selctfile!:File;
  imgURL!:any;
  public imagePath!:any;

 constructor(private inscriptionService: InscriptionService) {}

 ngOnInit(): void {

 }


 onSubmit(): void {
   console.log(this.newClient);
   this.addData();
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

addData() {
  const formData = new  FormData();
  formData.append('file', this.userFile);
  formData.append('demande', JSON.stringify(this.newClient));
  this.inscriptionService.ajouterDeamnde(formData).subscribe(() => {
    //this.router.navigate(['']);
  });
}
}
