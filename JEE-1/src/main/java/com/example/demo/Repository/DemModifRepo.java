package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DemModif;
import com.example.demo.entities.Image;

@Repository
public interface DemModifRepo extends JpaRepository<DemModif,Long>{

	Optional<Image> findByName(String imageName);
	
	

}
