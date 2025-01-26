// Simulate backend functionality
const levels = {
    "Match the Following": {
      instructions: "Pair the Gen Z slang with its correct meaning!",
      questions: [
        { slang: "yeet", meaning: "to throw something" },
        { slang: "simp", meaning: "someone who does too much for their crush" },
        { slang: "sus", meaning: "acting suspicious" },
      ],
    },
    "Error Detection": {
      instructions: "Spot the mistakes in these slang sentences!",
      questions: [
        "This vibe is busin'. (Error: incorrect spelling of 'bussin')",
        "He yeeted the ball perfectly. (Correct)",
      ],
    },
    "Debating": {
      instructions: "Debate topics on Gen Z slang and justify their usage!",
      topics: [
        "Is 'simp' positive or negative?",
        "Should 'bussin' only be used for food?",
      ],
    },
  };
  
  // Dynamic rendering for levels
  function startLevel(level) {
    const levelData = levels[level];
  
    if (!levelData) {
      alert("Sorry, this level is not ready yet!");
      return;
    }
  
    // Clear the page content
    document.body.innerHTML = `
      <h1>${level} 🚀</h1>
      <p>${levelData.instructions}</p>
      <div id="content"></div>
      <button onclick="goBack()">🔙 Back to Menu</button>
    `;
  
    const contentDiv = document.getElementById("content");
  
    if (level === "Match the Following") {
      levelData.questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
          <p><strong>${index + 1}:</strong> ${q.slang} - _______</p>
          <input type="text" placeholder="Type the meaning here..." id="answer-${index}">
        `;
        contentDiv.appendChild(questionDiv);
      });
    } else if (level === "Error Detection") {
      levelData.questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p><strong>${index + 1}:</strong> ${question}</p>`;
        contentDiv.appendChild(questionDiv);
      });
    } else if (level === "Debating") {
      levelData.topics.forEach((topic, index) => {
        const topicDiv = document.createElement("div");
        topicDiv.innerHTML = `<p><strong>${index + 1}:</strong> ${topic}</p>`;
        contentDiv.appendChild(topicDiv);
      });
    }
  }
  
  // Function to return to the main menu
  function goBack() {
    location.reload(); // Reloads the page to the original state
  }
  
  // Update daily challenges storage
  function loadDailyChallenges() {
    const storedWords = JSON.parse(localStorage.getItem("dailyWords"));
    const wordsDiv = document.getElementById("words");
  
    const dailyWords = storedWords || [
      "yeet - to throw something",
      "simp - someone who does too much for their crush",
      "sus - acting suspicious",
      "vibe - the mood or atmosphere",
      "bussin - really good or delicious",
    ];
  
    dailyWords.forEach((word) => {
      const wordElement = document.createElement("p");
      wordElement.classList.add("daily-word");
      wordElement.textContent = word;
      wordsDiv.appendChild(wordElement);
    });
  
    // Save daily words in localStorage
    if (!storedWords) {
      localStorage.setItem("dailyWords", JSON.stringify(dailyWords));
    }
  }
  
  // Load the daily challenges on page load
  loadDailyChallenges();
  