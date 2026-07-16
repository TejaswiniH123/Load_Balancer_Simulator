---
id: intro
title: Introduction
sidebar_position: 1
slug: /
description: Documentation for the Load Balancer Simulator & Visualizer.
---

# Load Balancer Simulator & Visualizer

The **Load Balancer Simulator & Visualizer** is a full-stack web application that demonstrates how incoming client requests are distributed across multiple backend servers using different load balancing algorithms.

The project combines a **Spring Boot** backend with a **Next.js** frontend to simulate request routing, visualize server activity in real time, and present runtime analytics through an interactive dashboard.

Unlike production load balancers that operate in the background, this simulator exposes the routing process so that each request can be observed as it moves through the system.

---

# What This Documentation Covers

This documentation explains the implementation of the project, including:

- System architecture
- Backend design
- Frontend design
- Request processing pipeline
- REST APIs
- WebSocket communication
- Load balancing algorithms
- Analytics module
- Traffic simulator
- Deployment
- Developer guide

The content is based on the current implementation of the project.

---

# Project Overview

The application is divided into two independent applications.

| Application | Responsibility |
|-------------|----------------|
| Spring Boot Backend | Request routing, server management, simulation, analytics and WebSocket communication |
| Next.js Frontend | User interface, visualization and dashboard controls |

The frontend communicates with the backend using REST APIs for user actions and WebSockets for real-time updates.

---

# Technologies

| Layer | Technologies |
|--------|--------------|
| Backend | Java 17, Spring Boot, Maven |
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Communication | REST APIs, WebSockets |
| Deployment | Docker, Render, Vercel |

---

# Project Goals

The project was developed to:

- Demonstrate different load balancing algorithms.
- Visualize request routing in real time.
- Compare routing behaviour under simulated traffic.
- Provide an interactive dashboard for observing server activity.
- Demonstrate a modular backend architecture using the Strategy Pattern.

---

# Documentation Structure

The documentation is organized into the following sections.

- Getting Started
- Architecture
- API Reference
- Load Balancing Algorithms
- Modules
- Deployment
- Developer Guide
- Troubleshooting
- FAQ

Each section focuses on a specific part of the implementation and can be read independently.
