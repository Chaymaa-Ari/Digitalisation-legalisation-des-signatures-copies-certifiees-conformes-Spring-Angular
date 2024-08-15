import { Component, OnInit } from '@angular/core';
import { Commune } from '../commune';
import { CommuneService } from '../commune.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcommune',
  templateUrl: './formcommune.component.html',
  styleUrls: ['./formcommune.component.css']
})
export class FormcommuneComponent implements OnInit {

  newCm:Commune=new Commune();

 constructor(private inscriptionService: CommuneService,private router :Router) {}

 ngOnInit(): void {

 }
 gotolist(){
  this.router.navigate(['/listComune']);
 }
 saveDemande(){
  this.inscriptionService.ajouterComune(this.newCm).subscribe(data => {
    console.log(data);
    this.gotolist();

  },
   err => console.log(err)
  );
 }
 onSubmit(): void {
   console.log(this.newCm);
   this.saveDemande();
 }
}
