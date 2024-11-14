package ru.sstu.taskmanager.mapper;

import org.mapstruct.Mapper;
import ru.sstu.taskmanager.domain.User;
import ru.sstu.taskmanager.dto.UserDto;

/**
 * UserToUserDtoMapper.
 *
 * @author Aleksandr_Bezrukov
 */
@Mapper(componentModel = "spring")
public interface UserToUserDtoMapper {

    UserDto mapToDto(User user);

}
