package com.github.terentich.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ApiController {
    @GetMapping
    public String test() {
        return "Success";
    }

//    @RequestMapping(value = "/{[path:[^\\.]*}")
//    public String redirect() {
//        return "forward:/";
//    }
}
