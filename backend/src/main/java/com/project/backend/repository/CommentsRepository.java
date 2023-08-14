package com.project.backend.repository;

import com.project.backend.model.CommentsMaster;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepository  extends CrudRepository<CommentsMaster, Integer> {
}
