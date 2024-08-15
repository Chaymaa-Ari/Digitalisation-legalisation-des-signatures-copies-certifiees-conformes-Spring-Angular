import { Component, OnInit } from '@angular/core';
import { Fonctionn } from '../fonctionn';
import { FonctionnService } from '../fonctionn.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fonct',
  templateUrl: './update-fonct.component.html',
  styleUrls: ['./update-fonct.component.css']
})
export class UpdateFonctComponent implements OnInit {

  id!: number;
  demande: Fonctionn= new Fonctionn();
  constructor(private citoyenservice : FonctionnService,
  private route: ActivatedRoute,
  private router: Router ){}
  ngOnInit(): void {

   this.id=this.route.snapshot.params['id'];
   this.citoyenservice.getDemandeById(this.id).subscribe(data => {
   this.demande=data;
   }, error => console.log(error));
  }
  onSubmit(){
    this.citoyenservice.updateCitoyen(this.id,this.demande).subscribe(data =>{ alert("modification reussie");
    this.goToCitoyenList();

    }, error => console.log(error));
  }
  goToCitoyenList(){
    this.router.navigate(['/listeFonc']);
}

}
