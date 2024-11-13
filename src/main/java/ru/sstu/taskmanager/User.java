package ru.sstu.taskmanager;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

/**
 * Пользователи.
 *
 * @author Aleksandr_Bezrukov
 */
@Entity
@Getter
@Setter
@Accessors(chain = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

//    @ManyToMany(mappedBy = "userList")
//    List<Task> tasks;

    String lastName;

    String firstName;

    String middleName;

//    @ManyToMany(mappedBy = "userList")
//    List<Disciplines> disciplines;

    @OneToMany
    @JoinColumn(name = "role_id")
    List<Roles> roles;

}
