package com.loadbalancer.controller;

import com.loadbalancer.model.ServerNode;
import com.loadbalancer.service.ServerService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servers")
public class ServerController {

    private final ServerService serverService;

    public ServerController(
            ServerService serverService
    ) {
        this.serverService = serverService;
    }

    @GetMapping
    public List<ServerNode> getServers() {

        return serverService.getAllServers();
    }

    @PostMapping("/{id}/disable")
    public String disableServer(
            @PathVariable Long id
    ) {

        serverService.disableServer(id);

        return "Server Disabled";
    }

    @PostMapping("/{id}/enable")
    public String enableServer(
            @PathVariable Long id
    ) {

        serverService.enableServer(id);

        return "Server Enabled";
    }
    @PostMapping("/add")
public String addServer() {

    serverService.addServer();

    return "Server Added";
}

@PostMapping("/remove")
public String removeServer() {

    serverService.removeServer();

    return "Server Removed";
}
}