package com.portfolioBe.bePortfolio.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/cv")
@CrossOrigin(origins = "*")
public class CvController {

    // Use environment variable or config property for flexibility
    private static final String CV_FILE_PATH = "C:/Users/user/OneDrive/Desktop/Y3_Lurking/Works/rodin-portfolio-fbe/bePortfolio/src/Uwonkunda_Mahinga_Rodin_CV.pdf";

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadCv() {
        try {
            // Convert to proper path format
            Path filePath = Paths.get(CV_FILE_PATH).toAbsolutePath().normalize();

            // Verify file exists and is readable
            if (!Files.exists(filePath) || !Files.isReadable(filePath)) {
                throw new RuntimeException("CV file not found at: " + filePath);
            }

            Resource resource = new UrlResource(filePath.toUri());

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"Mahinga_Rodin_CV.pdf\"")
                    .body(resource);
        } catch (Exception e) {
            throw new RuntimeException("Failed to download CV: " + e.getMessage(), e);
        }
    }
}