---
title: Coding Standards
sidebar_position: 4
description: Development guidelines followed by the project.
---

# Coding Standards

The project follows a consistent structure to keep the codebase readable and maintainable.

---

# Backend

- Keep controllers lightweight.
- Place business logic inside services.
- Implement routing inside strategy classes.
- Keep models free from business logic.
- Use DTOs for API responses.

---

# Frontend

- Keep components focused on rendering.
- Place HTTP requests inside service modules.
- Manage WebSocket communication through `websocketService.ts`.
- Define shared models inside the `types` directory.

---

# Naming Conventions

| Element | Convention |
|----------|------------|
| Class | PascalCase |
| Method | camelCase |
| Variable | camelCase |
| Package | lowercase |

---

# General Guidelines

- Follow the existing package structure.
- Keep methods focused on a single responsibility.
- Reuse existing services where possible.
- Avoid duplicating business logic.

Following these guidelines helps maintain consistency across the project as new features are added.