package com.athmarine.entity;


import javax.persistence.*;

@Entity
@Table(name = "registration")
public class EventRegistrationEntity {

    @Column(nullable = false, updatable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String companyName;

    @Column
    private String email;

    @Column
    private String mobileNumber;

    @Column
    private String nameOnCap;

    @Column
    private boolean isPresentation;

    @Column
    private boolean isCocktail;

    @Column
    private String dinner;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

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

    public boolean isPresentation() {
        return isPresentation;
    }
    public void setPresentation(boolean presentation) {
        isPresentation = presentation;
    }

    public boolean isCocktail() {
        return isCocktail;
    }
    public void setCocktail(boolean cocktail) {
        isCocktail = cocktail;
    }

    public String getDinner() {
        return dinner;
    }
    public void setDinner(String dinner) {
        this.dinner = dinner;
    }
}
