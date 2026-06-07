package com.loadbalancer.strategy;

import com.loadbalancer.model.ServerNode;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RoundRobinStrategy implements LoadBalancingStrategy {

    private final AtomicInteger currentIndex =
            new AtomicInteger(0);

    @Override
    public ServerNode selectServer(
            List<ServerNode> servers
    ) {

        if (servers.isEmpty()) {
            return null;
        }

        int index =
                currentIndex.getAndIncrement()
                        % servers.size();

        return servers.get(index);
    }
}