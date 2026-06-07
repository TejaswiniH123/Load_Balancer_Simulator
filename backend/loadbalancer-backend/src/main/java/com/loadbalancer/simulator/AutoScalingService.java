package com.loadbalancer.simulator;

import com.loadbalancer.model.ServerNode;
import com.loadbalancer.service.ServerService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class AutoScalingService {

    private final ServerService serverService;

    public AutoScalingService(
            ServerService serverService
    ) {
        this.serverService = serverService;
    }

    @Scheduled(fixedRate = 5000)
    public void evaluateScaling() {

        int totalConnections = 0;

        for (ServerNode server :
                serverService.getAllServers()) {

            totalConnections +=
                    server.getCurrentConnections();
        }

        if (totalConnections > 20) {

            serverService.addServer();

            System.out.println(
                    "AUTO SCALE UP"
            );
        }

        if (totalConnections < 5 &&
                serverService.getAllServers()
                        .size() > 3) {

            serverService.removeServer();

            System.out.println(
                    "AUTO SCALE DOWN"
            );
        }
    }
}