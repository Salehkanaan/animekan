import cors from 'cors';
import express from 'express';
import axios from 'axios'; // Import axios

const app = express();
app.use(cors());

app.get('/api/anime', async (req, res) => {
    try {
        const response = await axios.get('https://app.apibuilder.io/anime/salehk/0.0.1-dev/original');
        res.json(response.data); // Send the data from the API as the response
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

app.listen(3001, () => console.log('Server running on port 3000'));
