package services;

import controllers.customRequest.TaskRequest;
import controllers.customResponses.TaskResponse;
import model.entities.FolderTasks;
import model.entities.Task;
import model.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import repositories.FolderTasksRepository;
import repositories.TaskRepository;
import repositories.UserRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final FolderTasksRepository folderTasksRepository;
    private final UserRepository userRepository;

    @Autowired

    public TaskService(TaskRepository taskRepository, FolderTasksRepository folderTasksRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.folderTasksRepository = folderTasksRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<TaskResponse> getTaskById(Long taskId) {
        try {
            Task task = taskRepository.getById(taskId);
            System.out.println(task);
            TaskResponse response = new TaskResponse(taskId,task.getFolderId(), task.getUserId(), task.getDescription(), task.isCompleted());
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(new TaskResponse(), HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<TaskResponse> createTask(Long userId, Long folderId, TaskRequest receivedTask) {
        try {
            User user = userRepository.getById(userId);
            FolderTasks folder = folderTasksRepository.getById(folderId);
            Task newTask = new Task(user,folder, receivedTask.getDescription(), receivedTask.isCompleted());
            taskRepository.save(newTask);

            TaskResponse taskResponse = new TaskResponse(newTask.getId(), folderId, userId, newTask.getDescription(), newTask.isCompleted());
            return new ResponseEntity<>(taskResponse, HttpStatus.ACCEPTED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(new TaskResponse(), HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<TaskResponse> editTask(Long taskId, TaskRequest taskRequest) {
        try {
            Task task = taskRepository.getById(taskId);
            System.out.println(task); //This make jum to catch block if task == null.
            if(taskRequest.isCompleted() != null) {
                taskRepository.updateCompleted(taskId, taskRequest.isCompleted());
            }
            if(taskRequest.getDescription() != null) {
                taskRepository.updateDescription(taskId, taskRequest.getDescription());
            }
            Task editedTask = taskRepository.getById(taskId);
            TaskResponse response = new TaskResponse(taskId,editedTask.getFolderId(), editedTask.getUserId(), editedTask.getDescription(), editedTask.isCompleted());
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(new TaskResponse(), HttpStatus.NOT_FOUND);
        }
    }
}
