import { Component } from '@angular/core';
import { InscriptionService } from './inscription.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InscriptionService]
})
export class AppComponent {
  title: any;

 }
