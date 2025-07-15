package com.portfolioBe.bePortfolio.dto;

import lombok.Data;

@Data
public class ContactMessageDto {
    private String name;      // Sender's name
    private String email;     // Sender's email
    private String subject;   // Email subject
    private String message;  // Email content

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}