---
title: Project Structure
sidebar_position: 1
description: Organization of the frontend and backend projects.
---

# Project Structure

The project is organized into two independent applications.

```text
Load_Balancer_Simulator
│
├── backend/
│   └── loadbalancer-backend/
│
├── frontend/
│
├── docker-compose.yml
└── README.md
```

The backend contains the routing engine and simulation logic, while the frontend provides the dashboard used to interact with the simulator.

---

# Backend Structure

```text
backend/loadbalancer-backend
│
├── config
├── controller
├── dto
├── model
├── service
├── simulator
├── strategy
├── websocket
└── LoadbalancerBackendApplication.java
```

| Package | Responsibility |
|---------|----------------|
| config | Application configuration |
| controller | REST API endpoints |
| dto | API request and response models |
| model | Domain objects |
| service | Business logic |
| simulator | Traffic generation |
| strategy | Load balancing algorithms |
| websocket | WebSocket messaging |

---

# Frontend Structure

```text
frontend
│
├── app
├── components
├── hooks
├── services
├── types
├── public
└── styles
```

| Directory | Responsibility |
|------------|----------------|
| app | Application pages |
| components | Dashboard UI components |
| services | REST and WebSocket communication |
| hooks | Reusable React hooks |
| types | Shared TypeScript models |
| public | Static assets |

---

# Design Principles

The project structure follows a clear separation of responsibilities.

- Controllers expose REST APIs.
- Services implement business logic.
- Strategies perform routing.
- Components render the dashboard.
- Services handle backend communication.

This organization keeps the application modular and easier to maintain.