package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="mail")

public class EmailRequest {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	 @JsonProperty("destinataire")
	private String destinataire;
	 @JsonProperty("subject")
    private String subject;
	 @JsonProperty("body")
    private String body;
    
	
	public String getDestinataire() {
		return destinataire;
	}
	public void setDestinataire(String destinataire) {
		this.destinataire = destinataire;
	}

	
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public EmailRequest(String destinataire, String subject, String body) {
		super();
		this.destinataire = destinataire;
		this.subject = subject;
		this.body = body;
	}
	public EmailRequest() {
		super();
	}
	

}
