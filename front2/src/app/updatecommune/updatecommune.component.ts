import { Component, OnInit } from '@angular/core';
import { Commune } from '../commune';
import { CommuneService } from '../commune.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecommune',
  templateUrl: './updatecommune.component.html',
  styleUrls: ['./updatecommune.component.css']
})
export class UpdatecommuneComponent implements OnInit {

  id!:number;
  com :Commune =new Commune();

 constructor(private updaService: CommuneService, private route: ActivatedRoute, private router: Router) {}

 ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.updaService.getCommuneById(this.id).subscribe( data => {
    this.com = data;
  }, error => console.log(error)

  );
 }


 onSubmit(): void {
  this.updaService.updateCitoyen(this.id,this.com).subscribe(data =>{ alert("modification reussie");
  this.goToCitoyenList();

  }, error => console.log(error));
}
goToCitoyenList(){
  this.router.navigate(['/listComune']);
}


 }


