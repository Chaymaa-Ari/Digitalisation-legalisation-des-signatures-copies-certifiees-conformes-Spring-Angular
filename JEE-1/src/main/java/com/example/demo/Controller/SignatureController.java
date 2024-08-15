package com.example.demo.Controller;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.zip.Deflater;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Repository.SignatureRepo;
import com.example.demo.entities.Commune;
import com.example.demo.entities.DemModif;
import com.example.demo.entities.DemandeInscription;
import com.example.demo.entities.DemandeSignature;
import com.example.demo.entities.Fonctionnaire;
import com.example.demo.entities.Image;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletContext;

@RestController
@RequestMapping("/api/signature")
@CrossOrigin(origins = "http://localhost:4200")

public class SignatureController {

	
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

	 /*
	 
	 public static byte[] compressBytes(byte[] data) {
			Deflater deflater = new Deflater();
			deflater.setInput(data);
			deflater.finish();

			ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
			byte[] buffer = new byte[1024];
			while (!deflater.finished()) {
				int count = deflater.deflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			try {
				outputStream.close();
			} catch (IOException e) {
			}
			System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

			return outputStream.toByteArray();
		}
*/
	 @GetMapping("/ListeSignature")
	    public List<DemandeSignature> getAllCommune()
	    {
	    	return cp.findAll();
	    } 
	 
	 @GetMapping("/nombr")
	    public long compteDemandeSignature() {
	    	return cp.count();
	    }
	 
	 @GetMapping("/ListeSignature/{id}")
	    public ResponseEntity<Optional<DemandeSignature>> getDemandebyId(@PathVariable Long id)
	    {
	             Optional<DemandeSignature> i=cp.findById(id);
	             return ResponseEntity.ok(i);
	    }
	 
	 @DeleteMapping("/ListeSignature/{id}")
		public ResponseEntity<Map<String, String>> deleteSignature(@PathVariable Long id)
		{

			 DemandeSignature citoyen =  cp.findById(id)
						.orElseThrow(() -> new RuntimeException("citoyen not exist with id : "));
				 String confirmationMessage="citoyen supprimé avec succès (ID :"+id+ ")";
				 cp.delete(citoyen);
				 Map<String,String> response = new HashMap<>();
				 response.put("message", confirmationMessage);
				 return ResponseEntity.ok(response);
		
		
		}
	 
	/* @PostMapping("/ajtdemn" )
	 public ResponseEntity<Map<String, String>> createImage(@RequestParam("file") MultipartFile file,@RequestParam("demande") String demande ) throws JsonParseException,JsonMappingException,Exception
	 {
	 	  
	 	System.out.println("ok....................");
	 	DemandeSignature arti = new ObjectMapper().readValue(demande,DemandeSignature.class);
	 	System.out.println("Demande parameter: " + demande);
	 	boolean isExit = new File(context.getRealPath("/Images/")).exists();
	 	if(!isExit) {
	 		
	 		new File(context.getRealPath("/Images/")).mkdir();
	 		}
	 	
	 	String filename = file.getOriginalFilename();
	 	String newFileName = FilenameUtils.getBaseName(filename)+"."+FilenameUtils.getExtension(filename);
	 	File serverFile = new File(context.getRealPath("/Images/"+File.separator+newFileName));
	 	
	  try {
	 	 
	 	 System.out.println("Image");
	 	 FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
	  } catch(Exception e) {
	 	 e.printStackTrace();
	 	 }
	  byte[] ff=newFileName.getBytes();
	   arti.setImage_data(ff); 
	   DemandeSignature art = cp.save(arti);
	   String message = "modification faite";
	   Map<String,String> response=new HashMap<>();
	   response.put("message", message);
	   return ResponseEntity.ok(response);
	  
	 }*/
	 
	 
	 @GetMapping(path={"/get/{imageName}"})
		public DemandeSignature getImage(@PathVariable("imageName") String imageName) throws IOException {

			final Optional<DemandeSignature> retrievedImage = cp.findByName(imageName);
			DemandeSignature img = new DemandeSignature(retrievedImage.get().getImage_data(),retrievedImage.get().getName());
			return img;
		}

}
