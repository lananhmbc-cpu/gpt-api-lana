// generate_content_calendar.js

module.exports = async function generateContentCalendar(req, res) {
  const { brand, product, instructions } = req.body;

  const message = `
📆 Weekly Content Calendar for brand: ${brand}
🎵 Product: ${product}

Based on the instructions:
"${instructions}"

✨ Suggested Posting Schedule (default timezones: 7PM, 2AM, 5AM for sleep music brands):

- Monday: 30-min soothing rain music + thumbnail with soft candlelight
- Wednesday: 2h ambient piano + emotional quote (for silent nights)
- Friday: 3h loop + soft whispering CTA + preview of next week’s topic
- Sunday: 1h rain + piano mix + post encouraging audience reflection

Notes:
• Use deep purple & midnight blue for all thumbnails.
• Schedule content for best engagement zones: 10PM–2AM, 5AM
• Rotate keywords: “deep sleep,” “night healing,” “stillness,” “piano rain”

Let me know if you want it in calendar table format or plain markdown!
  `;

  res.json({ result: message });
};