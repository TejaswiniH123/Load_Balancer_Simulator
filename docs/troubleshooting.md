---
title: Troubleshooting
sidebar_position: 100
description: Common issues encountered while running the application.
---

# Troubleshooting

This page lists common issues that may occur while running or deploying the Load Balancer Simulator & Visualizer.

---

# Backend Does Not Start

## Cause

Java or Maven is not installed correctly, or another application is using port `8080`.

## Solution

Verify Java installation.

```bash
java -version
```

Verify Maven installation.

```bash
mvn -version
```

Check whether another application is using port **8080**.

---

# Frontend Does Not Start

## Cause

Project dependencies are missing.

## Solution

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# Unable to Connect to Backend

## Cause

The backend is not running or the frontend is using an incorrect API URL.

## Solution

- Start the Spring Boot application.
- Verify that the backend is running on port **8080**.
- Check the API URL configured in the frontend.

---

# WebSocket Updates Not Working

## Cause

The WebSocket connection could not be established.

## Solution

- Verify that the backend is running.
- Confirm that `WebSocketConfig` is configured correctly.
- Check the browser console for connection errors.
- Ensure the frontend connects to the correct backend URL.

---

# Simulation Does Not Generate Requests

## Cause

The simulator has not been started.

## Solution

Start the simulator from the dashboard or call:

```http
POST /api/simulation/start
```

Verify that no exceptions are reported in the backend logs.

---

# Docker Container Stops Immediately

## Cause

The application failed during startup.

## Solution

Inspect the container logs.

```bash
docker logs <container-id>
```

Resolve the reported issue and restart the container.

---

# Dashboard Does Not Update

## Cause

The backend is not publishing WebSocket events.

## Solution

Verify that:

- requests are being generated
- `LoadBalancerService` is routing requests
- `WebSocketPublisher` is publishing updates
- the frontend is connected through `websocketService.ts`
