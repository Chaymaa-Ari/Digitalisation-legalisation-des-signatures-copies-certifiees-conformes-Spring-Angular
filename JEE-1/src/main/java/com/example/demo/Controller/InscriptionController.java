package com.example.demo.Controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Commune;
import com.example.demo.entities.DemandeInscription;
import com.example.demo.entities.DemandeSignature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletContext;


import com.example.demo.Repository.InscriptionRepo;



@RestController
@RequestMapping("/api/demande")
@CrossOrigin(origins = "http://localhost:4200")
public class InscriptionController {
	
	 @Autowired
	    private InscriptionRepo I;
	 @Autowired
		private ServletContext context;
	 
	 
	 @PostMapping("/ajout")
	 public ResponseEntity<Map<String, String>> createImage(
	         @RequestParam("file") MultipartFile file,
	         @RequestParam("demande") String demande) throws JsonParseException, JsonMappingException, Exception
	 {
	     try {
	    	 DemandeInscription arti = new ObjectMapper().readValue(demande, DemandeInscription.class);
	         boolean isExit = new File(context.getRealPath("/Images/")).exists();
	         if (!isExit) {
	             new File(context.getRealPath("/Images/")).mkdir();
	         }

	         String filename = file.getOriginalFilename();
	         String newFileName = FilenameUtils.getBaseName(filename) + "." + FilenameUtils.getExtension(filename);
	         File serverFile = new File(context.getRealPath("/Images/" + File.separator + newFileName));

	         FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
	        
	         // Convertir les données binaires de l'image en byte[]
	         byte[] imageData = file.getBytes();
	         arti.setImage_data(imageData);
	         arti.setName(newFileName);
	         DemandeInscription art = I.save(arti);
	         if (art != null) {
	             String message = "Modification réussie";
	             Map<String, String> response = new HashMap<>();
	             response.put("message", message);
	             return ResponseEntity.status(HttpStatus.CREATED).body(response);
	         } else {
	             String message = "Échec de la modification";
	             Map<String, String> response = new HashMap<>();
	             response.put("message", message);
	             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	         }
	     } catch (IOException e) {
	         String message = "Erreur lors de la lecture de la demande ou de l'écriture du fichier";
	         Map<String, String> response = new HashMap<>();
	         response.put("error", message);
	         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
	     }
	 }

	   
	 

	    @PostMapping("/ListeDemand")
	    public DemandeInscription ajouterDeamnde(@RequestBody DemandeInscription d) {
	        return I.save(d);
	    }
	    
	    
	    @GetMapping("/ListeDemande")
	    public List<DemandeInscription> getAllDemande()
	    {
	    	return I.findAll();
	    }
	    
	    @GetMapping("/ListeDemande/{id}")
	    public ResponseEntity<Optional<DemandeInscription>> getDemandebyId(@PathVariable Long id)
	    {
	             Optional<DemandeInscription> i=I.findById(id);
	             return ResponseEntity.ok(i);
	    }
	    @DeleteMapping("/ListeDemande/{id}")
		 ResponseEntity<Map<String,String>> deteleCommune(@PathVariable Long id)
		 {
			 DemandeInscription c=I.findById(id).orElseThrow(()->new RuntimeException("citoyen not exist with id : "));
			 
			 String confir="Demande suprimee avec succes (id:"+id+")";
			 I.delete(c);
			 
			 Map<String,String> response=new HashMap<>();
			 
			 response.put("message", confir);
			 return ResponseEntity.ok(response);
			 
		 }
	    
	    
	    @GetMapping("/nombre")
	    public long compteDemandeInscription() {
	    	return I.count();
	    }
	    
	    /*

	        @Value("${spring.mail.host}")
	        private String host;

	        @Value("${spring.mail.port}")
	        private int port;

	        @Value("${spring.mail.username}")
	        private String username;

	        @Value("${spring.mail.password}")
	        private String password;

	        private final JavaMailSender javaMailSender;

	        public InscriptionController(JavaMailSender javaMailSender) {
	            this.javaMailSender = javaMailSender;
	        }

	        @PostMapping("/send-email")
	        public String sendEmail(@RequestBody EmailRequest emailRequest) {
	            try {
	                SimpleMailMessage message = new SimpleMailMessage();
	                message.setFrom(username);
	                message.setTo(emailRequest.getTo());
	                message.setSubject(emailRequest.getSubject());
	                message.setText(emailRequest.getBody());

	                javaMailSender.send(message);

	                return "Email sent successfully";
	            } catch (Exception e) {
	                e.printStackTrace();
	                return "Error sending email";
	            }
	        }
	    }

*/

}
