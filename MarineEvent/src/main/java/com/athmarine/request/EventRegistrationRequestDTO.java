package com.athmarine.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class EventRegistrationRequestDTO {

    @NotBlank(message = "Name should not blank")
    private String name;

    @NotBlank(message = "Company name should not blank")
    private String companyName;

    @NotBlank(message = "Enter a valid email address")
    @Email(message = "Enter a valid email address")
    private String email;

    @NotBlank(message = "Mobile number should not blank")
    private String mobileNumber;

    @NotBlank(message = "NameOnCap should not blank")
    private String nameOnCap;
    private boolean isPresentation;
    private boolean isCocktail;
    private String dinner;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }
    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getNameOnCap() {
        return nameOnCap;
    }
    public void setNameOnCap(String nameOnCap) {
        this.nameOnCap = nameOnCap;
    }

    public boolean getIsPresentation() {
        return isPresentation;
    }
    public void setIsPresentation(boolean presentation) {
        isPresentation = presentation;
    }

    public boolean getIsCocktail() {
        return isCocktail;
    }
    public void setIsCocktail(boolean cocktail) {
        isCocktail = cocktail;
    }

    public String getDinner() {
        return dinner;
    }
    public void setDinner(String dinner) {
        this.dinner = dinner;
    }
}
