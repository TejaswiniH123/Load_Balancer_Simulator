package com.loadbalancer.controller;

import com.loadbalancer.simulator.RequestSimulator;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/simulation")
public class SimulationController {

    private final RequestSimulator requestSimulator;

    public SimulationController(
            RequestSimulator requestSimulator
    ) {
        this.requestSimulator = requestSimulator;
    }

    @PostMapping("/start")
    public String startSimulation() {

        requestSimulator.startSimulation();

        return "Simulation Started";
    }

    @PostMapping("/stop")
    public String stopSimulation() {

        requestSimulator.stopSimulation();

        return "Simulation Stopped";
    }

    @GetMapping("/status")
    public boolean getStatus() {

        return requestSimulator.isSimulationRunning();
    }
}