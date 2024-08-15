package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.ClientRepo;

@Service
public class emailServ {
	
	@Autowired
	private JavaMailSender cf;
	
	public void sendAcceptanceEmail(String userEmail) {
		
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setTo(userEmail);
		msg.setSubject("InscriptionReussite");
		msg.setText("Votre Demande d'inscription a été acceptée . Bienvenue !");
		cf.send(msg);
		
	}
	

}
