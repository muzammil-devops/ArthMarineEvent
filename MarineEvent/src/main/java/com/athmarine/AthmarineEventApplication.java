package com.athmarine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class AthmarineEventApplication {

	public static void main(String[] args) {
		SpringApplication.run(AthmarineEventApplication.class, args);
	}

}
