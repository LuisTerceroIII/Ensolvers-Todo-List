package com.ensolversexam.ensolvers;

import model.entities.FolderTasks;
import model.entities.Task;
import model.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.Transactional;
import repositories.FolderTasksRepository;
import repositories.TaskRepository;
import repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

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
