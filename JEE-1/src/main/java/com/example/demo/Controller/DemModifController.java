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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.example.demo.Repository.DemModifRepo;
import com.example.demo.entities.DemModif;
import com.example.demo.entities.Image;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletContext;

@RestController
@RequestMapping("/api/modification")
@CrossOrigin(origins="http://localhost:4200")
public class DemModifController {
	
	 @Autowired
	 ServletContext context;
	 
	 @Autowired
	 private DemModifRepo repom;
	 
	 
	 
	// get all employee	
		@GetMapping("/modifs")
		public List<DemModif> getAllCitoyen(){
			return repom.findAll();
		}
		
		

	 
	 @DeleteMapping("/modifs/{id}")
	 ResponseEntity<Map<String,String>> deteleCommune(@PathVariable Long id){
		 
		 DemModif c=repom.findById(id).orElseThrow(()->new RuntimeException("citoyen not exist with id : "));
		 
		 String confir="commune suprimee avec succes (id:"+id+")";
		 repom.delete(c);
		 
		 Map<String,String> response=new HashMap<>();
		 
		 response.put("message", confir);
		 return ResponseEntity.ok(response);

	 }
	 
	 @PostMapping("/AM")
	 public ResponseEntity<Map<String, String>> createImage(
	         @RequestParam("file") MultipartFile file,
	         @RequestParam("demande") String demande) throws JsonParseException, JsonMappingException, Exception
	 {
	     try {
	         DemModif arti = new ObjectMapper().readValue(demande, DemModif.class);
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
	         arti.setFileName(imageData);
	         arti.setName(newFileName);
	         DemModif art = repom.save(arti);
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
	 
	 @GetMapping(path = { "/get/{imageName}" })
		public Image getImage(@PathVariable("imageName") String imageName) throws IOException {

			final Optional<Image> retrievedImage = repom.findByName(imageName);
			Image img = retrievedImage.get();
			
			return img;
		}


}