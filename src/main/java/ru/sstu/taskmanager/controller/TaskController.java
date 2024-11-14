package ru.sstu.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sstu.taskmanager.repository.TaskRepository;
import ru.sstu.taskmanager.domain.Task;

/**
 * TaskController.
 *
 * @author Aleksandr_Bezrukov
 */
@RestController
public class TaskController {

    @Autowired
    TaskRepository repository;

    @RequestMapping("/create-task")
    public ResponseEntity<Task> createTask() {
        System.out.println("some lines");
        Task n = new Task().setId(1L).setName("111");
        repository.save(n);
        return new ResponseEntity<Task>(HttpStatus.OK);
    }

}
