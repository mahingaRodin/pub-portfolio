package com.portfolioBe.bePortfolio.controller;

import com.portfolioBe.bePortfolio.dto.ContactMessageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final JavaMailSender mailSender;
    private final String recipientEmail = "agressive.one04@gmail.com";

    @Autowired
    public ContactController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody ContactMessageDto contact) {
        try {
            // 1. Send confirmation to sender
            sendConfirmationEmail(contact);

            // 2. Forward message to your own email
            forwardToYourEmail(contact);

            return ResponseEntity.ok("Message sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body("Failed to send message: " + e.getMessage());
        }
    }

    private void sendConfirmationEmail(ContactMessageDto contact) {
        SimpleMailMessage confirmation = new SimpleMailMessage();
        confirmation.setTo(contact.getEmail());
        confirmation.setSubject("We've received your message!");
        confirmation.setText(
                "Dear " + contact.getName() + ",\n\n" +
                        "Thank you for contacting me. I've received your message regarding:\n" +
                        "\"" + contact.getSubject() + "\"\n\n" +
                        "I'll get back to you as soon as possible.\n\n" +
                        "Best regards,\n" +
                        "Rodin Mahinga"
        );
        mailSender.send(confirmation);
    }

    private void forwardToYourEmail(ContactMessageDto contact) {
        SimpleMailMessage notification = new SimpleMailMessage();
        notification.setTo(recipientEmail);
        notification.setSubject("New Portfolio Contact: " + contact.getSubject());
        notification.setText(
                "You have a new message from your portfolio:\n\n" +
                        "From: " + contact.getName() + "\n" +
                        "Email: " + contact.getEmail() + "\n\n" +
                        "Subject: " + contact.getSubject() + "\n\n" +
                        "Message:\n" + contact.getMessage()
        );
        mailSender.send(notification);
    }
}