package com.example.demo.Controller;

import java.util.List;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Client;
import com.example.demo.entities.Commune;
import com.example.demo.entities.DemandeInscription;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletContext;

import com.example.demo.Repository.ClientRepo;


@RestController
@RequestMapping("/api/Client")
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

	
	@Autowired
	private ClientRepo cr;
	
	@Autowired
	private ServletContext context;
 
		
	@Autowired
	private emailServ sv;
	
		@GetMapping("/ListeClient")
		public List <Client> getClient(){
	     return cr.findAll();
		}

		//fonction ajouter client
		@PostMapping("/ajoutClient")
		 public Client ajouter(@RequestBody Client d) {
	        return cr.save(d);     
	    }
		
		
		
		// get citoyen by id rest api;
		
		   @GetMapping("/ListeClient/{id}")
			 public ResponseEntity<Client> getCitoyenById(@PathVariable String id) {
				 Client cit =cr.findById(id).orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
				 return ResponseEntity.ok(cit);
				 
			 }
		   
		   @PutMapping("/ListeClient/{id}")
			public ResponseEntity<Client> updateCitoyen(@PathVariable String id, @RequestBody Client citoyen){
				Client ctyen =  cr.findById(id)
						.orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
			
				ctyen.setNom(citoyen.getNom());
				ctyen.setPrenom(citoyen.getPrenom());
				ctyen.setCin(citoyen.getCin());
				ctyen.setTel(citoyen.getTel());
				ctyen.setAdresse(citoyen.getAdresse());
				ctyen.setCodeconfidentiel(citoyen.getCodeconfidentiel());
				ctyen.setEmail(citoyen.getEmail());
				ctyen.setPassword(citoyen.getPassword());
				
				
				
				Client updateCitoyen = cr.save(ctyen);
				return ResponseEntity.ok(updateCitoyen);
				
			}
		   
		// delete citoyen rest api
			
			@DeleteMapping("/ListeClient/{id}")
			public ResponseEntity<Map<String, String>> deletecitoyen(@PathVariable String id)
			{

				 Client citoyen =  cr.findById(id)
							.orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
					 String confirmationMessage="citoyen supprimé avec succès (ID :"+id+ ")";
					 cr.delete(citoyen);
					 Map<String,String> response = new HashMap<>();
					 response.put("message", confirmationMessage);
					 return ResponseEntity.ok(response);
			
			
			}
		
			 @GetMapping("/nbr")
			    public long compteClient() {
			    	return cr.count();
			    }



}
