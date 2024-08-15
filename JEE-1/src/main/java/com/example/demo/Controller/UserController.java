package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.ClientRepo;
import com.example.demo.Repository.UserRepo;
import com.example.demo.entities.Client;
import com.example.demo.entities.User;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins="http://localhost:4200")

public class UserController {
	
		 @Autowired
		 private ClientRepo CR;
		
		
		@Autowired
		private  UserRepo repoL; 
		@PostMapping("/loginuser")
		public ResponseEntity<?> loginuser(@RequestBody User userdata){
			User user = repoL.findByUsername(userdata.getUsername());
			 if (user != null && user.getPassword() != null && user.getPassword().equals(userdata.getPassword())) {
		            return ResponseEntity.ok(user);
		        }
			return ResponseEntity.internalServerError().body("Login failed");
			
		}
		 
		@PostMapping("/login/citoyen")
	    public ResponseEntity<?> loginCitoyen(@RequestBody Client citoyendata) {
	        Client cityn = CR.findByEmail(citoyendata.getEmail());
	        if (cityn != null && cityn.getPassword() != null && cityn.getPassword().equals(citoyendata.getPassword())) {
	        	
	        	
	            return ResponseEntity.ok(cityn);
	        }
	        return ResponseEntity.internalServerError().body("Login failed");
	    }
		

	

}
