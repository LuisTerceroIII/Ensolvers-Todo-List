package com.ensolversexam.ensolvers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaAuditing
@SpringBootApplication
@EnableJpaRepositories({"repositories"})
@ComponentScan(basePackages = {"controllers","services"})
@EntityScan("model/entities")
public class EnsolversApplication {
    public static void main(String[] args) {
        SpringApplication.run(EnsolversApplication.class, args);
    }
}
