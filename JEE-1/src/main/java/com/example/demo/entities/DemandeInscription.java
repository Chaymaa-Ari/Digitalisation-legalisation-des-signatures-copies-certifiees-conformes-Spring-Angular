package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Data
@Table(name="DemandeInscription")
public class DemandeInscription {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String cin;
	private String nom;
	private String prenom;
	
	
	private String adresse;
	private String tel;
	private String email;
	private String password;
	
	@Lob
	@Column(name = "image_data",length=1000000000)
    private byte[] image_data;
	private String  name;
	
	
	public byte[] getImage_data() {
		return image_data;
	}




	public void setImage_data(byte[] image_data) {
		this.image_data = image_data;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public DemandeInscription() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


	public DemandeInscription( String cin, String nom, String prenom, String adresse,
			String tel, String email, String password) {
		super();
		
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.tel = tel;
		this.email = email;
		this.password = password;
	}


	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public DemandeInscription(byte[] image_data, String name) {
		super();
		this.image_data = image_data;
		this.name = name;
	}
	
	
	

	
}
