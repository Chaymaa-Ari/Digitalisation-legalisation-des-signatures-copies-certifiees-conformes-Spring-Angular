package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.CopieRepo;
import com.example.demo.Repository.InscriptionRepo;
import com.example.demo.entities.Copie;
import com.example.demo.entities.DemandeInscription;

@RestController
@RequestMapping("/api/copie")
@CrossOrigin(origins = "http://localhost:4200")
public class CopieController {
	
	@Autowired
    private CopieRepo I;

    @PostMapping("/ListeDemand")
    public Copie ajouterDeamnde(@RequestBody Copie d) {
        return I.save(d);
    }
    
    
    @GetMapping("/ListeDemande")
    public List<Copie> getAllDemande()
    {
    	return I.findAll();
    }

}
