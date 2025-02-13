package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.model.TimeStamp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface TimeStampRepository extends JpaRepository<TimeStamp, Long> {
    ArrayList<TimeStamp> findByClientId(Long clientId);
    //#TODO find by date range
}
