---
title: Configuration
sidebar_position: 4
description: Application configuration.
---

# Configuration

The backend and frontend are configured independently during development.

---

# Backend Configuration

The backend uses Spring Boot configuration files.

Primary configuration:

```text
src/main/resources/application.properties
```

This file contains application-specific settings such as server configuration.

---

# Frontend Configuration

The frontend communicates with the backend through REST APIs and WebSocket endpoints.

During local development, ensure that the frontend points to:

```text
http://localhost:8080
```

for backend communication.

---

# Cross-Origin Requests

The backend enables communication with the frontend through the configured CORS settings.

If the frontend runs on a different origin, update the allowed origins in the backend configuration.

---

# WebSocket Configuration

The backend exposes a WebSocket endpoint configured in:

```text
config/WebSocketConfig.java
```

The frontend establishes a connection using the WebSocket service and subscribes to server updates.

---

# Running in Development

Before starting the application, verify:

- Backend is running on port **8080**
- Frontend is running on port **3000**
- WebSocket connection is established
- REST endpoints are accessible