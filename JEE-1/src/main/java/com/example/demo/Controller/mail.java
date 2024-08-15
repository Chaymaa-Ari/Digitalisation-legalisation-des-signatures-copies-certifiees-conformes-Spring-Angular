package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.MailRepository;
import com.example.demo.entities.EmailRequest;
import com.example.demo.services.EmailServiceImpl;

@RestController
@RequestMapping("/api/mail/")
@CrossOrigin(origins="http://localhost:4200")

public class mail {
	
	private EmailServiceImpl emailService;
	  @Autowired
	   private JavaMailSender javaMailSender;

	  @Autowired
	  MailRepository repository;
	  
	  @Autowired
	    public mail(EmailServiceImpl emailService) {
	        this.emailService = emailService;
	    }
	    @PostMapping("/sendemail")
	    public long sendEmail(@RequestBody EmailRequest mail) throws MailException {

	        System.out.println("send email ..");
	        System.out.println("Destinataire: " + mail.getDestinataire());
	        System.out.println("Subject: " + mail.getSubject());
	        System.out.println("Body: " + mail.getBody());

	        
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        // Check for nullability before setting properties
	        if (mail.getDestinataire() != null) {
	            message.setTo(mail.getDestinataire());
	        } else {
	            // Handle the case where destinataire is null
	        }
	        message.setFrom("khadijaassag6@gmail.com");

	        if (mail.getSubject() != null) {
	            message.setSubject(mail.getSubject());
	        } else {
	            // Handle the case where subject is null
	        }

	        if (mail.getBody() != null) {
	            message.setText(mail.getBody());
	        } else {
	            // Handle the case where body is null
	        }

	       
			javaMailSender.send(message);
	        
	        return repository.save(mail).getId();
	    }


}
