// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import all route handlers
const generateTitle = require('./generate_title');
const generateDescription = require('./generate_description');
const generateCommentCTA = require('./generate_comment_cta');
const generateThumbnailPrompt = require('./generate_thumbnail_prompt');
const generateVideoPrompt = require('./generate_video_prompt');
const generateSunoPrompt = require('./generate_suno_prompt');
const generateFacebookCaption = require('./generate_facebook_caption');
const generateInstagramCaption = require('./generate_instagram_caption');
const generateReelCaption = require('./generate_reel_caption');
const generateMultiPlatformCaption = require('./generate_multi_platform_caption');
const generateKeywords = require('./generate_keywords');
const generateMetadata = require('./generate_metadata');
const generateHashtags = require('./generate_hashtags');
const generatePlaylistStructure = require('./generate_playlist_structure');
const generatePodcastDescription = require('./generate_podcast_description');
const generateBrandVoice = require('./generate_brand_voice');
const spotifyUploadHelper = require('./spotify_upload_helper');
const generateContentCalendar = require('./generate_content_calendar');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Route bindings
app.use('/generate_title', generateTitle);
app.use('/generate_description', generateDescription);
app.use('/generate_comment_cta', generateCommentCTA);
app.use('/generate_thumbnail_prompt', generateThumbnailPrompt);
app.use('/generate_video_prompt', generateVideoPrompt);
app.use('/generate_suno_prompt', generateSunoPrompt);
app.use('/generate_facebook_caption', generateFacebookCaption);
app.use('/generate_instagram_caption', generateInstagramCaption);
app.use('/generate_reel_caption', generateReelCaption);
app.use('/generate_multi_platform_caption', generateMultiPlatformCaption);
app.use('/generate_keywords', generateKeywords);
app.use('/generate_metadata', generateMetadata);
app.use('/generate_hashtags', generateHashtags);
app.use('/generate_playlist_structure', generatePlaylistStructure);
app.use('/generate_podcast_description', generatePodcastDescription);
app.use('/generate_brand_voice', generateBrandVoice);
app.use('/spotify_upload_helper', spotifyUploadHelper);
app.use('/generate_content_calendar', generateContentCalendar);

// Default route
app.get('/', (req, res) => {
  res.send('Still Awake • Creator Assistant API is running.');
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});