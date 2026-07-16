---
title: Known Limitations
sidebar_position: 102
description: Current limitations of the project.
---

# Known Limitations

The current implementation focuses on demonstrating load balancing concepts rather than replicating a production-grade load balancer.

---

## In-Memory Storage

Server information, request history, and analytics exist only while the application is running.

Restarting the backend resets the simulation.

---

## Limited Algorithms

The simulator currently supports:

- Round Robin
- Weighted Round Robin
- Least Connections

---

## Fixed Request Interval

Requests are generated every two seconds using the configured scheduler.

The request generation interval cannot currently be changed through the user interface.

---

## Single Backend Application

Although the simulator models multiple backend servers, all processing is performed within a single Spring Boot application.

---

## No Authentication

REST APIs and WebSocket endpoints are publicly accessible.

Authentication and authorization are not implemented.

---

## No Persistent Analytics

Analytics are calculated from the current runtime state and are not stored after the application stops.
