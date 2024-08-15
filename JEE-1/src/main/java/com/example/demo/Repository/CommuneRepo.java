package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Commune;

@Repository
public interface CommuneRepo extends JpaRepository<Commune,Long>{

}
