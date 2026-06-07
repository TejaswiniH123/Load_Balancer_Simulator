package com.loadbalancer.strategy;

import com.loadbalancer.model.ServerNode;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class WeightedRoundRobinStrategy
        implements LoadBalancingStrategy {

    private final AtomicInteger index =
            new AtomicInteger(0);

    @Override
    public ServerNode selectServer(
            List<ServerNode> servers
    ) {

        List<ServerNode> weightedServers =
                new ArrayList<>();

        for (ServerNode server : servers) {

            if (!server.isActive()) {
                continue;
            }

            for (int i = 0;
                 i < server.getWeight();
                 i++) {

                weightedServers.add(server);
            }
        }

        if (weightedServers.isEmpty()) {
            return null;
        }

        int current =
                index.getAndIncrement()
                        % weightedServers.size();

        return weightedServers.get(current);
    }
}