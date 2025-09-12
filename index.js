import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/**
 * 1. Generate Title
 */
app.post("/generate_title", (req, res) => {
  const { mood, theme, duration, language, emoji } = req.body;
  res.json({
    result: `🎶 ${emoji ? "✨ " : ""}${mood} ${theme} • ${duration} [${language}]`
  });
});

/**
 * 2. Generate Description
 */
app.post("/generate_description", (req, res) => {
  const { title, mood, keywords, language, hashtag_count, emoji } = req.body;
  res.json({
    result: `📖 ${title} | Mood: ${mood} | Keywords: ${keywords.join(", ")} | ${hashtag_count} hashtags | ${emoji ? "With emoji" : "No emoji"} | ${language}`
  });
});

/**
 * 3. Generate Video Prompt
 */
app.post("/generate_video_prompt", (req, res) => {
  const { scene_description, camera_movement } = req.body;
  res.json({
    result: `🎬 Cinematic video of ${scene_description} | Camera: ${camera_movement}`
  });
});

/**
 * 4. Generate Veo3 Prompt
 */
app.post("/generate_veo3_prompt", (req, res) => {
  const { scene, camera_movement, style, color_palette, atmosphere, aspect_ratio, resolution, language } = req.body;
  res.json({
    result: `🎥 Veo3 Prompt → Scene: ${scene}, Camera: ${camera_movement}, Style: ${style}, Palette: ${color_palette}, Atmosphere: ${atmosphere}, AR: ${aspect_ratio}, Res: ${resolution}, Lang: ${language}`
  });
});

/**
 * 5. Generate Playlist Structure
 */
app.post("/generate_playlist_structure", (req, res) => {
  const { base_title, language, tone } = req.body;
  res.json({
    structure: `📂 Playlist for ${base_title} (${tone}) [${language}] → 30min | 1h | 2h | 3h | 8h`
  });
});

/**
 * 6. Generate Thumbnail Prompt
 */
app.post("/generate_thumbnail_prompt", (req, res) => {
  const { scene, palette, style, aspect_ratio, language } = req.body;
  res.json({
    result: `🖼 Thumbnail → Scene: ${scene}, Palette: ${palette}, Style: ${style}, Ratio: ${aspect_ratio}, Lang: ${language}`
  });
});

/**
 * 7. Generate Suno Prompt
 */
app.post("/generate_suno_prompt", (req, res) => {
  const { mood, tempo_bpm, instruments, chords, duration_min, looping, language } = req.body;
  res.json({
    result: `🎵 Suno → Mood: ${mood}, Tempo: ${tempo_bpm}, Instruments: ${instruments}, Chords: ${chords}, Duration: ${duration_min}min, Looping: ${looping}, Lang: ${language}`
  });
});

/**
 * 8. Generate Metadata
 */
app.post("/generate_metadata", (req, res) => {
  const { title, description, hashtags, duration, hour, category } = req.body;
  res.json({
    metadata: { title, description, hashtags, duration, hour, category }
  });
});

/**
 * 9. Generate Keywords
 */
app.post("/generate_keywords", (req, res) => {
  const { video_theme, duration, languages } = req.body;
  res.json({
    result: `🔑 Keywords → Theme: ${video_theme}, Duration: ${duration}, Languages: ${languages.join(", ")}`
  });
});

/**
 * 10. Generate Hashtags
 */
app.post("/generate_hashtags", (req, res) => {
  const { topic, language, platform } = req.body;
  res.json({
    result: `#️⃣ Hashtags for ${topic} [${language}] on ${platform}`
  });
});

/**
 * 11. Generate Comment CTA
 */
app.post("/generate_comment_cta", (req, res) => {
  const { platform, tone, context, language } = req.body;
  res.json({
    result: `💬 CTA → Platform: ${platform}, Tone: ${tone}, Context: ${context}, Lang: ${language}`
  });
});

/**
 * 12. Generate Facebook Caption
 */
app.post("/generate_facebook_caption", (req, res) => {
  const { video_title, theme, target_audience, style, include_hashtags, language } = req.body;
  res.json({
    result: `📘 FB Caption → ${video_title} (${theme}) → Audience: ${target_audience}, Style: ${style}, Hashtags: ${include_hashtags}, Lang: ${language}`
  });
});

/**
 * 13. Generate Instagram Caption
 */
app.post("/generate_instagram_caption", (req, res) => {
  const { theme, duration, style, cta, language } = req.body;
  res.json({
    result: `📸 IG Caption → Theme: ${theme}, Duration: ${duration}, Style: ${style}, CTA: ${cta}, Lang: ${language}`
  });
});

/**
 * 14. Generate Reel Caption
 */
app.post("/generate_reel_caption", (req, res) => {
  const { reel_topic, emotion, cta, style, language } = req.body;
  res.json({
    result: `🎞 Reel → Topic: ${reel_topic}, Emotion: ${emotion}, CTA: ${cta}, Style: ${style}, Lang: ${language}`
  });
});

/**
 * 15. Generate Multi-Platform Caption
 */
app.post("/generate_multi_platform_caption", (req, res) => {
  const { video_title, video_description, platform, tone } = req.body;
  res.json({
    result: `🌍 Multi-Caption → ${video_title} | ${video_description} | Platform: ${platform}, Tone: ${tone}`
  });
});

/**
 * 16. Generate Podcast Description
 */
app.post("/generate_podcast_description", (req, res) => {
  const { title, duration, language } = req.body;
  res.json({
    result: `🎙 Podcast → ${title}, Duration: ${duration}, Lang: ${language}`
  });
});

/**
 * 17. Generate Brand Voice
 */
app.post("/generate_brand_voice", (req, res) => {
  const { language, output_type } = req.body;
  res.json({
    result: `🗣 Brand Voice → Lang: ${language}, Type: ${output_type}`
  });
});

/**
 * 18. Spotify Upload Helper
 */
app.post("/spotify_upload_helper", (req, res) => {
  const { track_title, language, mood_tags, release_date, duration_minutes } = req.body;
  res.json({
    result: `🎧 Spotify Upload → ${track_title}, Mood: ${mood_tags.join(", ")}, Release: ${release_date}, Duration: ${duration_minutes}min, Lang: ${language}`
  });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));