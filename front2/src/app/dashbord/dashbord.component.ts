import { Component, OnInit } from '@angular/core';
import { ChartDataset,ChartOptions, ChartType } from 'chart.js';
import { InscriptionService } from '../inscription.service';
import { SignatureService } from '../signature.service';
import { ClientService } from '../client.service';
import { FonctionnService } from '../fonctionn.service';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  nombreDemandesInscription!: number ;
  nombreDemandesSigna!: number ;
  nombreClient!: number ;
  nombreFonct!: number ;
  constructor(private demandeInscriptionService: InscriptionService, private signService:SignatureService,
    private clientSer :ClientService,private foncser:FonctionnService) { }

  ngOnInit(): void {
    this.demandeInscriptionService.getNombreInscription().subscribe(
      nombr => this.nombreDemandesInscription = nombr,
      error => console.error('Erreur lors de la récupération du nombre de demandes d\'inscription', error)
    );
    this.signService.getNombreSignature().subscribe(
      nombre => this.nombreDemandesSigna = nombre,
      err => console.error('Erreur lors de la récupération du nombre de demandes d\'inscription', err)
    );
    this.clientSer.getNombreSignature().subscribe(
      nomb => this.nombreClient = nomb,
      err => console.error('Erreur lors de la récupération du nombre de demandes d\'inscription', err)
    );
    this.foncser.getNombreSignature().subscribe(
      nom => this.nombreFonct = nom,
      err => console.error('Erreur lors de la récupération du nombre de demandes d\'inscription', err)
    );
  }
}






