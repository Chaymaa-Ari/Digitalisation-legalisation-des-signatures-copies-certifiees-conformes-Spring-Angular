import { Component, OnInit } from '@angular/core';
import { Signature } from '../signature';
import { ActivatedRoute, Router } from '@angular/router';
import { SignatureService } from '../signature.service';
import { Subscription } from 'rxjs';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  id!:number;
  dem :Signature =new Signature();

  imageData1: string | null | undefined;
  imageData2: string = 'assets/image/delet.png'; // Remplace avec le nom de l'image à concaténer
  imageDataSubscription: Subscription = new Subscription;

  html2pdf:any;

  imageData: any;

  concatenatedImageData!: any;
  imageDataSubject: any;
  constructor(private demandemodif:SignatureService,
    private route: ActivatedRoute,
    private router: Router
    ){
      this.imageData1 = null;
    this.imageDataSubscription = this.demandemodif.getImageData().subscribe(data => {
      this.imageData1=data;
    });}


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.demandemodif.getDemandeById(this.id).subscribe( data => {
    this.dem = data;
  }, error => console.log(error)

  );
}

concatImages(): void {
  const originalImage = new Image();
  originalImage.src = `assets/image/${this.dem.name}`;
  originalImage.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    const context = canvas.getContext('2d');
    if (context) {
      // Draw the original image
      context.drawImage(originalImage, 0,0, canvas.width, canvas.height);
      // Draw another image (replace 'assets/img/another-image.jpg' with your actual image path)
      const newImage = new Image();
      newImage.src = 'assets/image/Adminsin.png';
      newImage.onload = () => {
        context.drawImage(newImage, originalImage.width*0.67, originalImage.height*0.85);

        // Extract the concatenated image data
        const concatenatedImageData = canvas.toDataURL('image/jpeg');

        // Emit the concatenated image data
        //this.imageDataSubject.next(concatenatedImageData);

        this.concatenatedImageData = concatenatedImageData;
        // Navigate to the desired route

      };
    }
  };
}
downloadConcatenatedImage(): void {
  if (this.concatenatedImageData) {
    // Create an image element from the concatenated image data
    const concatenatedImage = new Image();
    concatenatedImage.src = this.concatenatedImageData;

    // Create a canvas with dimensions matching the image
    const canvas = document.createElement('canvas');
    canvas.width = concatenatedImage.width;
    canvas.height = concatenatedImage.height*2;

    const context = canvas.getContext('2d');
    if (context) {
      // Draw the concatenated image on the canvas
      context.drawImage(concatenatedImage, 0, 0);

      // Create a container for the canvas
      const container = document.createElement('div');
      container.appendChild(canvas);

      // Use html2pdf to generate the PDF and download it
      html2pdf(container, { filename: 'concatenated_image.pdf' });
    }
  }
}



}
