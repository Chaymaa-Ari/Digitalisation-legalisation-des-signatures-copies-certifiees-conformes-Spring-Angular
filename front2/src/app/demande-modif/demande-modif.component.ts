import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeModiService } from '../demande-modi.service';
import { DemModif } from '../dem-modif';

@Component({
  selector: 'app-demande-modif',
  templateUrl: './demande-modif.component.html',
  styleUrls: ['./demande-modif.component.css']
})
export class DemandeModifComponent implements OnInit {



    userFile: any;
    imagURL: any;
    public imagePath: any;
    imgURL: any;
    public message: string | undefined ;
    demande: DemModif = new DemModif();
    crudApi: any;

  constructor(private demandemodif : DemandeModiService,
  private route: ActivatedRoute,
  private router: Router ){}


    ngOnInit(): void {


  }


  onSubmit(){

      this.addData();
  }
  addData() {
    const formData = new  FormData();
    formData.append('file', this.userFile);
    formData.append('demande', JSON.stringify(this.demande));
    this.demandemodif.createData(formData).subscribe(() => {
      this.router.navigate(['/client']);
    });
  }

  onSelectFile(event: any){
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  }}



