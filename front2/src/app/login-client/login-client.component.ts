import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { LoginAdminService } from '../login-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {
  user: Client= new Client('','','','','','','','');

  constructor(private userS: LoginAdminService, private router: Router) {}

  ngOnInit(): void {}

  goToAdmin() {
    this.router.navigate(['/clientDash']);
  }

  loginForm(){
    console.log(this.user);
    this.userS.loginCl(this.user).subscribe(
    data => {
    alert("Login Successufly");
    this.goToAdmin();

  },
  error => {
    console.error('Citoyen login failed:', error);
    alert('Citoyen login failed');
    // Peut-être effectuer une action spécifique en cas d'échec du login du citoyen ici
  });
  }

}
