package com.loadbalancer.service;

import com.loadbalancer.model.AlgorithmType;
import com.loadbalancer.model.ServerNode;
import com.loadbalancer.strategy.LeastConnectionsStrategy;
import com.loadbalancer.strategy.RoundRobinStrategy;
import org.springframework.stereotype.Service;
import com.loadbalancer.strategy.WeightedRoundRobinStrategy;
import com.loadbalancer.websocket.WebSocketPublisher;

@Service
public class LoadBalancerService {

    private final ServerService serverService;
    private final RoundRobinStrategy roundRobinStrategy;
    private final LeastConnectionsStrategy leastConnectionsStrategy;
    private final WeightedRoundRobinStrategy weightedRoundRobinStrategy;
    private final WebSocketPublisher webSocketPublisher;
    private long totalRequests = 0;
    private AlgorithmType currentAlgorithm =
            AlgorithmType.ROUND_ROBIN;

public LoadBalancerService(
        ServerService serverService,
        RoundRobinStrategy roundRobinStrategy,
        LeastConnectionsStrategy leastConnectionsStrategy,
        WeightedRoundRobinStrategy weightedRoundRobinStrategy,
        WebSocketPublisher webSocketPublisher
) {
    this.serverService = serverService;
    this.roundRobinStrategy = roundRobinStrategy;
    this.leastConnectionsStrategy = leastConnectionsStrategy;
    this.weightedRoundRobinStrategy = weightedRoundRobinStrategy;
    this.webSocketPublisher = webSocketPublisher;
}

    public void setAlgorithm(
            AlgorithmType algorithmType
    ) {
        this.currentAlgorithm = algorithmType;
    }

    public AlgorithmType getCurrentAlgorithm() {
        return currentAlgorithm;
    }

    public ServerNode routeRequest() {

        ServerNode selectedServer;

        switch (currentAlgorithm) {

            case LEAST_CONNECTIONS:
                selectedServer =
                        leastConnectionsStrategy.selectServer(
                                serverService.getAllServers()
                        );
                break;

            case WEIGHTED_ROUND_ROBIN:
                selectedServer =
                        weightedRoundRobinStrategy.selectServer(
                                serverService.getAllServers()
                        );
                break;

            default:
                selectedServer =
                        roundRobinStrategy.selectServer(
                                serverService.getAllServers()
                        );
        }

        if (selectedServer != null) {

            selectedServer.setCurrentConnections(
                    selectedServer.getCurrentConnections() + 1
            );
            webSocketPublisher.publishServerUpdates(serverService.getAllServers());
        }
        totalRequests++;

        return selectedServer;
    }
    public long getTotalRequests() {
    return totalRequests;
}
}