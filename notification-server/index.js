const express = require('express');
const fetch = require('node-fetch'); // This works with node-fetch version 2
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.post('/notify', (req, res) => {
    const { message, token } = req.body;
    // Integrate with third-party push notification service
    console.log(`Sending notification: ${message}`);
    res.send(`Notification sent: ${message}`);
});

app.listen(PORT, () => {
    console.log(`Notification Server listening on port ${PORT}`);
});
