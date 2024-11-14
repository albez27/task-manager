package ru.sstu.taskmanager.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.sstu.taskmanager.domain.Task;

import java.util.List;

/**
 * TaskServiceImpl.
 *
 * @author Aleksandr_Bezrukov
 */
@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {

//    private final TaskRepository taskRepository;

    @Override
    public void createTask(List<Task> taskList) {
        if (taskList.isEmpty()) {
            return;
        }
//        taskRepository.saveAll(taskList);
    }
}
