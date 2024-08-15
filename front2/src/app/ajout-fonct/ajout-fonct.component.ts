import { Component, OnInit } from '@angular/core';
import { Fonctionn } from '../fonctionn';
import { FonctionnService } from '../fonctionn.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-fonct',
  templateUrl: './ajout-fonct.component.html',
  styleUrls: ['./ajout-fonct.component.css']
})
export class AjoutFonctComponent implements OnInit {

  demande:Fonctionn=new Fonctionn();

 constructor(private inscriptionService: FonctionnService,private router :Router) {}

 ngOnInit(): void {

 }
 gotolist(){
  this.router.navigate(['/listeFonc']);
 }
 saveDemande(){
  this.inscriptionService.ajouterFonctionnaie(this.demande).subscribe(data => {
    console.log(data);
    this.gotolist();

  },
   err => console.log(err)
  );
 }
 onSubmit(): void {
   console.log(this.demande);
   this.saveDemande();
 }
}
