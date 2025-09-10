
# 🌙 Still Awake • Creator Assistant API

This is the official API project for the **Still Awake • with Lana** creative assistant — a cinematic sleep & healing music brand. This API enables GPTs, automation tools (Make, n8n), and other systems to programmatically generate content assets such as song titles, descriptions, thumbnails, hashtags, metadata, and more.

## 🎯 Purpose

The assistant helps Lana create and automate soothing night music content across platforms like YouTube, Spotify, Instagram, Facebook, TikTok, etc. It supports seamless collaboration between humans and AI for high-quality, emotionally resonant media.

---

## 🧠 API Features – 17 Action Files

Each action is defined in a separate `.json` file and listed in `openapi.yaml`.

| No. | Action ID                        | Purpose                                        | Status |
|-----|----------------------------------|------------------------------------------------|--------|
| 1   | `generate_title.json`           | 🎵 Generate poetic SEO-friendly song titles     | ✅      |
| 2   | `generate_description.json`     | 📝 Write soothing video descriptions            | ✅      |
| 3   | `generate_thumbnail_prompt.json`| 🖼 Prompt to generate cinematic thumbnails       | ✅      |
| 4   | `generate_suno_prompt.json`     | 🎶 Prompt to create music with Suno             | ✅      |
| 5   | `generate_video_prompt.json`    | 🎥 Prompt to create video (Dreamnima/Veo3)      | ✅      |
| 6   | `generate_comment_cta.json`     | 💬 Generate whisper-style comments + CTA        | ✅      |
| 7   | `generate_facebook_caption.json`| 📘 Caption for Facebook (merged version)        | ✅      |
| 8   | `generate_instagram_caption.json`| 📸 Caption for Instagram                        | ✅      |
| 9   | `generate_reel_caption.json`    | 🎞 Caption for short-form reels (TikTok/YT)     | ✅      |
| 10  | `generate_multi_platform_caption.json` | 🧩 Unified caption for multi-platforms    | ✅      |
| 11  | `generate_hashtags.json`        | #️⃣ Generate SEO hashtags (EN/VI)               | ✅      |
| 12  | `generate_metadata.json`        | 🗂 Generate full metadata for each track/video  | ✅      |
| 13  | `generate_keywords.json`        | 🔍 Generate keyword lists from content          | ✅      |
| 14  | `generate_playlist_structure.json` | 📻 Generate playlist structure by hour       | ✅      |
| 15  | `generate_podcast_description.json` | 🎧 Write healing podcast descriptions        | ✅      |
| 16  | `spotify_upload_helper.json`    | 📤 Helps auto-fill Spotify upload info          | ✅      |
| 17  | `generate_brand_voice.json`     | 🧬 Describes brand tone, values, voice          | ✅      |

---

## 🔗 Endpoints (OpenAPI Spec)

The entire schema is defined in [`openapi.yaml`](./openapi.yaml).  
Each action is a `POST` endpoint receiving a request body of user input and responding with generated content.

---

## 🚀 Example Use Cases

- GPT-based assistants like: `Still Awake Creator GPT`
- YouTube Thumbnail automation via Dreamnima / CapCut
- n8n / Make workflows to chain: `GPT → Suno → Canva → Upload`
- Instagram & TikTok captions auto-synced
- Audio metadata standardization
- Spotify upload helpers

---

## 📁 Project Structure
---

## 🧠 Brand Essence: Still Awake • with Lana

> "You’re not alone tonight. Lana is awake with you."

A cinematic journey into healing, silence, and soulful rest — expressed through music, rain, whispers, and color.

---

## 💡 Next Steps

- [ ] ✅ Upload all `.json` files + `openapi.yaml` to GitHub repo
- [ ] ⬆ Deploy the API via Glitch / Render (with CORS enabled)
- [ ] ⚙ Connect with GPT Actions / n8n / Make / Canva

---

## 🌙 License

MIT License — freely share & remix with credit to **Still Awake • with Lana**
# 🌙 Still Awake • Trợ Lý Sáng Tạo (API)

Đây là dự án API chính thức hỗ trợ thương hiệu **Still Awake • with Lana** – nơi kết hợp âm nhạc chữa lành, đêm trăng yên tĩnh, cảm xúc sâu lắng và giấc ngủ bình an.  
API này cho phép GPTs, Make, n8n, hoặc các nền tảng tự động khác tạo nội dung sáng tạo chuyên sâu như tiêu đề nhạc, mô tả video, thumbnail, hashtag, metadata và nhiều hơn nữa.

---

## 🎯 Mục Đích

Tự động hoá toàn bộ quy trình sáng tạo và đăng tải của Lana: từ viết nội dung, tạo thumbnail, caption, tới nhạc và mô tả podcast – tất cả đều theo phong cách điện ảnh, chữa lành, cảm xúc đêm.

---

## 🧠 17 Hành Động API (Actions)

Mỗi hành động được mô tả trong một file `.json` riêng biệt, tích hợp đầy đủ trong `openapi.yaml`.

| STT | Tên Hành Động                        | Mô Tả                                         | Trạng Thái |
|-----|--------------------------------------|-----------------------------------------------|------------|
| 1   | `generate_title.json`               | 🎵 Tạo tiêu đề bài nhạc theo phong cách thơ và SEO | ✅ |
| 2   | `generate_description.json`         | 📝 Viết mô tả video nhẹ nhàng, cảm xúc          | ✅ |
| 3   | `generate_thumbnail_prompt.json`    | 🖼 Tạo prompt ảnh thumbnail nghệ thuật           | ✅ |
| 4   | `generate_suno_prompt.json`         | 🎶 Tạo prompt nhạc bằng Suno                    | ✅ |
| 5   | `generate_video_prompt.json`        | 🎥 Prompt tạo video (Dreamnima / Veo3)          | ✅ |
| 6   | `generate_comment_cta.json`         | 💬 Tạo bình luận & lời kêu gọi hành động cảm xúc| ✅ |
| 7   | `generate_facebook_caption.json`    | 📘 Caption cho Facebook                         | ✅ |
| 8   | `generate_instagram_caption.json`   | 📸 Caption cho Instagram                        | ✅ |
| 9   | `generate_reel_caption.json`        | 🎞 Caption cho video ngắn (Reels/TikTok)        | ✅ |
| 10  | `generate_multi_platform_caption.json`| 🧩 Caption dùng chung đa nền tảng             | ✅ |
| 11  | `generate_hashtags.json`            | #️⃣ Sinh hashtag SEO tiếng Việt & Anh          | ✅ |
| 12  | `generate_metadata.json`            | 🗂 Sinh metadata đầy đủ cho bài nhạc / video    | ✅ |
| 13  | `generate_keywords.json`            | 🔍 Tạo keyword phù hợp với nội dung              | ✅ |
| 14  | `generate_playlist_structure.json`  | 📻 Cấu trúc playlist theo giờ/khung cảm xúc     | ✅ |
| 15  | `generate_podcast_description.json` | 🎧 Viết mô tả podcast chữa lành                 | ✅ |
| 16  | `spotify_upload_helper.json`        | 📤 Gợi ý thông tin upload Spotify                | ✅ |
| 17  | `generate_brand_voice.json`         | 🧬 Mô tả giọng điệu thương hiệu “Still Awake”   | ✅ |

---

## 🔗 Tài liệu OpenAPI

Tất cả schema và endpoint đều được mô tả chi tiết trong file [`openapi.yaml`](./openapi.yaml).  
Mỗi hành động là một API `POST`, nhận đầu vào dạng text và trả về kết quả dạng nội dung đã sinh.

---

## 🚀 Các Ứng Dụng Thực Tế

- GPT Assistant: dùng hành động API để viết và gợi ý nội dung
- Kết nối Make/n8n để tạo chuỗi tự động:
  `GPT → Suno → Canva → YouTube/Spotify`
- Caption + mô tả + metadata đồng bộ trên Facebook, TikTok, YouTube
- Upload nội dung chuyên sâu nhanh chóng, chuyên nghiệp

---

## 📁 Cấu Trúc Thư Mục
📦 still-awake-api
┣ 📜 openapi.yaml
┣ 📜 README.md
┣ 📁 actions/
┃ ┣ 📄 generate_title.json
┃ ┣ 📄 generate_description.json
┃ ┣ 📄 generate_thumbnail_prompt.json
┃ ┣ 📄 generate_suno_prompt.json
┃ ┣ 📄 generate_video_prompt.json
┃ ┣ 📄 generate_comment_cta.json
┃ ┣ 📄 generate_facebook_caption.json
┃ ┣ 📄 generate_instagram_caption.json
┃ ┣ 📄 generate_reel_caption.json
┃ ┣ 📄 generate_multi_platform_caption.json
┃ ┣ 📄 generate_hashtags.json
┃ ┣ 📄 generate_metadata.json
┃ ┣ 📄 generate_keywords.json
┃ ┣ 📄 generate_playlist_structure.json
┃ ┣ 📄 generate_podcast_description.json
┃ ┣ 📄 spotify_upload_helper.json
┃ ┗ 📄 generate_brand_voice.---

## 🧬 Giá trị thương hiệu Still Awake

> "Bạn không cô đơn trong đêm nay. Lana đang thức cùng bạn."

Một hành trình điện ảnh sâu lắng, an yên, chữa lành – thông qua tiếng piano, tiếng mưa, và lời thì thầm cảm xúc.

---

## 🧩 Hướng dẫn tiếp theo

- [ ] ✅ Tải toàn bộ file `.json` và `openapi.yaml` lên GitHub repo
- [ ] ⬆ Triển khai API thật qua Glitch hoặc Render
- [ ] 🤖 Kết nối với GPT hoặc công cụ automation như Make, n8n

---

## 📜 Giấy phép

Giấy phép MIT — Tự do chia sẻ và chỉnh sửa nếu ghi rõ nguồn gốc:  
**Still Awake • with Lana**




