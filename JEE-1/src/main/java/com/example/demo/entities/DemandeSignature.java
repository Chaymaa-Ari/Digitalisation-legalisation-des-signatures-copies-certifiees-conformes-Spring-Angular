package com.example.demo.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
@Table(name="DeemandeSignature")
public class DemandeSignature {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	@Lob
	@Column(name = "image_data",length=1000000000)
    private byte[] image_data;
	private String  name;
	private String raison;
	
	
	private String codeconfi;
	@Temporal(TemporalType.DATE)
	private Date date1;
	
	
	
	public Date getDate1() {
		return date1;
	}
	public void setDate1(Date date1) {
		this.date1 = date1;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getRaison() {
		return raison;
	}
	public void setRaison(String raison) {
		this.raison = raison;
	}

	public String getCodeconfi() {
		return codeconfi;
	}
	public void setCodeconfi(String codeconfi) {
		this.codeconfi = codeconfi;
	}
	
	public DemandeSignature(byte[] image_data, String name, String raison, String codeconfi) {
		super();
		this.image_data = image_data;
		this.name = name;
		this.raison = raison;
		this.codeconfi = codeconfi;
	}
	public DemandeSignature(byte[] image_data, String name) {
		super();
		this.image_data = image_data;
		this.name = name;
	}
	public byte[] getImage_data() {
		return image_data;
	}
	public void setImage_data(byte[] image_data) {
		this.image_data = image_data;
	}
	public DemandeSignature() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
