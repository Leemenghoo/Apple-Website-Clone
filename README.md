# Apple Website Clone 🍎
A responsive, pixel-perfect replica of the Apple website (Holiday 2024/2025 theme). This project recreates the core visual experience of apple.com, featuring complex navigation, interactive carousels, and video integration using vanilla JavaScript and Tailwind CSS.

🚀 Live Demo
https://leemenghoo.github.io/Apple-Clone-Website/

✨ Key Features
Responsive Navigation Bar:

Desktop: Full-width dropdown menus with smooth fade/slide transitions and a backdrop blur overlay (navbar.js).

Mobile: Collapsible hamburger menu with smooth slide animations.

Auto-Hide: The navbar intelligently hides when scrolling down and reappears when scrolling up.

Custom Infinite Carousels:

Built from scratch in script.js (no external slider libraries).

Entertainment Section: Supports infinite scrolling with cloned items for a seamless loop.

"More from Apple" Section: Features auto-playing video previews when items are active.

Responsive sizing that adapts the number of visible items based on screen width.

Modern UI/UX:

Replicates Apple's "SF Pro" typography and clean aesthetic.

Uses Tailwind CSS for responsive grids, flexbox layouts, and typography.

Includes specific pages for Home and Support.

🛠️ Technologies Used
HTML5: Semantic structure for accessibility.

CSS3 & Tailwind CSS: Styling is handled via the Tailwind CDN for rapid development, plus a custom style.css for specific animations and scrollbar hiding.

Vanilla JavaScript:

script.js: Handles data injection, carousel logic, and media playback.

navbar.js: Manages menu interactions, hover states, and overlay effects.

📂 Project Structure
Plaintext

├── index.html       # Main landing page (Holiday hero, promos, carousels)
├── support.html     # Support page (Search, repair options, device grid)
├── tv&home.html     # TV & Home page
├── style.css        # Custom overrides and font imports
├── script.js        # Logic for the dynamic carousels and data rendering
├── navbar.js        # Logic for the responsive navigation bar
└── img/             # Folder containing product images and icons
⚡ How to Run
Clone the repository:

Bash

git clone https://git.clp.kr/anbschool/4th/generont/phat-lymeng/apple-clone-website.git
Open the project: Simply open the index.html file in any modern web browser. (Note: Since Tailwind is loaded via CDN, you need an active internet connection to see the styles correctly).