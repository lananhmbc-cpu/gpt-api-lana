// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route: /generate_title
app.post('/generate_title', (req, res) => {
  const { topic } = req.body;
  res.json({ title: `🎵 Tiêu đề gợi ý: “Tận hưởng đêm cùng ${topic}”` });
});

// Route: /generate_content_calendar
app.post('/generate_content_calendar', (req, res) => {
  const { brand, product, instructions } = req.body;

  const calendar = {
    brand,
    product,
    instructions,
    suggestion: `📆 Lịch đăng bài tuần theo brand "${brand}" và sản phẩm "${product}"`,
    schedule: [
      {
        day: 'Thứ 2',
        time: '9:00 PM',
        content: '🌓 Trích đoạn nhạc đêm mới: "Echoes of Rain" | hashtag healing, sleep, piano'
      },
      {
        day: 'Thứ 4',
        time: '9:00 PM',
        content: '🌌 Trích dẫn chữa lành + ảnh tĩnh | phông nền midnight blue, deep purple'
      },
      {
        day: 'Thứ 6',
        time: '11:00 PM',
        content: '🎧 Full album mới "Whispers of the Night" (2h deep sleep loop) ra mắt'
      },
      {
        day: 'Chủ nhật',
        time: '5:00 AM',
        content: '☕️ Gợi ý nhẹ nhàng cho buổi sáng: “Still Awake Morning Flow” | link YouTube + Spotify'
      }
    ]
  };

  res.json(calendar);
});

// Route: /generate_description
app.post('/generate_description', (req, res) => {
  const { topic } = req.body;
  res.json({ description: `🌙 Mô tả chữa lành cho: ${topic}` });
});

// Route: /generate_comment_cta
app.post('/generate_comment_cta', (req, res) => {
  const { topic } = req.body;
  res.json({ comment: `💬 Bạn nghĩ gì về chủ đề: ${topic}? Hãy chia sẻ nhé!` });
});

// Root route
app.get('/', (req, res) => {
  res.send('🌙 Still Awake • Creator Assistant API is running...');
});

// Start server (one single app.listen)
app.listen(PORT, () => {
  console.log(`🚀 API server listening at http://localhost:${PORT}`);
});
