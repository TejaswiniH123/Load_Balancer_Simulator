package com.loadbalancer.controller;

import com.loadbalancer.service.LoadBalancerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebSocketTestController {

    private final LoadBalancerService loadBalancerService;

    public WebSocketTestController(
            LoadBalancerService loadBalancerService
    ) {
        this.loadBalancerService =
                loadBalancerService;
    }

    @GetMapping("/api/test-route")
    public String testRoute() {

        loadBalancerService.routeRequest();

        return "Request Routed";
    }
}