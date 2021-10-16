package controllers;

import controllers.customRequest.FolderRequest;
import controllers.customResponses.FolderData;
import controllers.customResponses.TaskResponse;
import model.entities.FolderTasks;
import model.entities.Task;
import model.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repositories.FolderTasksRepository;
import repositories.TaskRepository;
import repositories.UserRepository;
import services.FolderTaskService;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/to-do-list/v1/folder")
@CrossOrigin(origins = "*")
public class FolderTasksController {

    private final FolderTaskService folderTaskService;

    @Autowired
    public FolderTasksController(FolderTaskService folderTaskService) {
        this.folderTaskService = folderTaskService;
    }

    //Recibe id de usuario y id de folder y retorna todas las tareas.
    @GetMapping("/{userId}/{folderId}")
    private ResponseEntity<List<TaskResponse>> folderTasksByFolderId(@PathVariable("folderId") Long folderId, @PathVariable("userId") Long userId) {
        return folderTaskService.getTasksOfAFolder(folderId, userId);
    }

    @PostMapping("/{userId}")
    private ResponseEntity<FolderData> createFolder(@PathVariable("userId") Long userId, @RequestBody FolderRequest folder) {
        return folderTaskService.createFolder(userId, folder);
    }

    @PatchMapping("{folderId}")
    private ResponseEntity<String> changeFolderName(@PathVariable("folderId") Long folderId, @RequestBody FolderRequest folder) {
        return folderTaskService.changeFolderName(folderId, folder);
    }

    @DeleteMapping("{folderId}")
    private ResponseEntity<Boolean> deleteFolder(@PathVariable("folderId") Long folderId) {
        return folderTaskService.deleteFolder(folderId);

    }

}
