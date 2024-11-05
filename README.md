# ChatApp Microservices

ChatApp is a real-time chat application built using a microservices architecture with Node.js. The project uses WebSocket for bidirectional communication between clients and servers, and each service is designed to handle specific tasks within the chat ecosystem.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Microservices Architecture](#microservices-architecture)
4. [Setup and Installation](#setup-and-installation)
5. [API Documentation](#api-documentation)
6. [Design Patterns and Refactoring](#design-patterns-and-refactoring)
7. [Future Enhancements](#future-enhancements)

---

## Project Overview

ChatApp is a real-time chat application where users can:
- Sign up, log in, and manage their profiles
- Send and receive messages instantly
- Get notifications for new messages
- View online/offline status of other users

This project is implemented using a microservices architecture to handle the different responsibilities of a chat app. WebSocket is the main protocol used for real-time chat, while HTTP is used for other operations such as user authentication and notifications.

## Features

1. **User Management**:
   - Signup, Login, and Profile management using stateless API requests.
   - Secure login and user authentication.

2. **Real-time Messaging**:
   - Bi-directional communication between clients and servers using WebSocket.
   - Persistent connections for continuous chat sessions.

3. **Notifications**:
   - Push notifications for new messages, even when users are offline.

4. **Presence Status**:
   - Real-time updates on users' online/offline status.
   - Allows users to know when their contacts are available.

5. **Chat History**:
   - Chat history storage in a key-value store to retrieve previous messages when users log back in.

## Microservices Architecture

The ChatApp backend consists of the following microservices:

1. **API Server**:
   - Manages user registration, login, and profile-related operations.
   - Exposes HTTP endpoints for CRUD operations on user data.
   - Routes requests to appropriate services and performs authentication.

2. **Chat Server**:
   - Handles all chat-related WebSocket connections.
   - Facilitates real-time messaging between users.
   - Broadcasts messages to connected clients and manages message delivery.
   - Stores chat history in a key-value store for quick access when users reconnect.

3. **Notification Server**:
   - Integrates with third-party notification services to push alerts to users.
   - Sends notifications when users receive new messages or other alerts.

4. **Presence Server**:
   - Tracks users' online/offline statuses.
   - Notifies other users when their contacts' statuses change.
   - Manages WebSocket connections to detect presence status in real-time.

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Redis (for presence tracking and chat history storage)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jawherKl/chat-app.git
   cd chat-app
   ```

2. **Install Dependencies for Each Service**:
   Navigate to each service directory and install dependencies.

   ```bash
   cd api-server
   npm install

   cd ../chat-server
   npm install

   cd ../notification-server
   npm install

   cd ../presence-server
   npm install
   ```

3. **Start Each Microservice**:
   Run each service in a separate terminal window.

   ```bash
   # API Server
   cd api-server
   node index.js

   # Chat Server
   cd ../chat-server
   node index.js

   # Notification Server
   cd ../notification-server
   node index.js

   # Presence Server
   cd ../presence-server
   node index.js
   ```

4. **Testing**:
   - Use Postman or `curl` commands to test HTTP endpoints (e.g., `/api/signup`, `/api/login`).
   - Use WebSocket testing tools (e.g., `wscat` or Postman) to test WebSocket connections on the chat and presence servers.

## API Documentation

### API Server

- **POST /api/signup** - Registers a new user.
- **POST /api/login** - Authenticates a user and returns a token.
- **GET /api/profile** - Retrieves the profile of the logged-in user.
  
### Chat Server

- **WebSocket Endpoint** - `/chat` - Allows users to send and receive real-time messages.

### Notification Server

- **POST /notify** - Sends a notification to a user about a new message or other events.

### Presence Server

- **WebSocket Endpoint** - `/presence` - Tracks and updates users’ online/offline status.

## Design Patterns and Refactoring

The ChatApp project incorporates the following design patterns for improved code maintainability and scalability:

1. **Factory Pattern**:
   - Used to create instances of WebSocket clients and notification handlers dynamically.

2. **Observer Pattern**:
   - Used for the presence service to notify clients about the status changes (online/offline) of other users.

3. **Singleton Pattern**:
   - Ensures only one instance of services like the Redis connection pool and WebSocket server.

4. **Service Registry**:
   - Used to manage service discovery. The registry provides the client with the appropriate chat or presence server based on the current load.

5. **Router Pattern**:
   - Routes incoming HTTP requests in the API server to specific microservices based on the endpoint.

## Future Enhancements

Some possible enhancements include:

- **Enhanced Notification Handling**: Integrate with more notification channels for flexible alerts.
- **Load Balancing**: Add load balancers to distribute the workload across instances.
- **Message Encryption**: Ensure message data security by adding end-to-end encryption.
- **Scalable Key-Value Storage**: Use distributed databases to store chat history and ensure scalability.
