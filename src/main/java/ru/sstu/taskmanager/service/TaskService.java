package ru.sstu.taskmanager.service;

import ru.sstu.taskmanager.domain.Task;

import java.util.List;

/**
 * Сервис для работы с задачами.
 *
 * @author Aleksandr_Bezrukov
 */
public interface TaskService {

    void createTask(List<Task> taskList);

}
