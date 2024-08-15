import { Component, OnInit } from '@angular/core';
import { DemModif } from '../dem-modif';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeModifService } from '../demande-modif.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-demand-modif',
  templateUrl: './liste-demand-modif.component.html',
  styleUrls: ['./liste-demand-modif.component.css']
})
export class ListeDemandModifComponent implements OnInit {
  demandes !:DemModif[];
  imageName:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private demandemodif : DemandeModifService,
 private route: ActivatedRoute,
 private router: Router,private httpClient: HttpClient
 ){}
   ngOnInit(): void {
     this.ListeDemande();
   }

   private ListeDemande(){
     this.demandemodif.getListedemande().subscribe(data => {
     this.demandes=data;
 })}
 deleteDemande(id: number){
  this.demandemodif.deleteDemande(id).subscribe(data =>{
      console.log(data);
      this.ListeDemande();
})}

getImage(name: string) {
  // Make a call to Spring Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8092/api/signature/get/' + name, { responseType: 'blob' })
    .subscribe(
      (res: Blob) => {
        // Handle the image data
        const reader = new FileReader();
        reader.onloadend = () => {
          this.retrievedImage = reader.result as string;

          // Open the image in a new window
          const newWindow = window.open();
          if (newWindow) {

            newWindow.document.write('<img [src]="' + this.retrievedImage + '" alt="Image">');

          } else {
            console.error('Failed to open new window. Make sure your browser allows popups.');
          }
        };

        reader.readAsDataURL(res);
      },
      error => {
        console.error('Error fetching image:', error);
        // Handle the error, e.g., show a message to the user
      }
    );
}



}
