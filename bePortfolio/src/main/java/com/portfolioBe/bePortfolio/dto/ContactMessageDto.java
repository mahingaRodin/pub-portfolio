package com.portfolioBe.bePortfolio.dto;

import lombok.Data;

@Data
public class ContactMessageDto {
    private String name;      // Sender's name
    private String email;     // Sender's email
    private String subject;   // Email subject
    private String message;   // Email content
}