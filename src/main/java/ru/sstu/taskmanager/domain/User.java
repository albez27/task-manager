package ru.sstu.taskmanager.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    static final String SEQ = "user_id_seq";

    @Id
    @SequenceGenerator(name = SEQ, sequenceName = SEQ, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ)
    @JsonIgnore
    Long id;

//    @ManyToMany(mappedBy = "userList")
//    List<Task> tasks;

    String lastName;

    String firstName;

    String middleName;

//    @ManyToMany(mappedBy = "userList")
//    List<Disciplines> disciplines;

//    @OneToMany
//    @JoinColumn(name = "role_id")
//    List<Roles> roles;

}
