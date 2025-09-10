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


// Root route
app.get('/', (req, res) => {
  res.send('Still Awake API is running...');
});

// Action: generate_content_calendar
app.post('/generate_content_calendar', (req, res) => {
  const { brand, product, instructions } = req.body;

  // Nội dung giả lập lịch đăng bài theo phong cách Still Awake
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

// Cổng mặc định cho Render tự dò
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Still Awake API listening on port ${PORT}`);