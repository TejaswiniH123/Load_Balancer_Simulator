package com.loadbalancer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class LoadbalancerBackendApplication {

    public static void main(String[] args) {

        SpringApplication.run(
                LoadbalancerBackendApplication.class,
                args
        );
    }
}