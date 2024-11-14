package ru.sstu.taskmanager.service;

import ru.sstu.taskmanager.dto.UserDto;

/**
 * UserService.
 *
 * @author Aleksandr_Bezrukov
 */
public interface UserService {

    UserDto createUser(String userInfo);

}
