import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginAdminService } from '../login-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private userS: LoginAdminService, private router: Router) {}

  ngOnInit(): void {}

  goToAdmin() {
    this.router.navigate(['/admin']);
  }

  loginForm(){
    console.log(this.user);
    this.userS.loginUser(this.user).subscribe(
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
