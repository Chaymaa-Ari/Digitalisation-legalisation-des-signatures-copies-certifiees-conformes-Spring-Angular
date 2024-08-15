import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id!: string;
  a!:File;
  citoyen: Client= new Client('','','','','','','','');
  constructor(private citoyenservice : ClientService,
  private route: ActivatedRoute,
  private router: Router ){}
  ngOnInit(): void {

   this.id=this.route.snapshot.params['id'];
   this.citoyenservice.getCitoyenById(this.id).subscribe(data => {
   this.citoyen=data;
   }, error => console.log(error));
  }
  onSubmit(){
    this.citoyenservice.updateCitoyen(this.id,this.citoyen).subscribe(data =>{ alert("modification reussie");
    this.goToCitoyenList();

    }, error => console.log(error));
  }
  goToCitoyenList(){
    this.router.navigate(['/listecli']);
}

}
