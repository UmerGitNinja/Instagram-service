const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/user/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});