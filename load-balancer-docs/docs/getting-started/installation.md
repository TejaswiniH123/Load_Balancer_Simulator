---
title: Installation
sidebar_position: 3
description: Running the project locally.
---

# Installation

Clone the repository.

```bash
git clone https://github.com/TejaswiniH123/Load_Balancer_Simulator.git
```

Move into the project directory.

```bash
cd Load_Balancer_Simulator
```

---

# Start the Backend

Navigate to the backend project.

```bash
cd backend/loadbalancer-backend
```

Install dependencies and start the application.

```bash
mvn spring-boot:run
```

The backend will be available at:

```text
http://localhost:8080
```

---

# Start the Frontend

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

---

# Verify Installation

After both applications are running:

- Open `http://localhost:3000`
- Verify that the dashboard loads.
- Start the simulation.
- Confirm that server cards and analytics update correctly.