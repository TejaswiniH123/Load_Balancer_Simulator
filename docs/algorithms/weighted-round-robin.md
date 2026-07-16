---
title: Weighted Round Robin
sidebar_position: 3
description: Weighted Round Robin routing strategy.
---

# Weighted Round Robin

`WeightedRoundRobinStrategy` distributes requests according to the configured weight of each server.

Servers with a higher weight receive a larger share of the incoming traffic.

---

# Workflow

```mermaid
flowchart LR

Request

--> WeightedRoundRobinStrategy

--> Evaluate Server Weights

--> Return ServerNode
```

---

# Implementation

The strategy evaluates the configured weights while selecting the destination server.

The selected server is returned to `LoadBalancerService`, which updates the server state and publishes the result through WebSockets.

---

# Characteristics

| Property | Value |
|----------|-------|
| Distribution | Weight-based |
| Selection | Server weight |
| State | Weight information |

---

# Suitable For

Weighted Round Robin is useful when backend servers have different processing capacities.

Servers with greater capacity can be assigned higher weights, allowing them to receive more requests.
