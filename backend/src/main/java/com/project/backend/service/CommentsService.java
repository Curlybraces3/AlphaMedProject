package com.project.backend.service;

import com.project.backend.model.CommentsMaster;
import com.project.backend.repository.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CommentsService {
    @Autowired
    private CommentsRepository commentsRepository;

    public ResponseEntity saveCommentsForAmarihealth(CommentsMaster commentsMaster){
        if(commentsMaster != null){
           commentsRepository.save(commentsMaster);
            return ResponseEntity.ok("Record saved successfully");
        }
        return ResponseEntity.badRequest().body("Empty value sent!!!");
    }

}
