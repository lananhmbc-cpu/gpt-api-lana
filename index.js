// index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Utilities
const success = (res, result) => res.status(200).json({ result });
const error = (res, msg = "Something went wrong") => res.status(500).json({ error: msg });

// Action handlers
app.post("/generate_title", (req, res) => {
  try {
    const { input } = req.body;
    success(res, `🎵 Title generated from: ${input}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_content_calendar", (req, res) => {
  try {
    const { theme } = req.body;
    success(res, `📅 Content calendar created for theme: ${theme}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_description", (req, res) => {
  try {
    const { content } = req.body;
    success(res, `📄 Description created for: ${content}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_comment_cta", (req, res) => {
  try {
    const { mood } = req.body;
    success(res, `💬 Comment CTA generated for mood: ${mood}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_thumbnail_prompt", (req, res) => {
  try {
    const { scene } = req.body;
    success(res, `🖼 Thumbnail prompt created for: ${scene}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_video_prompt", (req, res) => {
  try {
    const { concept } = req.body;
    success(res, `🎬 Video prompt created for: ${concept}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_suno_prompt", (req, res) => {
  try {
    const { style } = req.body;
    success(res, `🎧 Suno prompt created in style: ${style}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_facebook_caption", (req, res) => {
  try {
    const { post } = req.body;
    success(res, `📘 Facebook caption: ${post}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_instagram_caption", (req, res) => {
  try {
    const { photo } = req.body;
    success(res, `📸 Instagram caption created for photo: ${photo}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_reel_caption", (req, res) => {
  try {
    const { vibe } = req.body;
    success(res, `🎞 Reel caption generated for vibe: ${vibe}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_multi_platform_caption", (req, res) => {
  try {
    const { topic } = req.body;
    success(res, `🌐 Multi-platform caption created for: ${topic}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_keywords", (req, res) => {
  try {
    const { subject } = req.body;
    success(res, `🔍 Keywords generated for: ${subject}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_metadata", (req, res) => {
  try {
    const { content } = req.body;
    success(res, `🧩 Metadata generated for: ${content}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_hashtags", (req, res) => {
  try {
    const { niche } = req.body;
    success(res, `🏷 Hashtags generated for: ${niche}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_playlist_structure", (req, res) => {
  try {
    const { theme } = req.body;
    success(res, `🎶 Playlist structure for: ${theme}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_podcast_description", (req, res) => {
  try {
    const { episode } = req.body;
    success(res, `🎙 Podcast description for: ${episode}`);
  } catch (err) {
    error(res);
  }
});

app.post("/generate_brand_voice", (req, res) => {
  try {
    const { identity } = req.body;
    success(res, `🗣 Brand voice for: ${identity}`);
  } catch (err) {
    error(res);
  }
});

app.post("/spotify_upload_helper", (req, res) => {
  try {
    const { track } = req.body;
    success(res, `🎵 Spotify upload helper created for track: ${track}`);
  } catch (err) {
    error(res);
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("🟢 GPT API for Lana is running.");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});