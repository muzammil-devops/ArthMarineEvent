package com.athmarine.controller;

import com.athmarine.request.EventRegistrationRequestDTO;
import com.athmarine.response.EventRegistrationResponseDTO;
import com.athmarine.service.EventRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/event/")
@CrossOrigin(origins = "*")
public class EventController {

    @Autowired
    private EventRegistrationService eventRegistrationService;

    @PostMapping("register")
    public EventRegistrationResponseDTO registerUser(@Valid @RequestBody EventRegistrationRequestDTO eventRegistrationRequestDTO) {
        return eventRegistrationService.registerUser(eventRegistrationRequestDTO);
    }
}
