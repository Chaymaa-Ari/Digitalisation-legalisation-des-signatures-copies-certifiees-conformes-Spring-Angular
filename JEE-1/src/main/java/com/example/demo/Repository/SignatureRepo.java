package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DemandeSignature;
import com.example.demo.entities.Image;

@Repository
public interface SignatureRepo extends JpaRepository<DemandeSignature,Long> {

	Optional<DemandeSignature> findByName(String imageName);

}
