const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Chat Server listening on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Broadcast to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
