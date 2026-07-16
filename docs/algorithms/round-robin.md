---
title: Round Robin
sidebar_position: 2
description: Round Robin routing strategy.
---

# Round Robin

`RoundRobinStrategy` distributes requests sequentially across the available backend servers.

Each incoming request is assigned to the next server in the list. After the last server is selected, routing starts again from the first server.

---

# Workflow

```mermaid
flowchart LR

Request

--> RoundRobinStrategy

--> Next Server

--> Return ServerNode
```

---

# Implementation

The strategy maintains an internal index that points to the next server.

For each request:

1. Read the current index.
2. Select the corresponding server.
3. Increment the index.
4. Reset the index after reaching the last server.

The selected `ServerNode` is returned to `LoadBalancerService`, which continues the routing workflow.

---

# Characteristics

| Property | Value |
|----------|-------|
| Distribution | Sequential |
| Server Selection | Cyclic |
| State | Current server index |

---

# Suitable For

Round Robin performs well when all backend servers have similar processing capacity and requests have comparable execution time.
