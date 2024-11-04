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
