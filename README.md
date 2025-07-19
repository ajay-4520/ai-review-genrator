# 🧠 AI Product Review Generator

This web application allows users to log in and generate AI-powered product reviews based on product details like name, category, features, pros, cons, and tone.

## 🔐 Login Info
Use the following credentials to log in:
- **Username:** `admin`
- **Password:** `1234`

## 🧩 Features
- Clean login page with password protection.
- Simple, user-friendly UI.
- Enter product info to generate realistic product reviews.
- Choose from tones: Professional, Casual, Enthusiastic, Balanced, Detailed.
- Copy, save, and download generated reviews.
- Review history with star ratings and saved content.

## 📁 File Structure

```
/project-root
│
├── index.html         # Login page with logic to load the app
├── review.html        # Main product review generator UI
├── style.css          # Shared styles for both pages
├── login.js           # Login logic (optional if inline in index.html)
├── review.js          # JS logic for review generation
└── README.md          # Project overview and instructions
```

## 🛠 How to Use

1. Open `index.html` in your browser.
2. Enter the correct login credentials.
3. Fill out the product details form.
4. Click **"Generate Review"** to see the AI response.
5. Save or download the review for later.

## 📌 Notes
- This app uses only HTML, CSS, and JS — no backend.
- For offline use; no API calls or server required.