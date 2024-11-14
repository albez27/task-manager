package ru.sstu.taskmanager.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.sstu.taskmanager.domain.User;
import ru.sstu.taskmanager.dto.UserDto;
import ru.sstu.taskmanager.mapper.UserToUserDtoMapper;
import ru.sstu.taskmanager.repository.UserRepository;

/**
 * UserServiceImpl.
 *
 * @author Aleksandr_Bezrukov
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final ObjectMapper objectMapper;
    private final UserRepository userRepository;
    private final UserToUserDtoMapper mapper;

    @Override
    public UserDto createUser(String userInfo) {
        log.debug("createUser() - start: userInfo = {}", userInfo);

        if (userInfo.isEmpty()) {
            log.debug("createUser() - end: userInfo is null");
            return null;
        }
        User user = null;
        try {
            user = objectMapper.readValue(userInfo, User.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        log.debug("createUser() - end");
        return mapper.mapToDto(userRepository.save(user));
    }
}
