package ru.kata.spring.boot_security.web_data.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.web_data.models.User;
import ru.kata.spring.boot_security.web_data.services.UserService;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String user(Authentication authentication, Model model) {
        String username = authentication.getName();
        User user = (User) userService.loadUserByUsername(username);
        model.addAttribute("user", user);
        model.addAttribute("currentUser", username);
        return "user";
    }
}
