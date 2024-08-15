import { Component } from '@angular/core';
import { Fonctionn } from '../fonctionn';
import { FonctionnService } from '../fonctionn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-fonctio',
  templateUrl: './liste-fonctio.component.html',
  styleUrls: ['./liste-fonctio.component.css']
})
export class ListeFonctioComponent {

  citoyens !:Fonctionn[];
  constructor(private citoyensev:FonctionnService,
     private router: Router ){

  }
     ngOnInit(): void {
     this.Listecitoyen();
  }
     private Listecitoyen(){
        this.citoyensev.getFonctListe().subscribe(data => {
          this.citoyens = data;
  })}

     updateCitoyen(id: number){
        this.router.navigate(['updateFonct',id]);

     }

     deleteCitoyen(id: number){
       this.citoyensev.deleteDemande(id).subscribe(data =>{
           console.log(data);
           this.Listecitoyen();
  })}



}
