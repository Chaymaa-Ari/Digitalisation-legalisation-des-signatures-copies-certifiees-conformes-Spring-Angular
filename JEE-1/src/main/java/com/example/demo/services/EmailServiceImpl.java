package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.MailRepository;
import com.example.demo.entities.EmailRequest;

@Service
public class EmailServiceImpl {
	
	  @Autowired
	   private JavaMailSender javaMailSender;

	  @Autowired
	  MailRepository repository;
	   
		 
	  
	   public long sendEmail(EmailRequest mail) throws MailException{
		   System.out.println("send email ..");
		   
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(mail.getDestinataire());
	        message.setFrom("khadijaassag6@gmail.com");
	        message.setSubject(mail.getSubject());
	        message.setText(mail.getBody());
	        javaMailSender.send(message);
	        return repository.save(mail).getId();
	   }
		  
		 


}
