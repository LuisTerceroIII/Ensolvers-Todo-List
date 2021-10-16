package controllers;

import controllers.customResponses.FolderData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import services.UserService;

import java.util.List;

@RestController
@RequestMapping("/to-do-list/v1/user")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{username}")
    private ResponseEntity<List<FolderData>> getFoldersByUsername(@PathVariable("username") String username) {
        return userService.foldersByUsername(username);
    }
}
