package com.github.terentich;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by aterentyev on 11.04.2017.
 */
@Configurable
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Configuration
    @Order(1)
    public static class AdminSecurityConfiguration extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .authorizeRequests()
                    .antMatchers("/actuator/health").permitAll()
//                    .antMatchers("/admin/**", "/actuator/**").authenticated()
                    .anyRequest().authenticated()
                    .and()
                    .csrf().ignoringAntMatchers("/admin/api/**")
                    .and()
                    .httpBasic()
            ;
        }

//        @Override
//        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//            auth.inMemoryAuthentication().and().ldapAuthentication();
//        }
    }

//
//    @Configuration
//    @Order(2)
//    public static class UserSecurityConfiguration extends WebSecurityConfigurerAdapter {
//        @Override
//        protected void configure(HttpSecurity http) throws Exception {
//            http
//                    .authorizeRequests()
//                    .antMatchers("/**").authenticated()
//            .and()
//            .httpBasic();
//        }
//    }
}
