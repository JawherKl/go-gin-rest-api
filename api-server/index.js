const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API Server is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Server listening on port ${PORT}`);
});

app.get('/chat/history', async (req, res) => {
    const { userId, limit = 10, offset = 0 } = req.query;
    try {
        // Fetch chat history with pagination
        const history = await getChatHistory(userId, parseInt(limit), parseInt(offset));
        res.status(200).json({ history });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch chat history.' });
    }
});

// chat-server/database.js
async function getChatHistory(userId, limit, offset) {
    return await db.query('SELECT * FROM messages WHERE user_id = $1 ORDER BY timestamp DESC LIMIT $2 OFFSET $3', 
                           [userId, limit, offset]);
}
