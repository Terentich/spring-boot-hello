package com.github.terentich;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@AutoConfigureMockMvc
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AuthenticationTests {
    @Autowired
    private MockMvc mvc;

    @Test
    public void unauthorizedRoot() throws Exception {
        mvc.perform(get("/"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void unauthorizedApi() throws Exception {
        mvc.perform(get("/api"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void unauthorizedAdmin() throws Exception {
        mvc.perform(get("/admin"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void unauthorizedActuator() throws Exception {
        mvc.perform(get("/actuator"))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser
    public void authorizedRoot() throws Exception {
        mvc.perform(get("/"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    public void authorizedApi() throws Exception {
        mvc.perform(get("/api"))
                .andExpect(status().isOk())
                .andExpect(content().string("Success"));
    }

    @Test
    @WithMockUser
    public void authorizedAdmin() throws Exception {
        mvc.perform(get("/admin/"))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    public void authorizedActuator() throws Exception {
        mvc.perform(get("/actuator/health"))
                .andExpect(status().isOk());
    }
}