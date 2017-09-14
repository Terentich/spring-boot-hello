package com.github.terentich.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class HomeController {
    @RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect() {
        System.out.println("REDIRRRREECT");
        return "forward:/";
    }
}
