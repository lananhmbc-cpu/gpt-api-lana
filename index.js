// index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Cấu hình cổng server
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Still Awake API is running...');
});

// POST /generate_title
app.post('/generate_title', (req, res) => {
  const { topic } = req.body;
  res.json({ title: `Generated title for ${topic}` });
});

// POST /generate_content_calendar
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
        content: '🌌 Trích dẫn chữa lành + ảnh tĩnh | phong nền midnight blue, deep purple'
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

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Still Awake API is running on port ${PORT}`);
});