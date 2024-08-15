package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Fonctionnaire;

@Repository
public interface FonctionnaireRepo  extends JpaRepository<Fonctionnaire,Long>{

}
