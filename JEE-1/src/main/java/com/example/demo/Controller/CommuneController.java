package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Commune;
import com.example.demo.Repository.*;

@RestController
@RequestMapping("/api/commune")
@CrossOrigin(origins = "http://localhost:4200")

public class CommuneController {
	@Autowired
	private CommuneRepo cp;
	
	 @PostMapping("/ajtCommune")
	    public Commune ajouterCommune(@RequestBody Commune d) {
	        return cp.save(d);
	    }
	 
	 @GetMapping("/ListeCommune")
	    public List<Commune> getAllCommune()
	    {
	    	return cp.findAll();
	    }
	 
		
	 @GetMapping("/ListeCommune/{id}")
	 	 public ResponseEntity<Optional<Commune>> getCitoyenById(@PathVariable Long id) {
		 Optional<Commune> i=cp.findById(id);
         return ResponseEntity.ok(i);
	 }
	 
	 @DeleteMapping("/ListeCommune/{id}")
	 ResponseEntity<Map<String,String>> deteleCommune(@PathVariable Long id)
	 {
		 Commune c=cp.findById(id).orElseThrow(()->new RuntimeException("citoyen not exist with id : "));
		 
		 String confir="commune suprimee avec succes (id:"+id+")";
		 cp.delete(c);
		 
		 Map<String,String> response=new HashMap<>();
		 
		 response.put("message", confir);
		 return ResponseEntity.ok(response);
		 
	 }
	 
	 @PutMapping("/ListeCommune/{id}")
	 ResponseEntity<Commune> update(@PathVariable Long id,@RequestBody Commune com)
	 {
		 Commune ctyen =  cp.findById(id).orElseThrow(()->new RuntimeException("Commune not exist"));
		 ctyen.setNom(com.getNom());
		 ctyen.setAdresse(com.getAdresse());
		
		 Commune updateCitoyen = cp.save(ctyen);
			return ResponseEntity.ok(updateCitoyen);

	 }
	 
	 

}
