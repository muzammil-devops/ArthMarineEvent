package com.athmarine.repository;

import com.athmarine.entity.EventRegistrationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRegistrationDao extends JpaRepository<EventRegistrationEntity, Long> {

    @Query(value="SELECT COUNT(er) FROM EventRegistrationEntity er WHERE er.email=:email")
    long checkIfEmailExists(String email);
}
