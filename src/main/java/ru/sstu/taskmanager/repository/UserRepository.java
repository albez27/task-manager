package ru.sstu.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.sstu.taskmanager.domain.User;

/**
 * UserRepository.
 *
 * @author Aleksandr_Bezrukov
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
