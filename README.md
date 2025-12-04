# Machine Learning Interactive Quiz

An interactive educational quiz application built with React and Tailwind CSS to test and reinforce Machine Learning concepts across three difficulty levels.

## 🎯 Features

- **Three Difficulty Levels**: Beginner, Intermediate, and Advanced
- **Interactive Feedback**: Immediate visual feedback for answers
- **Hint System**: Contextual hints for each question
- **Progress Tracking**: Real-time score and progress indicators
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations

---

## 🚀 Quick Setup

### Prerequisites

- **Node.js** (v14 or higher) and npm
- A modern web browser (Chrome, Firefox, Safari, or Edge)

---

## 📥 Installation

### For Windows Users

#### Step 1: Install Node.js (One-time setup)

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS version** (green button on left)
3. Run the installer
4. Click "Next" through all steps (keep default settings)
5. Click "Finish"
6. **Restart your computer**

#### Step 2: Download the Project

**Option A: Download ZIP (Easiest)**

1. Go to [https://github.com/areejfatimah7/Learning-Object](https://github.com/areejfatimah7/Learning-Object)
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP file to your Desktop
5. Rename the folder from `Learning-Object-main` to `Learning-Object`

**Option B: Using Git**
```bash
cd Desktop
git clone https://github.com/areejfatimah7/Learning-Object.git
```

#### Step 3: Open Command Prompt in Project Folder

1. Open File Explorer
2. Navigate to Desktop → `Learning-Object` folder
3. Click on the address bar at the top
4. Type `cmd` and press Enter
   - This opens Command Prompt directly in your project folder

#### Step 4: Install Dependencies
```bash
npm install
```

- This will take 2-5 minutes
- Wait until you see your folder path again (means it's done)
- You might see some warnings - that's normal

#### Step 5: Run the Application
```bash
npm start
```

- Wait 10-30 seconds
- Your browser will automatically open to `http://localhost:3000`
- You should see the ML Quiz!

---

### For Linux/Ubuntu Users

#### Step 1: Install Node.js (One-time setup)
```bash
sudo apt update
sudo apt install nodejs npm -y
```

**Verify installation:**
```bash
node --version
npm --version
```

#### Step 2: Download the Project

**Option A: Download ZIP**

1. Go to [https://github.com/areejfatimah7/Learning-Object](https://github.com/areejfatimah7/Learning-Object)
2. Click green **"Code"** button → **"Download ZIP"**
3. Extract to Desktop
4. Rename folder to `Learning-Object`

**Option B: Using Git**
```bash
cd ~/Desktop
git clone https://github.com/areejfatimah7/Learning-Object.git
```

#### Step 3: Navigate to Project Folder
```bash
cd ~/Desktop/Learning-Object
```

#### Step 4: Install Dependencies
```bash
npm install
```

Wait for installation to complete (2-5 minutes)

#### Step 5: Run the Application
```bash
npm start
```

- Browser opens automatically to `http://localhost:3000`
- If not, manually open browser and go to: `http://localhost:3000`

---

## 📖 Usage

1. **Select Difficulty Level**: Choose from Beginner, Intermediate, or Advanced
2. **Answer Questions**: Click on your chosen answer
3. **Use Hints**: Click "Show Hint" if you need help
4. **Progress Through Quiz**: Click "Next" after answering each question
5. **View Results**: See your score and personalized feedback at the end
6. **Retry**: Click "Try Another Level" to attempt a different difficulty

---

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for best performance.

### `npm test`

Launches the test runner in interactive watch mode.

---

## 📁 Project Structure
```
Learning-Object/
├── public/              # Static files
│   └── index.html      # HTML template
├── src/
│   ├── App.js          # Main quiz component
│   ├── index.css       # Tailwind CSS directives
│   └── index.js        # Entry point
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # Documentation
```

---

## 🎨 Customization

### Editing Questions

To modify quiz questions:

1. Open `src/App.js` in your text editor
2. Locate the `quizData` object (around line 10)
3. Edit questions, options, correct answers, and hints
4. Save the file - changes will reflect automatically

**Example Question Structure:**
```javascript
{
  question: "What does ML stand for in computer science?",
  options: ["Multiple Logic", "Machine Learning", "Manual Labor", "Memory Load"],
  correct: 1,  // Index: 0=first option, 1=second option, etc.
  hint: "It's a type of artificial intelligence that allows systems to learn from data."
}
```

### Changing Colors

Modify the Tailwind classes in `src/App.js` to change the color scheme.

---

## 🐛 Troubleshooting

### Issue: `npm: command not found` or `node is not recognized`

**Solution:** Install or reinstall Node.js from [https://nodejs.org/](https://nodejs.org/)

### Issue: Port 3000 already in use

**Solution:** Type `y` when prompted to use another port, or manually specify:
```bash
PORT=3001 npm start
```

### Issue: Dependencies installation fails

**Solution:**
```bash
# Delete existing files
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Page shows errors or doesn't load

**Solution:**
```bash
# Stop server (Ctrl+C) and restart
npm start
```

---

## 🎓 Educational Context

This project was developed as a Digital Learning Object for educational purposes. It demonstrates:

- **Engagement**: Gamification, immediate feedback, and progressive difficulty
- **Accessibility**: Clear visual hierarchy, semantic HTML, and responsive design
- **Problem-Solving**: Scaffolded learning through hint-based guidance

---

## 🛡️ Technologies Used

- **React.js** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Create React App** - Build tooling

---

## 🎉 Quick Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Run development server |
| `npm run build` | Create production build |
| `Ctrl + C` | Stop the development server |

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👥 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📧 Contact

**Repository:** [https://github.com/areejfatimah7/Learning-Object](https://github.com/areejfatimah7/Learning-Object)

---

**Made with ❤️ for Machine Learning Education**
