import { Component } from '@angular/core';
import { Signature } from '../signature';
import { SignatureService } from '../signature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-signature',
  templateUrl: './liste-signature.component.html',
  styleUrls: ['./liste-signature.component.css']
})
export class ListeSignatureComponent {

  signatures !:Signature[];
  constructor(private inscriptionService:SignatureService,private router:Router){



  }
  ngOnInit(): void {
    this.getListe();
  }
  private getListe()
    {
      this.inscriptionService.getDemandeListe().subscribe(data => {
        this.signatures = data;
      })
    }

    public getById(id:number){
      this.router.navigate(['sign',id]);
    }
onSubmit() {

}
public delete(id:number) {
  this.inscriptionService.deleteDem(id).subscribe(data =>{
    console.log(data);
    this.getListe();
})
}

}
