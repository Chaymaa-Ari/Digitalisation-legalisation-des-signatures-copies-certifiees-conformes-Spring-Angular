import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../inscription.service';
import {DemandeInsc} from '../demande-insc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-demande-insc',
  templateUrl: './list-demande-insc.component.html',
  styleUrls: ['./list-demande-insc.component.css']
})
export class ListDemandeInscComponent implements OnInit {

  demandes !:DemandeInsc[];
  constructor(private inscriptionService:InscriptionService,private router:Router){



  }
  ngOnInit(): void {
    this.getListe();
  }
  private getListe()
    {
      this.inscriptionService.getDemandeListe().subscribe(data => {
        this.demandes = data;
      })
    }
    public getClientById(id:number){
      this.router.navigate(['ajoutClient',id]);
    }

onSubmit() {

}
deleteDemande(id: number){
  this.inscriptionService.deleteDemande(id).subscribe(data =>{
      console.log(data);
      this.getListe();
})}

send(email: string) {
  console.log('Attempting to send email:', email);
  this.router.navigate(['/sendemail'], { queryParams: { destinataire:email}});
}
}
