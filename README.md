<h1 align="center">🚀 LeetCode Stats Visualizer</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20With-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Style-CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/API-LeetCode-orange?style=for-the-badge&logo=leetcode" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

<p align="center">
  A modern, interactive, and responsive web app that visualizes your <b>LeetCode problem-solving stats</b> in a clean dashboard.  
  Built using <b>HTML, CSS, and Vanilla JavaScript</b> with animated circular progress graphs 🎯
</p>

---

## 🌟 Features

✨ Real-time data fetched from the <a href="https://leetcode-stats-api.herokuapp.com/">LeetCode Stats API</a>  
✨ Username validation with clean UI feedback  
✨ Dynamic circular progress indicators for <b>Easy</b>, <b>Medium</b>, and <b>Hard</b> questions  
✨ Responsive layout for all screen sizes  
✨ Smooth animation and CSS transitions for each difficulty circle  
✨ Displays total solved, acceptance rate, ranking, and more  

---

## 🧠 Tech Stack

| Technology | Usage |
|-------------|--------|
| **HTML5** | Webpage structure |
| **CSS3** | Styling & animations |
| **JavaScript (Vanilla)** | API fetch & DOM updates |
| **LeetCode API** | Data source |

---

## ⚙️ Working Principle

1. User enters a **LeetCode username**  
2. The app validates the username format  
3. Fetches data from the LeetCode API  
4. Dynamically updates stats and circular progress bars  
5. Displays real-time analytics in a clean and modern interface  

---

## 🧾 Core JavaScript

```js
// Update circular progress dynamically
function updateprogress(solved, total, label, circle) {
  const progressDegree = (solved / total) * 100;
  circle.style.setProperty("--progress-degree", progressDegree / 100);
  label.textContent = `${solved}/${total}`;
}

// Fetch user data and display on dashboard
async function fetchUserDetails(username) {
  const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
  try {
    searchButton.textContent = 'Searching...';
    const response = await fetch(url);
    const parsedata = await response.json();
    displayUserData(parsedata);
  } catch (error) {
    statsContainer.innerHTML = `<p>No data found</p>`;
  } finally {
    searchButton.textContent = 'Search';
  }
}
```

## 🎨 Modern CSS Styling
```css
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
  color: #fff;
  font-weight: bold;
  background: conic-gradient(
    var(--progress-color) calc(var(--progress-degree) * 360deg),
    #222 0deg
  );
  transition: background 0.6s ease-in-out;
}

.easy-progress { --progress-color: #4caf50; }
.medium-progress { --progress-color: #ff9800; }
.hard-progress { --progress-color: #f44336; }
```

## 🧩 Example Stats Output

```yaml
Total Solved: 32 / 3744
Easy: 24 / 912
Medium: 7 / 1949
Hard: 1 / 883
Acceptance Rate: 76.92%
Ranking: 2879643
Contribution Points: 76
```



👨‍💻 Author
Harshit Varshney
💻 B.Tech CSE | 🎨 UI Designer | 🎬 YouTuber

⭐ Support & Contributions
If you like this project, please give it a ⭐ star on GitHub — it motivates me to build more open-source projects like this!
Contributions, ideas, and suggestions are always welcome 💡

<p align="center">Built with ❤️ by <b>Harshit Varshney</b></p>
