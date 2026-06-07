package com.loadbalancer.controller;

import com.loadbalancer.model.RequestData;
import com.loadbalancer.simulator.RequestSimulator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Queue;

@RestController
public class RequestController {

    private final RequestSimulator requestSimulator;

    public RequestController(
            RequestSimulator requestSimulator
    ) {
        this.requestSimulator = requestSimulator;
    }

    @GetMapping("/api/requests")
    public Queue<RequestData> getRequests() {

        return requestSimulator.getRequestQueue();
    }
}