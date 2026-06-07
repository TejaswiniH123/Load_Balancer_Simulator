package com.loadbalancer.service;

import com.loadbalancer.model.ServerNode;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServerService {

    private final List<ServerNode> servers = new ArrayList<>();

    public ServerService() {

        servers.add(
                new ServerNode(
                        1L,
                        "Server-1",
                        0,
                        1,
                        true,
                        20,
                        120
                )
        );

        servers.add(
                new ServerNode(
                        2L,
                        "Server-2",
                        0,
                        2,
                        true,
                        25,
                        100
                )
        );

        servers.add(
                new ServerNode(
                        3L,
                        "Server-3",
                        0,
                        3,
                        true,
                        18,
                        90
                )
        );
    }
    public void resetConnections() {

          for (ServerNode server : servers) {

               server.setCurrentConnections(0);
       }
    }
    public List<ServerNode> getAllServers() {
        return servers;
    }

    public void disableServer(Long id) {

    for (ServerNode server : servers) {

        if (server.getId().equals(id)) {

            server.setActive(false);
            return;
        }
    }
}

public void enableServer(Long id) {

    for (ServerNode server : servers) {

        if (server.getId().equals(id)) {

            server.setActive(true);
            return;
        }
    }
}
public void addServer() {

    if (servers.size() >= 10) {
        return;
    }

    long nextId =
            servers.size() + 1;

    servers.add(
            new ServerNode(
                    nextId,
                    "Server-" + nextId,
                    0,
                    1,
                    true,
                    20.0,
                    100.0
            )
    );
}
public void removeServer() {

    if (servers.size() > 1) {

        servers.remove(
                servers.size() - 1
        );
    }
}
}
