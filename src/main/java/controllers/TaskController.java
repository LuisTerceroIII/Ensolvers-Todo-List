package controllers;


import controllers.customRequest.TaskRequest;
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
import services.TaskService;

import javax.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/to-do-list/v1/task")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("{taskId}")
    private ResponseEntity<TaskResponse> getTaskById(@PathVariable("taskId") Long taskId) {
        return taskService.getTaskById(taskId);
    }
    @PostMapping("/user/{userId}/folder/{folderId}")
    public ResponseEntity<TaskResponse> createTask(@PathVariable("userId") Long userId,
                                                   @PathVariable("folderId") Long folderId,
                                                   @RequestBody TaskRequest receivedTask) {
        return taskService.createTask(userId, folderId, receivedTask);
    }

    @PostMapping("/{taskId}")
    private ResponseEntity<TaskResponse> editTask(@PathVariable("taskId") Long taskId,
                                                  @RequestBody TaskRequest taskRequest) {
        System.out.println(taskRequest);
        return taskService.editTask(taskId, taskRequest);
    }
}
