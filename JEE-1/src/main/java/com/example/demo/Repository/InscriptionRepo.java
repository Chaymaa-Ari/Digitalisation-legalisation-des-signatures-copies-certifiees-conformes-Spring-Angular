package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DemandeInscription;

@Repository
public interface InscriptionRepo  extends JpaRepository < DemandeInscription ,Long> {

}
