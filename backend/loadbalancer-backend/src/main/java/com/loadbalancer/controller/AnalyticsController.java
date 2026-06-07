package com.loadbalancer.controller;

import com.loadbalancer.dto.AnalyticsDto;
import com.loadbalancer.model.ServerNode;
import com.loadbalancer.service.LoadBalancerService;
import com.loadbalancer.service.ServerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnalyticsController {

    private final LoadBalancerService loadBalancerService;
    private final ServerService serverService;

    public AnalyticsController(
            LoadBalancerService loadBalancerService,
            ServerService serverService
    ) {
        this.loadBalancerService = loadBalancerService;
        this.serverService = serverService;
    }

    @GetMapping("/api/analytics")
    public AnalyticsDto getAnalytics() {

        int totalConnections = 0;

        int activeServers = 0;

        for (ServerNode server :
                serverService.getAllServers()) {

            totalConnections +=
                    server.getCurrentConnections();

            if (server.isActive()) {
                activeServers++;
            }
        }

        return new AnalyticsDto(
                loadBalancerService.getTotalRequests(),
                activeServers,
                totalConnections,
                loadBalancerService
                        .getCurrentAlgorithm()
                        .name()
        );
    }
}