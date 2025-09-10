const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Lana’s GPT API 🎶');
});

// 1. generateTitle
app.post('/generate_title', (req, res) => {
  const { topic } = req.body;
  res.json({ title: `🎵 Title suggestion for: ${topic}` });
});

// 2. generateShortTitle
app.post('/generate_short_title', (req, res) => {
  const { topic } = req.body;
  res.json({ shortTitle: `🎧 Short title for: ${topic}` });
});

// 3. generateDescription
app.post('/generate_description', (req, res) => {
  const { title } = req.body;
  res.json({ description: `✨ Description for "${title}"` });
});

// 4. generateFacebookCaption
app.post('/generate_facebook_caption', (req, res) => {
  const { title } = req.body;
  res.json({ facebookCaption: `📘 Facebook caption for: ${title}` });
});

// 5. generateInstagramCaption
app.post('/generate_instagram_caption', (req, res) => {
  const { title } = req.body;
  res.json({ instagramCaption: `📸 IG caption for: ${title}` });
});

// 6. generateMultiPlatformCaption
app.post('/generate_multi_platform_caption', (req, res) => {
  const { title } = req.body;
  res.json({ multiPlatform: `🌐 Universal caption for: ${title}` });
});

// 7. generateHashtag
app.post('/generate_hashtag', (req, res) => {
  const { topic } = req.body;
  res.json({ hashtags: [`#${topic.replace(/\s+/g, '').toLowerCase()}`, '#healing', '#stillawake'] });
});

// 8. generateMetadata
app.post('/generate_metadata', (req, res) => {
  const { title } = req.body;
  res.json({ metadata: { title, keywords: ['sleep', 'music'], description: `Meta for: ${title}` } });
});

// 9. generateKeywords
app.post('/generate_keywords', (req, res) => {
  const { topic } = req.body;
  res.json({ keywords: topic.split(' ') });
});

// 10. generateCommentCTA
app.post('/generate_comment_cta', (req, res) => {
  const { title } = req.body;
  res.json({ commentCTA: `🌙 Bạn đang nghe nhạc "${title}" vào lúc nào? Hãy comment nhé!` });
});

// 11. generateContentCalendar
app.post('/generate_content_calendar', (req, res) => {
  const { month } = req.body;
  res.json({ calendar: `🗓 Content calendar for ${month}` });
});

// 12. generateBlogCaption
app.post('/generate_blog_caption', (req, res) => {
  const { topic } = req.body;
  res.json({ blogCaption: `📝 Blog caption for: ${topic}` });
});

// 13. generateReelScript
app.post('/generate_reel_script', (req, res) => {
  const { idea } = req.body;
  res.json({ reelScript: `🎥 Script for short reel: ${idea}` });
});

// 14. generateThumbnailPrompt
app.post('/generate_thumbnail_prompt', (req, res) => {
  const { style } = req.body;
  res.json({
    prompt: `A cinematic thumbnail in ${style} style with moonlight, purple & midnight tones, paper cutout glow`
  });
});

// 15. generateVideoPrompt
app.post('/generate_video_prompt', (req, res) => {
  const { scene } = req.body;
  res.json({
    prompt: `Cinematic video of ${scene}, slow motion, dreamy atmosphere, soft lighting, midnight blue and deep purple color grading, moonlight yellow highlight, emotional, ultra-detailed, 16:9, UHD 4K, film still, directed by Wong Kar-wai style`
  });
});

// 16. generateSunoPrompt
app.post('/generate_suno_prompt', (req, res) => {
  const { mood } = req.body;
  res.json({
    prompt: `8-min instrumental piano, BPM 60, reverb, calm & ${mood}, no vocals, designed for sleep`
  });
});

// 17. generateSunoLoopPrompt
app.post('/generate_suno_loop_prompt', (req, res) => {
  const { emotion } = req.body;
  res.json({
    prompt: `Seamless Suno loop for ${emotion} emotion, ambient background, 90min-ready`
  });
});

// 18. generateYoutubeTags
app.post('/generate_youtube_tags', (req, res) => {
  const { title } = req.body;
  res.json({ tags: [`${title}`, 'relaxing music', 'healing sounds'] });
});

// PORT setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌙 Lana’s GPT API is running on port ${PORT}`);
});