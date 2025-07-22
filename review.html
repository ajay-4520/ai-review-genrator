  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Review Generator</title>
  <style>
    /* Global Styling */
    body {
      font-family: Arial, sans-serif;
      background: #efe9e9;
      color: rgb(1, 1, 1);
      padding: 100px 20px 20px; /* top padding to make space for slideshow */
    }

    .container {
      max-width: 700px;
      margin: 0 auto;
      border: 2px solid #444;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }

    textarea, input, select {
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
    }

    button {
      margin: 10px 5px;
      padding: 10px 20px;
      font-size: 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .output {
      margin-top: 20px;
      padding: 15px;
      background: hsl(0, 0%, 100%);
      color: #0c0c0c;
      border-radius: 8px;
      white-space: pre-wrap;
    }

    .saved-review {
      background: #f9f9f9;
      padding: 10px;
      margin-top: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    .logout {
      float: right;
      background: crimson;
    }

    .review-actions {
      margin-top: 20px;
    }

    .email-display {
      float: left;
      font-size: 14px;
      color: #555;
    }

    /* 🔁 Slideshow Styles */
    .slideshow-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: #ffffff;
      overflow: hidden;
      z-index: 10;
      border-bottom: 1px solid #eee;
    }

    .slideshow-track {
      display: flex;
      width: max-content;
      gap: 30px;
      animation: scrollLoop 80s linear infinite;
      align-items: center;
      padding: 0 20px;
    }

    .slideshow-track img {
      height: 50px;
      flex-shrink: 0;
      opacity: 0.8;
      transition: transform 0.3s ease;
    }

    .slideshow-track img:hover {
      transform: scale(1.1);
      opacity: 1;
    }

    @keyframes scrollLoop {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  </style>
</head>

<body>

  <!-- 🔁 Slideshow -->
  <div class="slideshow-wrapper">
    <div class="slideshow-track">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon">
      <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" alt="Flipkart">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart">
      <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Payment">
      <img src="https://cdn-icons-png.flaticon.com/512/1049/1049856.png" alt="Bag">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Shop">
      <img src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png" alt="Mobile">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="Store">

      <!-- Repeat for infinite effect -->
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon">
      <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" alt="Flipkart">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart">
      <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Payment">
      <img src="https://cdn-icons-png.flaticon.com/512/1049/1049856.png" alt="Bag">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Shop">
      <img src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png" alt="Mobile">
      <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="Store">
    </div>
  </div>

  <div class="container">
    <h2>AI Product Review Generator</h2>

    <div class="email-display" id="userEmailDisplay"></div>
    <button class="logout" onclick="logout()">Logout</button>

    <div>
      <input type="text" id="productName" placeholder="Enter Product Name">
      <input type="number" id="rating" min="1" max="5" placeholder="Enter Rating (1-5)">
      <select id="tone">
        <option value="professional">Professional</option>
        <option value="friendly">Friendly</option>
        <option value="funny">Funny</option>
        <option value="technical">Technical</option>
        <option value="custom">Custom</option>
      </select>
      <textarea id="customTone" style="display:none;" placeholder="Enter your custom tone style..."></textarea>
      <button onclick="generateReview()">Generate Review</button>
    </div>

    <div class="output" id="reviewOutput"></div>

    <div class="review-actions">
      <button onclick="copyReview()">Copy</button>
      <button onclick="saveReview()">Save</button>
      <button onclick="downloadReview()">Download</button>
    </div>

    <div>
      <h3>Saved Reviews</h3>
      <div id="savedReviewsList"></div>
    </div>
  </div>

  <script>
    function logout() {
      localStorage.removeItem("userEmail");
      window.location.href = "index.html";
    }

    window.onload = () => {
      const email = localStorage.getItem("userEmail");
      if (!email) {
        alert("You must be logged in.");
        window.location.href = "index.html";
      }

      document.getElementById("userEmailDisplay").innerText = "Logged in as: " + email;
      loadSavedReviews();

      document.getElementById("tone").addEventListener("change", function () {
        const isCustom = this.value === "custom";
        document.getElementById("customTone").style.display = isCustom ? "block" : "none";
      });
    };

    function generateReview() {
      const product = document.getElementById("productName").value.trim();
      const rating = document.getElementById("rating").value;
      const tone = document.getElementById("tone").value;
      const customTone = document.getElementById("customTone").value.trim();

      if (!product || !rating || rating < 1 || rating > 5) {
        alert("Please enter valid product name and rating between 1 to 5.");
        return;
      }

      const templates = {
        professional: `The ${product} is a high-quality product that exceeded my expectations. Based on my experience, I would rate it ${rating} out of 5. Highly recommended for professionals.`,
        friendly: `Hey there! I just tried the ${product}, and honestly, I loved it! I'd give it a solid ${rating} stars. Totally worth it!`,
        funny: `The ${product} made me feel like a tech wizard. 10/10 would use again... but okay fine, ${rating}/5 officially.`,
        technical: `After thorough testing, the ${product} performed consistently across multiple benchmarks. I’d confidently assign it a rating of ${rating} out of 5.`,
        custom: customTone || "Custom tone not provided."
      };

      const review = templates[tone] || "Review tone not found.";
      document.getElementById("reviewOutput").innerText = review;

      document.getElementById("productName").value = "";
      document.getElementById("rating").value = "";
      document.getElementById("tone").value = "professional";
      document.getElementById("customTone").value = "";
      document.getElementById("customTone").style.display = "none";
    }

    function copyReview() {
      const text = document.getElementById("reviewOutput").innerText;
      if (!text) return alert("Nothing to copy.");
      navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Failed to copy!"));
    }

    function saveReview() {
      const review = document.getElementById("reviewOutput").innerText;
      if (!review) return alert("Nothing to save.");

      const email = localStorage.getItem("userEmail");
      const key = `savedReviews_${email}`;

      const savedReviews = JSON.parse(localStorage.getItem(key)) || [];
      savedReviews.push(review);
      localStorage.setItem(key, JSON.stringify(savedReviews));

      loadSavedReviews();
      alert("Review saved.");
    }

    function loadSavedReviews() {
      const list = document.getElementById("savedReviewsList");
      list.innerHTML = "";

      const email = localStorage.getItem("userEmail");
      const key = `savedReviews_${email}`;
      const reviews = JSON.parse(localStorage.getItem(key)) || [];

      reviews.forEach((r, i) => {
        const div = document.createElement("div");
        div.className = "saved-review";
        div.innerText = `${i + 1}. ${r}`;
        list.appendChild(div);
      });
    }

    function downloadReview() {
      const review = document.getElementById("reviewOutput").innerText;
      if (!review) return alert("Nothing to download.");

      const blob = new Blob([review], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "review.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
  </script>
</body>
</html>
