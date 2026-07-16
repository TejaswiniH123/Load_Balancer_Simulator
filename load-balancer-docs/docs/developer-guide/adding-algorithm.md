---
title: Adding a Load Balancing Algorithm
sidebar_position: 3
description: Extend the simulator with a new routing strategy.
---

# Adding a Load Balancing Algorithm

The application is designed so that new routing algorithms can be added without changing the existing request processing pipeline.

---

# Step 1

Create a new implementation inside:

```text
strategy/
```

Example:

```text
RandomStrategy.java
```

The class should implement:

```java
LoadBalancingStrategy
```

---

# Step 2

Implement the server selection logic.

The implementation should only determine which `ServerNode` should receive the request.

Do not update:

- analytics
- server connections
- WebSocket messages

Those operations remain inside `LoadBalancerService`.

---

# Step 3

Add the new value to:

```text
AlgorithmType.java
```

Example:

```text
ROUND_ROBIN

WEIGHTED_ROUND_ROBIN

LEAST_CONNECTIONS

RANDOM
```

---

# Step 4

Update `LoadBalancerService` so that it selects the new strategy when the corresponding `AlgorithmType` is active.

No frontend changes are required unless you want users to select the new algorithm from the dashboard.

---

# Workflow

```mermaid
flowchart LR

Request

--> LoadBalancerService

--> NewStrategy

--> ServerNode

--> Continue Processing
```