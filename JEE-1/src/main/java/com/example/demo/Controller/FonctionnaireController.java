package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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


import com.example.demo.Repository.FonctionnaireRepo;

import com.example.demo.entities.Fonctionnaire;

@RestController
@RequestMapping("/api/demande")
@CrossOrigin(origins = "http://localhost:4200")
public class FonctionnaireController {
	@Autowired
	private FonctionnaireRepo cr;
		
		@GetMapping("/ListeFonction")
		public List <Fonctionnaire> getFonctio(){
	     return cr.findAll();
		}

		//fonction ajouter client
		@PostMapping("/ajoutFonctio")
		public Fonctionnaire save(@RequestBody Fonctionnaire c){
	     return cr.save(c);
	}
		
		// get citoyen by id rest api;
		
		   @GetMapping("/ListeFonction/{id}")
			 public ResponseEntity<Fonctionnaire> getCitoyenById(@PathVariable Long id) {
			   Fonctionnaire cit =cr.findById(id).orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
				 return ResponseEntity.ok(cit);
				 
			 }
		   
		   @PutMapping("/ListeFonction/{id}")
			public ResponseEntity<Fonctionnaire> updateCitoyen(@PathVariable Long id, @RequestBody Fonctionnaire citoyen){
			   Fonctionnaire ctyen =  cr.findById(id)
						.orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
			
				ctyen.setNom(citoyen.getNom());
				ctyen.setPrenom(citoyen.getPrenom());
				ctyen.setCin(citoyen.getCin());
				ctyen.setTel(citoyen.getTel());
				ctyen.setAdresse(citoyen.getAdresse());
				
				ctyen.setEmail(citoyen.getEmail());
				ctyen.setPassword(citoyen.getPassword());
				ctyen.setFonction(citoyen.getFonction());
				
				
				
				Fonctionnaire updateCitoyen = cr.save(ctyen);
				return ResponseEntity.ok(updateCitoyen);
				
			}
		   
		// delete citoyen rest api
			
			@DeleteMapping("/ListeFonction/{id}")
			public ResponseEntity<Map<String, String>> deletecitoyen(@PathVariable Long id)
			{

				 Fonctionnaire citoyen =  cr.findById(id)
							.orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
					 String confirmationMessage="citoyen supprimé avec succès (ID :"+id+ ")";
					 cr.delete(citoyen);
					 Map<String,String> response = new HashMap<>();
					 response.put("message", confirmationMessage);
					 return ResponseEntity.ok(response);
			
			
			}
			 @GetMapping("/nombr")
			    public long compteFonctio() {
			    	return cr.count();
			    }

}
