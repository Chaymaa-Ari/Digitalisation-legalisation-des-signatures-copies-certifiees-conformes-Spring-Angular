package com.example.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="copie")
public class Copie {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String Nom;
	private String Prenom;
	private String NomPere;
	private String NomMere;
	private String DateNais;
	private String raison;
	
	public String getRaison() {
		return raison;
	}
	public void setRaison(String raison) {
		this.raison = raison;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return Nom;
	}
	public void setNom(String nom) {
		Nom = nom;
	}
	public String getPrenom() {
		return Prenom;
	}
	public void setPrenom(String prenom) {
		Prenom = prenom;
	}
	public String getNomPere() {
		return NomPere;
	}
	public void setNomPere(String nomPere) {
		NomPere = nomPere;
	}
	public String getNomMere() {
		return NomMere;
	}
	public void setNomMere(String nomMere) {
		NomMere = nomMere;
	}
	public String getDateNais() {
		return DateNais;
	}
	public void setDateNais(String dateNais) {
		DateNais = dateNais;
	}
	public Copie() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Copie(String nom, String prenom, String nomPere, String nomMere, String dateNais, String raison) {
		super();
		Nom = nom;
		Prenom = prenom;
		NomPere = nomPere;
		NomMere = nomMere;
		DateNais = dateNais;
		this.raison = raison;
	}
	
	
	
	

}
