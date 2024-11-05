const express = require('express');

const app = express();
const PORT = process.env.PORT || 6000;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 6001 });

// Middleware to parse JSON bodies
app.use(express.json()); // This must be included before any route handling

// Sample data store for presence information
let presenceList = [];

// POST endpoint to update user presence
app.post('/presence', (req, res) => {
    const { username, status } = req.body;

    if (!username || !status) {
        return res.status(400).json({ error: 'Username and status are required.' });
    }

    // Update presence list
    const existingUserIndex = presenceList.findIndex(user => user.username === username);
    if (existingUserIndex !== -1) {
        presenceList[existingUserIndex].status = status; // Update status
    } else {
        presenceList.push({ username, status }); // Add new user
    }

    return res.json({ message: `User ${username} is now ${status}` });
});

// GET endpoint to retrieve user presence
app.get('/presence', (req, res) => {
    res.json(presenceList);
});

function broadcastPresenceUpdate(username, status) {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'presence_update', username, status }));
        }
    });
}

// Trigger broadcast on user connection/disconnection
app.post('/update-status', (req, res) => {
    const { username, status } = req.body;
    broadcastPresenceUpdate(username, status);
    res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Presence Server listening on port ${PORT}`);
});
