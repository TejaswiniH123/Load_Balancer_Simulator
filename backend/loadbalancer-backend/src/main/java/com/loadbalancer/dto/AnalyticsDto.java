package com.loadbalancer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnalyticsDto {

    private long totalRequests;

    private int activeServers;

    private int totalConnections;

    private String currentAlgorithm;
}