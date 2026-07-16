---
title: Least Connections
sidebar_position: 4
description: Least Connections routing strategy.
---

# Least Connections

`LeastConnectionsStrategy` routes each request to the server with the lowest number of active connections.

Unlike Round Robin, server selection is based on the current runtime state instead of request order.

---

# Workflow

```mermaid
flowchart LR

Request

--> LeastConnectionsStrategy

--> Compare Active Connections

--> Return ServerNode
```

---

# Implementation

For every routing operation:

1. Read the active connection count of each available server.
2. Compare the values.
3. Select the server with the fewest active connections.
4. Return the selected `ServerNode`.

`LoadBalancerService` then updates the server state and publishes the latest information through `WebSocketPublisher`.

---

# Characteristics

| Property | Value |
|----------|-------|
| Distribution | Dynamic |
| Selection | Lowest active connections |
| State | Runtime connection count |

---

# Suitable For

Least Connections is appropriate when requests have different processing times.

The strategy attempts to distribute traffic according to the current workload of each server instead of following a fixed sequence.
