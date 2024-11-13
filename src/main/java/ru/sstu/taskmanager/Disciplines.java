package ru.sstu.taskmanager;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * Disciplines.
 *
 * @author Aleksandr_Bezrukov
 */
@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Disciplines {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long teacherCount;

    String name;

    String description;

}
