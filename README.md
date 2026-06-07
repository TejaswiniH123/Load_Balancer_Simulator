# Load Balancer Simulator Visualization

A real-time full-stack distributed systems simulator that demonstrates how load balancing algorithms distribute requests across multiple servers.

## Features

### Load Balancing Algorithms

* Round Robin
* Least Connections
* Weighted Round Robin

### Real-Time Monitoring

* WebSocket-based live updates
* Server health monitoring
* Active connection tracking
* Requests-per-second metrics

### Analytics Dashboard

* Live server connection charts
* Request trend visualization
* Cluster health monitoring
* Algorithm switching dashboard

### Infrastructure Simulation

* Server failure simulation
* Manual scaling
* Automatic scaling
* Dynamic server management

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Recharts
* Framer Motion
* Axios

### Backend

* Java 17
* Spring Boot
* Spring MVC
* Spring WebSocket
* Maven

## Design Patterns

* Strategy Pattern

## Project Architecture

Client
↓
Next.js Dashboard
↓
REST APIs + WebSockets
↓
Spring Boot Load Balancer Engine
↓
Virtual Server Cluster

## Key Concepts Demonstrated

* Distributed Systems
* Load Balancing
* Real-Time Communication
* Scalability
* Fault Tolerance
* Monitoring & Observability

## Running the Application

### Backend

cd backend/loadbalancer-backend

mvn spring-boot:run

### Frontend

cd frontend

npm install

npm run dev

### Open

http://localhost:3000

## Future Improvements

* IP Hashing Algorithm
* Redis Integration
* NGINX Reverse Proxy Simulation
* Kubernetes Cluster Visualization
* Cloud Deployment
