package com.athmarine.response;

public class EventRegistrationResponseDTO {

    private String message;

    public EventRegistrationResponseDTO() {
    }

    public EventRegistrationResponseDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
