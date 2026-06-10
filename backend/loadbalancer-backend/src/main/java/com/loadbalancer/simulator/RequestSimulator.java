package com.loadbalancer.simulator;

import com.loadbalancer.model.RequestData;
import com.loadbalancer.service.LoadBalancerService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Queue;
import java.util.Random;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicLong;

@Component
public class RequestSimulator {

    private final Queue<RequestData> requestQueue =
            new ConcurrentLinkedQueue<>();

    private final AtomicLong requestCounter =
            new AtomicLong(1);

    private final Random random =
            new Random();

    private final LoadBalancerService loadBalancerService;

    private boolean simulationRunning = false;

    public RequestSimulator(
            LoadBalancerService loadBalancerService
    ) {
        this.loadBalancerService = loadBalancerService;
    }

    @Scheduled(fixedRate = 2000)
    public void generateRequest() {

        if (!simulationRunning) {
            return;
        }

        RequestData request =
                new RequestData(
                        requestCounter.getAndIncrement(),
                        "192.168.1." + random.nextInt(255),
                        random.nextInt(5) + 1,
                        System.currentTimeMillis()
                );

        requestQueue.add(request);

        loadBalancerService.routeRequest();

        if (requestQueue.size() > 100) {
            requestQueue.poll();
        }

        System.out.println(
                "Generated Request -> " + request
        );
    }

    public void startSimulation() {
        simulationRunning = true;
    }

    public void stopSimulation() {
        simulationRunning = false;
    }

    public boolean isSimulationRunning() {
        return simulationRunning;
    }

    public Queue<RequestData> getRequestQueue() {
        return requestQueue;
    }
}