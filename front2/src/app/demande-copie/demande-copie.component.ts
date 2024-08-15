import { Component, OnInit } from '@angular/core';
import { Copie } from '../copie';
import { CopieService } from '../copie.service';

@Component({
  selector: 'app-demande-copie',
  templateUrl: './demande-copie.component.html',
  styleUrls: ['./demande-copie.component.css']
})
export class DemandeCopieComponent implements OnInit {

  newClient :Copie=new Copie();

 constructor(private inscriptionService: CopieService) {}

 ngOnInit(): void {

 }

 saveDemande(){
  this.inscriptionService.ajouterDeamnde(this.newClient).subscribe(data => {
    alert("Ajout par sucees");
    console.log(data);
  },
   err => console.log(err)
  );
 }
 onSubmit(): void {
   console.log(this.newClient);
   this.saveDemande();
 }

}
