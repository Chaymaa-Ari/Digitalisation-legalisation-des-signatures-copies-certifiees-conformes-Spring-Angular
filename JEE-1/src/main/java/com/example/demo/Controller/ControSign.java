package com.example.demo.Controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Repository.SignatureRepo;
import com.example.demo.entities.DemandeSignature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletContext;

@RestController
@RequestMapping("/api/sign")
@CrossOrigin(origins = "http://localhost:4200")
public class ControSign {
	
	@Autowired
	private SignatureRepo cp;
	@Autowired
	private ServletContext context;
	
	 @PostMapping("/signature")
	 public ResponseEntity<Map<String, String>> createImage(
	         @RequestParam("file") MultipartFile file,
	         @RequestParam("demande") String demande) throws JsonParseException, JsonMappingException, Exception
	 {
	     try {
	         DemandeSignature arti = new ObjectMapper().readValue(demande, DemandeSignature.class);
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
	         DemandeSignature art = cp.save(arti);
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

}
