package com.athmarine.service;

import com.athmarine.entity.EventRegistrationEntity;
import com.athmarine.exception.BadRequestException;
import com.athmarine.repository.EventRegistrationDao;
import com.athmarine.request.EventRegistrationRequestDTO;
import com.athmarine.response.EventRegistrationResponseDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;

@Service
public class EventRegistrationService {

    private final Logger log = LoggerFactory.getLogger(EventRegistrationService.class);

    @Autowired
    private EventRegistrationDao eventRegistrationDao;

    @Autowired
    private EmailService emailService;

    public EventRegistrationResponseDTO registerUser(EventRegistrationRequestDTO eventRegistrationRequestDTO) {
        log.info("Registering user: {}", eventRegistrationRequestDTO.getEmail());
        if(eventRegistrationDao.checkIfEmailExists(eventRegistrationRequestDTO.getEmail()) > 0) {
            throw new BadRequestException("User already registered");
        }
        EventRegistrationEntity eventRegistrationEntity = mapEventRegistrationRequestToEntity(eventRegistrationRequestDTO);
        eventRegistrationDao.save(eventRegistrationEntity);
/*
        new Thread(() -> {
            try {
                StringBuilder builder = new StringBuilder("Hi, ")
                        .append(eventRegistrationRequestDTO.getName())
                        .append("<br/><br/>")
                        .append("Thank you for the registration, as a goodwill gesture we would like to present you with a Personalised Captain's cap with your name embroidered on cap.")
                        .append("<br/><br/>").append("Thanks");
                emailService.sendEmail(eventRegistrationRequestDTO.getEmail(), "Marine Registration", builder.toString(), null);
            } catch (MessagingException e) {
                log.error("Failed to send mail: {}", eventRegistrationRequestDTO.getEmail());
            }
        }).start();
*/
        log.info("User registered with id: {}", eventRegistrationEntity.getId());
        return new EventRegistrationResponseDTO("Registration Successful");
    }

    private EventRegistrationEntity mapEventRegistrationRequestToEntity(EventRegistrationRequestDTO eventRegistrationRequestDTO) {
        EventRegistrationEntity eventRegistrationEntity = new EventRegistrationEntity();
        eventRegistrationEntity.setName(eventRegistrationRequestDTO.getName());
        eventRegistrationEntity.setCompanyName(eventRegistrationRequestDTO.getCompanyName());
        eventRegistrationEntity.setEmail(eventRegistrationRequestDTO.getEmail());
        eventRegistrationEntity.setMobileNumber(eventRegistrationRequestDTO.getMobileNumber());
        eventRegistrationEntity.setNameOnCap(eventRegistrationRequestDTO.getNameOnCap());
        eventRegistrationEntity.setCocktail(eventRegistrationRequestDTO.getIsCocktail());
        eventRegistrationEntity.setPresentation(eventRegistrationRequestDTO.getIsPresentation());
        if(eventRegistrationRequestDTO.getDinner() == null || eventRegistrationRequestDTO.getDinner() == "") {
            eventRegistrationRequestDTO.setDinner("Not Attending");
        }
        eventRegistrationEntity.setDinner(eventRegistrationRequestDTO.getDinner());
        return eventRegistrationEntity;
    }
}
