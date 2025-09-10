# Still Awake • Creator Assistant API

You are a creative assistant for **Lana**, creator of the YouTube brand **"Still Awake • with Lana"**, a cinematic sleep & healing music project using deep storytelling and midnight aesthetics.

This repo contains **17 modular JSON files** that define API actions callable from GPTs (custom GPT assistant) to automate music content creation.

---

## 🧠 Brand Identity

- 🎨 **Colors**: Midnight Blue • Deep Purple • Moonlight Yellow  
- 🎼 **Style**: Dreamy • Emotional • Healing • Cinematic • Whispery  
- 🎯 **Keywords**: sleep music, healing, insomnia, piano, ambient, rain, deep rest  

---

## ✅ List of JSON Actions (used in GPTs)

| # | File Name | Description | Status |
|--|-----------|-------------|--------|
| 1 | `generate_title.json` | 🎵 Generate poetic YouTube titles | ✅ Done |
| 2 | `generate_description.json` | 📝 Write descriptions for tracks | ✅ Done |
| 3 | `generate_hashtags.json` | #️⃣ Create SEO hashtags | ✅ Done |
| 4 | `generate_comment_cta.json` | 💬 YouTube comments & CTA | ✅ Done |
| 5 | `generate_facebook_caption.json` | 📝 Facebook captions | ✅ Done |
| 6 | `generate_instagram_caption.json` | 📷 Instagram captions | ✅ Done |
| 7 | `generate_reel_caption.json` | 📱 Reel / short captions | ✅ Done |
| 8 | `generate_playlist_structure.json` | 📁 Playlist structure planner | ✅ Done |
| 9 | `generate_brand_voice.json` | 🎙 Define brand tone | ✅ Done |
|10 | `generate_podcast_description.json` | 🎧 Podcast descriptions | ✅ Done |
|11 | `generate_suno_prompt.json` | 🎵 Music prompts for Suno | ✅ Done |
|12 | `generate_thumbnail_prompt.json` | 🖼 Thumbnail design prompts | ✅ Done |
|13 | `generate_video_prompt.json` | 🎥 Video generation prompts | ❌ Missing |
|14 | `generate_multi_platform_caption.json` | 📢 Multi-platform captions | ❌ Missing |
|15 | `generate_metadata.json` | 📌 General content metadata | ❌ Missing |
|16 | `generate_keywords.json` | 🔍 Keyword suggestions | ❌ Missing |
|17 | `spotify_upload_helper.json` | 📤 Upload guide for Spotify | ✅ Done |

---

## 🚀 How to Use

This repo is designed to be connected to:
- [Custom GPTs](https://chat.openai.com/gpts)
- [n8n](https://n8n.io/) or [Make](https://www.make.com/) (automation)
- [Render](https://render.com/) / [Glitch](https://glitch.com/) / [Replit](https://replit.com/) for API hosting

You can call these JSON endpoints from GPT or external workflows to:
- Create content automatically (titles, descriptions, thumbnails)
- Sync metadata with YouTube, Spotify, and social media
- Keep content tone consistent with the brand

---

## 📌 Status

**Last updated**: 2025-09-10  
**Maintained by**: Lana & AI team ✨

---

## 💡 Next Steps

- [ ] Create missing JSON files (video prompt, metadata, etc.)
- [ ] Build a public Render API endpoint
- [ ] Connect with GPTs + n8n for automation

