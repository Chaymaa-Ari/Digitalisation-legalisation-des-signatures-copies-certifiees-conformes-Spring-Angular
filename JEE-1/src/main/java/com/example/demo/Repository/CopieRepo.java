package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Copie;

@Repository
public interface CopieRepo extends JpaRepository<Copie,Long>{

}
