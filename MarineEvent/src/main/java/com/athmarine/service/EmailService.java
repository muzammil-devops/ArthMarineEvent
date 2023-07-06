package com.athmarine.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final Logger log = LoggerFactory.getLogger(EmailService.class);
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    public void sendEmail(String emailTo, String emailSubject, String emailMessage, byte[] excelFileAsBytes) throws MessagingException {
        log.info("Sending email to: {} from: {}", emailTo, senderEmail);
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(emailTo);
        helper.setSubject(emailSubject);
        helper.setText(emailMessage, true);
        if(excelFileAsBytes != null) {
            helper.addAttachment("MarineRegistrationReport.xlsx", new ByteArrayResource(excelFileAsBytes));
        }
        javaMailSender.send(message);
        log.info("Email sent successful");
    }

}
