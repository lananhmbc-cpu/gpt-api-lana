// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Định nghĩa route API
app.post('/generate-title', async (req, res) => {
  const { topic } = req.body;
  res.json({ title: `Generated title for ${topic}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});