package com.loadbalancer.controller;

import com.loadbalancer.model.AlgorithmType;
import com.loadbalancer.model.ServerNode;
import com.loadbalancer.service.LoadBalancerService;
import org.springframework.web.bind.annotation.*;
import com.loadbalancer.service.ServerService;

@RestController
@RequestMapping("/api/loadbalancer")
public class LoadBalancerController {

    private final LoadBalancerService loadBalancerService;
    private final ServerService serverService;

public LoadBalancerController(
        LoadBalancerService loadBalancerService,
        ServerService serverService
) {
    this.loadBalancerService =
            loadBalancerService;

    this.serverService =
            serverService;
}

    @GetMapping("/route")
    public ServerNode routeRequest() {

        return loadBalancerService.routeRequest();
    }

    @PostMapping("/algorithm/{algorithm}")
    public String changeAlgorithm(
            @PathVariable String algorithm
    ) {

        loadBalancerService.setAlgorithm(
                AlgorithmType.valueOf(
                        algorithm.toUpperCase()
                )
        );

        return "Algorithm changed to "
                + algorithm;
    }
    @PostMapping("/reset")
public String resetConnections() {

    serverService.resetConnections();

    return "Connections reset";
}

    @GetMapping("/algorithm")
    public AlgorithmType getAlgorithm() {

        return loadBalancerService
                .getCurrentAlgorithm();
    }
}