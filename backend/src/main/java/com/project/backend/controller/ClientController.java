package com.project.backend.controller;

import com.project.backend.model.CommentsMaster;
import com.project.backend.service.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@CrossOrigin(origins = "*")
@RestController
public class ClientController {

    @Autowired
    private CommentsService commentsService;

    @PostMapping("/alphamed/savecomments")
    public String saveData(@RequestBody CommentsMaster commentsMaster){
        return Objects.requireNonNull(commentsService.saveCommentsForAmarihealth(commentsMaster).getBody()).toString();
    }

}
