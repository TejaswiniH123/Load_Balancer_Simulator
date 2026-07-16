---
title: API Overview
sidebar_position: 1
description: Overview of the REST APIs exposed by the backend.
---

# API Overview

The backend exposes a set of REST APIs that allow the frontend to control the simulator and retrieve the current system state.

All business operations are handled by Spring Boot controllers. The frontend interacts with these controllers through HTTP requests, while real-time updates are delivered separately using WebSockets.

---

# Base URL

During local development, the backend runs at:

```text
http://localhost:8080
```

All endpoints are relative to this base URL.

---

# API Modules

The backend APIs are organized by responsibility.

| Module | Controller | Purpose |
|----------|------------|---------|
| Load Balancer | LoadBalancerController | Routing requests and managing algorithms |
| Simulation | SimulationController | Start and stop traffic simulation |
| Servers | ServerController | Manage simulated backend servers |
| Analytics | AnalyticsController | Return runtime statistics |
| Requests | RequestController | Return generated request history |
| WebSocket Test | WebSocketTestController | Trigger WebSocket updates for testing |

---

# Communication Model

The application uses two communication mechanisms.

| Type | Purpose |
|------|---------|
| REST | User actions and data retrieval |
| WebSocket | Real-time dashboard updates |

REST APIs are request-response based, while WebSocket messages are pushed automatically by the backend.

---

# Response Format

The backend returns JSON responses for application data.

Depending on the endpoint, responses include:

- DTO objects
- Lists
- Primitive values
- Success messages

---

# API Workflow

```mermaid
flowchart LR

Frontend

--> REST API

--> Controller

--> Service

--> Response

Response

--> Frontend
```

---

# Error Handling

The backend returns standard HTTP status codes to indicate the result of each request.

| Status Code | Meaning |
|-------------|---------|
| 200 | Request processed successfully |
| 400 | Invalid request |
| 404 | Resource not found |
| 500 | Internal server error |
