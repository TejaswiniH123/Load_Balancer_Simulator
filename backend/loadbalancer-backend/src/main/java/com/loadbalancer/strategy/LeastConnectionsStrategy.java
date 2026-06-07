package com.loadbalancer.strategy;

import com.loadbalancer.model.ServerNode;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;

@Component
public class LeastConnectionsStrategy
        implements LoadBalancingStrategy {

    @Override
    public ServerNode selectServer(
            List<ServerNode> servers) {

        return servers.stream()
                .filter(ServerNode::isActive)
                .min(
                        Comparator.comparingInt(
                                ServerNode::getCurrentConnections
                        )
                )
                .orElse(null);
    }
}