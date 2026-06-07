package com.loadbalancer.strategy;

import com.loadbalancer.model.ServerNode;

import java.util.List;

public interface LoadBalancingStrategy {

    ServerNode selectServer(List<ServerNode> servers);
}