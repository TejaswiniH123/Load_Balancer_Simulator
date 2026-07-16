---
title: Architecture Decisions
sidebar_position: 2
description: Key architectural decisions behind the implementation.
---

# Architecture Decisions

This document explains the major architectural decisions made during the implementation of the Load Balancer Simulator & Visualizer. Each decision is reflected in the current codebase and was made to improve modularity, maintainability, and extensibility.

---

# Layered Architecture

The backend follows a layered architecture.

```
Controller
      │
      ▼
Service
      │
      ▼
Strategy
      │
      ▼
Model
```

Each layer has a single responsibility.

| Layer | Responsibility |
|---------|----------------|
| Controller | Handles HTTP requests |
| Service | Coordinates application logic |
| Strategy | Selects the destination server |
| Model | Represents application state |

Separating responsibilities reduces coupling and keeps the codebase easier to maintain.

---

# Why Strategy Pattern?

The simulator supports multiple routing algorithms that perform the same task: selecting a destination server.

Instead of embedding algorithm-specific logic inside `LoadBalancerService`, each algorithm is implemented independently through the `LoadBalancingStrategy` interface.

Current implementations:

- RoundRobinStrategy
- WeightedRoundRobinStrategy
- LeastConnectionsStrategy

This design allows the routing behaviour to change without affecting the remainder of the request processing pipeline.

---

# Why RequestSimulator Is Separate

Traffic generation is isolated inside `RequestSimulator`.

Responsibilities include:

- simulation lifecycle
- request generation
- request queue management

Routing decisions remain inside `LoadBalancerService`.

Keeping these responsibilities separate allows the simulator to focus only on generating traffic while the routing engine focuses only on server selection.

---

# Why ServerService Exists

Server information is managed by `ServerService`.

Responsibilities include:

- storing simulated servers
- enabling and disabling servers
- adding and removing servers
- resetting connection counts

If server management were implemented inside `LoadBalancerService`, the routing engine would become responsible for two unrelated concerns.

Separating these responsibilities keeps the routing workflow focused and easier to maintain.

---

# Why Analytics Are Generated On Demand

The application does not maintain a dedicated analytics service or analytics database.

Instead, `AnalyticsController` derives the required statistics from the current application state whenever `/api/analytics` is requested.

The response is generated using:

- current server list
- active connections
- total routed requests
- active routing algorithm

This approach avoids maintaining duplicate state while ensuring the dashboard reflects the latest simulation data.

---

# Why REST and WebSockets Are Used Together

The application uses two communication models.

REST APIs are used for user-initiated operations.

Examples include:

- changing algorithms
- starting the simulator
- adding servers

WebSockets are used to publish asynchronous updates whenever the server state changes.

This separation keeps command execution and state synchronization independent.

---

# Why WebSocketPublisher Is Isolated

Backend services do not communicate directly with WebSocket clients.

Instead, updates are delegated to `WebSocketPublisher`.

This provides a single location for message publishing and prevents business logic from depending directly on messaging infrastructure.

---

# Why Routing Logic Is Centralized

All request routing passes through `LoadBalancerService`.

This service is responsible for:

- selecting the active strategy
- invoking the routing algorithm
- updating server state
- tracking routed requests
- publishing server updates

By centralizing the routing workflow, all strategies follow the same processing pipeline.

---

# Why Frontend Services Are Separate

The frontend isolates backend communication inside dedicated service modules.

Current services include:

- analyticsService
- loadBalancerService
- serverService
- simulationService
- websocketService

React components focus on rendering data rather than performing HTTP or WebSocket operations directly.

This separation improves readability and promotes component reuse.

---

# Design Summary

The current architecture is based on three principles:

- Separation of Concerns
- Single Responsibility
- Strategy Pattern

Each module performs one clearly defined task, making the project easier to understand, extend, and maintain.