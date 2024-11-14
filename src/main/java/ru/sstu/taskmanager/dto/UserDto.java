package ru.sstu.taskmanager.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import ru.sstu.taskmanager.domain.Roles;

import java.util.List;

/**
 * UserDto.
 *
 * @author Aleksandr_Bezrukov
 */
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {


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
