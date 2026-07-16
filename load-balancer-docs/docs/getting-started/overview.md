---
title: Overview
sidebar_position: 1
description: Overview of the project and its capabilities.
---

# Overview

The **Load Balancer Simulator & Visualizer** is a full-stack application that demonstrates how different load balancing algorithms distribute incoming requests across multiple backend servers.

The project combines a Spring Boot backend with a Next.js frontend to provide an interactive environment where request routing, server activity, and system metrics can be observed in real time.

The simulator is intended for learning, experimentation, and understanding the behavior of different load balancing strategies.

---

# Features

The current implementation includes:

- Round Robin load balancing
- Weighted Round Robin load balancing
- Least Connections load balancing
- Real-time request routing visualization
- Live WebSocket updates
- Dynamic server management
- Traffic simulation
- Runtime analytics dashboard
- Docker support
- Cloud deployment using Render and Vercel

---

# System Components

| Component | Responsibility |
|-----------|----------------|
| Backend | Request routing, simulation, analytics and WebSocket communication |
| Frontend | Dashboard, visualization and user interaction |
| Docker | Backend containerization |
| Render | Backend deployment |
| Vercel | Frontend deployment |

---

# Workflow

1. Start the backend application.
2. Start the frontend application.
3. Open the dashboard.
4. Start the simulator.
5. Observe request routing and server updates in real time.