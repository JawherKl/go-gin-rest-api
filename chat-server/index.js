const express = require('express');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Chat Server listening on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            // Attempt to parse the message as JSON
            const parsedMessage = JSON.parse(message);

            // Process the parsed message (e.g., send to other clients)
            if (parsedMessage.type === 'new_message') {
                console.log("New Message Send");
                // Broadcast the message to other connected clients or handle it as needed
                broadcastMessage(parsedMessage);
            }
        } catch (error) {
            // Handle cases where the message isn't JSON
            console.error("Received non-JSON message:", message);
        }
    });
});

function broadcastMessage(parsedMessage) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(parsedMessage));
        }
    });
}

app.post('/messages/read', (req, res) => {
    const { messageId, readerId } = req.body;
    updateReadStatus(messageId, readerId);
    notifySenderOfReadReceipt(messageId, readerId);
    res.sendStatus(200);
});

async function updateReadStatus(messageId, readerId) {
    await db.query('UPDATE messages SET read = TRUE WHERE id = $1 AND recipient_id = $2', [messageId, readerId]);
}
