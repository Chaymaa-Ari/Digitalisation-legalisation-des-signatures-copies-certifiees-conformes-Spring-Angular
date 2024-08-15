import { Component, OnInit } from '@angular/core';
import { Commune } from '../commune';
import { CommuneService } from '../commune.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  comunes !:Commune[];
  constructor(private inscriptionService:CommuneService,private router:Router){



  }
  ngOnInit(): void {
    this.getListe();
  }
  private getListe()
    {
      this.inscriptionService.getCommuneListe().subscribe(data => {
        this.comunes = data;
      })
    }
    public getCommuneById(id:number){
      this.router.navigate(['updatecom',id]);
    }

    public updateCitoyen(id:number)
    {
      this.getListe();
    }
   deleteCommune(id:number){
    this.inscriptionService.deleteCommune(id).subscribe(data =>{
      console.log(data);
      this.getListe();
    })

   }

onSubmit() {

}

}
