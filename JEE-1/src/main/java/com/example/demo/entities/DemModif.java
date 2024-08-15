package com.example.demo.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="demande_modif")
public class DemModif {
	
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 private Integer id_modif;
	 
	private String codeconfi;
	 
	 private String sujet;
	 @Lob
	 @Column(name = "image_data",length=1000000000)
	 private byte[] fileName;
	 private String  name;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSujet() {
		return sujet;
	}
	public void setSujet(String sujet) {
		this.sujet = sujet;
	}
	
	public Integer getId_modif() {
		return id_modif;
	}
	public void setId_modif(Integer id_modif) {
		this.id_modif = id_modif;
	}
	
	public byte[] getFileName() {
		return fileName;
	}
	public void setFileName(byte[] fileName) {
		this.fileName = fileName;
	}
	

	public DemModif(String codeconfi, String sujet, byte[] fileName, String name) {
		super();
		this.codeconfi = codeconfi;
		this.sujet = sujet;
		this.fileName = fileName;
		this.name = name;
	}
	public String getCodeconfi() {
		return codeconfi;
	}
	public void setCodeconfi(String codeconfi) {
		this.codeconfi = codeconfi;
	}
	
	
	public DemModif() {
		super();
	}
}