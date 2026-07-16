---
title: Frequently Asked Questions
sidebar_position: 101
description: Frequently asked questions about the project.
---

# Frequently Asked Questions

## What is the purpose of this project?

The project demonstrates how different load balancing algorithms distribute requests across multiple backend servers while providing a real-time visualization of the routing process.

---

## Which algorithms are implemented?

The current implementation supports:

- Round Robin
- Weighted Round Robin
- Least Connections

---

## Does the project use a database?

No.

All application state is maintained in memory while the simulator is running.

---

## Why are REST APIs and WebSockets both used?

REST APIs handle user actions such as starting the simulation or changing the routing algorithm.

WebSockets deliver real-time updates whenever the backend state changes.

---

## Can I add a new routing algorithm?

Yes.

Create a new implementation of `LoadBalancingStrategy`, add a new value to `AlgorithmType`, and update `LoadBalancerService` to use the new strategy.

---

## Is the project deployed?

Yes.

- Backend: Render
- Frontend: Vercel

---

## Does the simulator generate real network traffic?

No.

The simulator generates synthetic requests to demonstrate how different routing algorithms behave.
