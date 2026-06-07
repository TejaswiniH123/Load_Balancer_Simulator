package com.loadbalancer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ServerNode {

    private Long id;

    private String name;

    private int currentConnections;

    private int weight;

    private boolean active;

    private double cpuUsage;

    private double responseTime;
}