package ru.sstu.taskmanager.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sstu.taskmanager.domain.User;
import ru.sstu.taskmanager.dto.UserDto;
import ru.sstu.taskmanager.service.UserService;

/**
 * UserController.
 *
 * @author Aleksandr_Bezrukov
 */
@RestController
@Tag(name = "UserController", description = "Контроллер для работы с пользователями")
@RequestMapping("/users")
@Slf4j
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Operation(summary = "Создание пользователя", description = "Позволяет зарегистрировать пользователя")
    @PostMapping("/create")
    public UserDto createUser(@Parameter(description = "Информация о пользователе в виде JSON строки")
                              @RequestBody(description = "Create user object", content = @Content(
                                      schema = @Schema(implementation = User.class)
                              )) String jsonUserInfo) {
        return userService.createUser(jsonUserInfo);
    }

}
