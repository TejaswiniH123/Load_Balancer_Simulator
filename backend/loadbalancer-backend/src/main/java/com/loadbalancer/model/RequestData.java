package com.loadbalancer.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestData {

    private Long requestId;

    private String clientIp;

    private int priority;

    private long timestamp;
}