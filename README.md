🧩 LeetCode Stats Tracker

A simple web app that lets you search any LeetCode username and view their problem-solving statistics — including Easy, Medium, and Hard progress — visualized using animated circular graphs 🎯

🚀 Features

✅ Fetches live user stats using the LeetCode Stats API
✅ Displays progress for Easy / Medium / Hard questions
✅ Smooth circular progress graphs using CSS Conic Gradient
✅ Validates LeetCode usernames before searching
✅ Responsive and minimal UI

🖼️ Preview
🔍 Enter Username → Click “Search”
📊 Instantly see solved counts and graph progress!


Example UI elements:

Easy: Green circle (solved/total)

Medium: Orange circle

Hard: Red circle

🛠️ Tech Stack

HTML5 – Structure

CSS3 (Conic Gradient) – Graph visualization

JavaScript (ES6) – API fetch, validation, and dynamic updates

LeetCode Stats API: https://leetcode-stats-api.herokuapp.com/

⚙️ How It Works

User enters a valid LeetCode username.

JS validates it using a regex pattern:

/^[a-zA-Z0-9](?:[a-zA-Z0-9_-]{1,13}[a-zA-Z0-9])?$/


The app fetches user stats from:

https://leetcode-stats-api.herokuapp.com/<username>


Data such as solved questions, ranking, and acceptance rate are displayed.

Circular progress bars update dynamically using:

circle.style.setProperty("--progress-degree", progressDegree / 100);

📂 Project Structure
📁 LeetCode-Stats-Tracker
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┗ 📜 script.js

💻 JavaScript Highlights
function updateProgress(solved, total, label, circle) {
  const progressDegree = (solved / total) * 100;
  circle.style.setProperty("--progress-degree", progressDegree / 100);
  label.textContent = `${solved}/${total}`;
}

async function fetchUserDetails(username) {
  const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
  const response = await fetch(url);
  const parsedata = await response.json();
  displayUserData(parsedata);
}

🎨 CSS Snippet (Progress Circle)
.easy-progress,
.medium-progress,
.hard-progress {
  --progress-degree: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: conic-gradient(var(--progress-color) calc(var(--progress-degree) * 360deg), #222 0deg);
  transition: background 0.6s ease;
}

.easy-progress { --progress-color: #4caf50; }
.medium-progress { --progress-color: #ff9800; }
.hard-progress { --progress-color: #f44336; }

📈 Example API Response
{
  "status": "success",
  "totalSolved": 32,
  "totalQuestions": 3744,
  "easySolved": 24,
  "totalEasy": 912,
  "mediumSolved": 7,
  "totalMedium": 1949,
  "hardSolved": 1,
  "totalHard": 883,
  "acceptanceRate": 76.92,
  "ranking": 2879643
}

🧠 Author

👨‍💻 Harshit Varshney
🎓 B.Tech CSE | GLA University
💡 Passionate about UI design, coding, and creative innovation
📺 YouTube: @harshityt822

📷 Instagram: @harshityt_

⭐ Support

If you like this project, give it a star ⭐ on GitHub!
Your support motivates me to build more open-source tools. 🚀
