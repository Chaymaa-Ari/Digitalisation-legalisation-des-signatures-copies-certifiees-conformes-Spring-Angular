import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { DemandeInsc } from '../demande-insc';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-form-ajout-client',
  templateUrl: './form-ajout-client.component.html',
  styleUrls: ['./form-ajout-client.component.css']
})
export class FormAjoutClientComponent implements OnInit {

  id!:number;
  demande :DemandeInsc =new DemandeInsc();
   newClient !:Client;
 constructor(private ajoutService: ClientService,private inscritpion:InscriptionService, private route: ActivatedRoute,private router:Router) {}

 delete(){
  this.inscritpion.deleteDem(this.demande.id);
 }
 ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.inscritpion.getDemandeById(this.id).subscribe( data => {
    this.demande = data;

    this.newClient=new Client(this.demande.nom,this.demande.prenom,this.demande.adresse,this.demande.tel,this.demande.name,this.demande.email,this.demande.password,this.demande.cin);



  }, error => console.log(error)

  );
 }

 saveDemande(){
  this.ajoutService.ajouterClient(this.newClient).subscribe(data => {
    console.log(data);

  },
   err => console.log(err)
  );
 }

 onSubmit(): void {
   console.log(this.newClient);
   this.saveDemande();

   this.router.navigate(['/listecli']);
 }
}
