package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.EmailRequest;

@Repository
public interface MailRepository extends JpaRepository<EmailRequest,Long>{

}
