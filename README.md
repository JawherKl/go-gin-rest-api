# Chat Application
A real-time chat application built with Node.js using a microservices architecture. This application leverages WebSocket for real-time communication and traditional HTTP requests for user management features.

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication (sign up, login, profile management)
- Real-time chat messaging
- Presence management (online/offline status)
- Push notifications for new messages
- Persistent chat history

## Architecture
The application is divided into several microservices:

- **Auth Service**: Handles user authentication and profile management.
- **Chat Service**: Manages real-time chat connections and message delivery.
- **Presence Service**: Tracks user presence status (online/offline).
- **Notification Service**: Sends push notifications to users.
- **API Server**: Provides a unified interface for client interactions.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/JawherKl/chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-app
   ```

3. Install the dependencies for each service:

   For each microservice, navigate to its directory and run:

   ```bash
   npm install
   ```

4. Start the services:

   You can start each service using Node.js. For example:

   ```bash
   # Start Auth Service
   cd auth-server
   node index.js

   # Start Chat Service
   cd ../chat-server
   node index.js

   # Start Presence Service
   cd ../presence-server
   node index.js

   # Start Notification Service
   cd ../notification-server
   node index.js
   ```

## Usage

After starting all the services, you can use Postman or cURL to interact with the API endpoints.

### Example cURL Requests

1. **Sign Up**:

   ```bash
   curl -X POST http://localhost:5000/auth/signup -H "Content-Type: application/json" -d '{"username": "user1", "password": "password123"}'
   ```

2. **Login**:

   ```bash
   curl -X POST http://localhost:5000/auth/login -H "Content-Type: application/json" -d '{"username": "user1", "password": "password123"}'
   ```

3. **Update Presence**:

   ```bash
   curl -X POST http://localhost:6000/presence -H "Content-Type: application/json" -d '{"username": "user1", "status": "online"}'
   ```

4. **Send Message** (via the Chat Service):

   ```bash
   curl -X POST http://localhost:7000/chat/send -H "Content-Type: application/json" -d '{"from": "user1", "to": "user2", "message": "Hello!"}'
   ```

## API Endpoints

### Auth Service
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Authenticate user and retrieve a token

### Presence Service
- `POST /presence` - Update user presence status
- `GET /presence` - Retrieve the presence status of users

### Chat Service
- `POST /chat/send` - Send a message
- `GET /chat/history` - Retrieve chat history

### Notification Service
- `POST /notifications` - Send notifications

## Testing

You can test the API using Postman or cURL as shown in the usage section. Consider using tools like Mocha or Jest for unit testing your services.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
### Tips for Customization
- **Project Name and Description**: Make sure to customize the project name and description according to your specific application.
- **Installation Instructions**: Add or modify instructions to reflect any other dependencies or setup processes that are unique to your project.
- **API Endpoints**: Update the API endpoints section with accurate paths and methods based on what you've implemented.
- **Testing**: Provide specific instructions on how to run tests if applicable.
- **Contributing**: Update the contributing section to reflect your guidelines for contributions.
```
