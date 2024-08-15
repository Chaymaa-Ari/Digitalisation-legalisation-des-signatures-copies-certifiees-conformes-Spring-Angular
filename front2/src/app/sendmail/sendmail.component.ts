import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent  implements OnInit {

  submitted = false;
  emailForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public emailService: MailService,
    private fb: FormBuilder
  ) {
    this.emailForm = this.fb.group({
      destinataire: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const destinataire = params['destinataire'];
      if (destinataire) {
        this.emailForm.patchValue({
          destinataire: destinataire,
        });
      }
    });
  }

  sendEmail() {
    // Votre logique d'envoi d'e-mail ici
    console.log('destinataire:', this.emailForm.value.destinataire);
    console.log('Subject:', this.emailForm.value.subject);
    console.log('Body:', this.emailForm.value.body);
    const toAddress = this.emailForm.value.destinataire.trim();

    if (!toAddress) {
      console.error('Destiataire introuvable.');
      return;
    }

    const emailData = {
      destinataire: toAddress,
      subject: this.emailForm.value.subject,
      body: this.emailForm.value.body,
    };


    this.emailService.sendMail(emailData).subscribe(
      (response) => {
        alert("Email sent succssfully")
        console.log('Email sent successfully:', response);
      },
      (error) => {
        console.error('Error sending email:', error);
   }
);

  }

}
