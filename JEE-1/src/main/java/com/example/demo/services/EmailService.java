package com.example.demo.services;

import com.example.demo.entities.EmailRequest;

public interface EmailService {
	
	void sendEmail(EmailRequest emailRequest);

	void sendEmail(String to, String subject, String body);

}
