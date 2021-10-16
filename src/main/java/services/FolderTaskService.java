package services;

import controllers.customRequest.FolderRequest;
import controllers.customResponses.FolderData;
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
import java.util.ArrayList;
import java.util.List;

@Service
public class FolderTaskService {

    private final TaskRepository taskRepository;
    private final FolderTasksRepository folderTasksRepository;
    private final UserRepository userRepository;

    @Autowired
    public FolderTaskService(TaskRepository taskRepository, FolderTasksRepository folderTasksRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.folderTasksRepository = folderTasksRepository;
        this.userRepository = userRepository;
    }

    public ResponseEntity<List<TaskResponse>> getTasksOfAFolder(Long folderId, Long userId) {
        List<Task> allFolderTasks = taskRepository.getTaskByFolderId(folderId, userId);
        List<TaskResponse> folderTaskResponse = new ArrayList<>();
        if (allFolderTasks != null) {
            for (Task task : allFolderTasks)
                folderTaskResponse.add(new TaskResponse(task.getId(), task.getFolderId(), task.getUserId(), task.getDescription(), task.isCompleted()));
            return new ResponseEntity<>(folderTaskResponse, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(folderTaskResponse, HttpStatus.NOT_FOUND);
    }
    public ResponseEntity<FolderData> createFolder(Long userId, FolderRequest folder) {
        try {
            User user = userRepository.getById(userId);
            System.out.println(user);
            FolderTasks newFolder = new FolderTasks(user, folder.getName());
            folderTasksRepository.save(newFolder);
            return new ResponseEntity<>(new FolderData(newFolder.getId(), newFolder.getUserId(), newFolder.getName()),HttpStatus.ACCEPTED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(new FolderData(),HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> changeFolderName(Long folderId, FolderRequest folder) {
        if (folder.getName().length() > 0) {
            folderTasksRepository.changeName(folderId, folder.getName());
            FolderTasks folderTasks = folderTasksRepository.getById(folderId);
            return new ResponseEntity<>(folderTasks.getName(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Empty name!", HttpStatus.BAD_REQUEST);
    }
    public ResponseEntity<Boolean> deleteFolder(Long folderId) {
        try {
            FolderTasks folder = folderTasksRepository.getById(folderId);
            taskRepository.deleteTaskByFolderId(folderId);
            folderTasksRepository.deleteById(folderId);
            return new ResponseEntity<>(true,HttpStatus.ACCEPTED);
        } catch (EntityNotFoundException exception) {
            return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
        }
    }


}
