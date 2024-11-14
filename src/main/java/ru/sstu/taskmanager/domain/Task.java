package ru.sstu.taskmanager.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;


/**
 * Task.
 *
 * @author Aleksandr_Bezrukov
 */
@Entity
@Getter
@Setter
@ToString
@Accessors(chain = true)
@Table(name = "task")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;

    String description;

//    @ManyToMany
//    @JoinTable(
//            name = "user_task",
//            joinColumns = { @JoinColumn(name = "task_id")},
//            inverseJoinColumns = { @JoinColumn(name = "user_id")}
//    )
//    List<User> userList;

}
