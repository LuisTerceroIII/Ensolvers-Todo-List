package services;

import controllers.customResponses.FolderData;
import model.entities.FolderTasks;
import model.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import repositories.FolderTasksRepository;
import repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final FolderTasksRepository folderTasksRepository;

    @Autowired
    public UserService(UserRepository userRepository, FolderTasksRepository folderTasksRepository) {
        this.userRepository = userRepository;
        this.folderTasksRepository = folderTasksRepository;
    }

    public ResponseEntity<List<FolderData>> foldersByUsername(String username) {
        User user = userRepository.getUserByUsername(username);
        List<FolderTasks> folders = null;
        List<FolderData> foldersData = new ArrayList<>();
        if(user != null) {
            folders = folderTasksRepository.getAllByUserId(user.getId());
            for (FolderTasks folder: folders) {
                FolderData data = new FolderData(folder.getId(),folder.getUserId(),folder.getName());
                foldersData.add(data);
            }
            return new ResponseEntity<>(foldersData, HttpStatus.ACCEPTED);
        } else  return new ResponseEntity<>(foldersData, HttpStatus.NO_CONTENT);
    }
}
