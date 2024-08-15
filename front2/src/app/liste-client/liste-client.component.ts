import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent  implements OnInit {
  citoyens !:Client[];
constructor(private citoyensev:ClientService ,
   private router: Router ){

}
   ngOnInit(): void {
   this.Listecitoyen();
}
   private Listecitoyen(){
      this.citoyensev.getListecitoyen().subscribe(data => {
        this.citoyens = data;
})}

   updateCitoyen(id: string){
      this.router.navigate(['updateClient',id]);

   }

   deleteCitoyen(id: string){
     this.citoyensev.deleteCitoyen(id).subscribe(data =>{
         console.log(data);
         this.Listecitoyen();
})}




}
