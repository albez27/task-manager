package ru.sstu.taskmanager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TaskRepository.
 *
 * @author Aleksandr_Bezrukov
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {


}
