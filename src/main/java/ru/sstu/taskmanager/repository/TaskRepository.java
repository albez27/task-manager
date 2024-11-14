package ru.sstu.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.sstu.taskmanager.domain.Task;

/**
 * TaskRepository.
 *
 * @author Aleksandr_Bezrukov
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {


}
