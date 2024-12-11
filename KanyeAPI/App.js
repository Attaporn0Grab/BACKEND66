const express = require('express');
const app = express();
const axios = require('axios');

app.get('/kanye', async (req, res) => {
    try {
        const url = 'https://api.kanye.rest/'; 
        const response = await axios.get(url);
        res.json(response.data); // ส่งข้อมูลที่ fetch ได้เป็น response
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
