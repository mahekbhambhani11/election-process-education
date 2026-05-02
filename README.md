# Election Process Assistant 🗳️

An interactive and educational web application designed to help users understand the election processes, timelines, and procedures of different countries in an easy-to-follow way. 

## Features 🚀

- **Dynamic Country Selection:** Choose between the United States, India, and the United Kingdom to learn about their specific democratic processes.
- **Interactive Timeline:** A visually appealing, step-by-step timeline of the election process (from registration to election day and results).
- **In-Depth Information:** Click on any step in the timeline to read detailed descriptions and access official government links for more context.
- **Smart Chat Assistant:** A built-in, floating mock-AI chat widget that answers user questions instantly by intelligently matching keywords against the selected country's election data and FAQs.
- **Premium UI:** Built with a modern, responsive design using custom CSS, smooth animations, and clear typography (Inter font).

## Technology Stack 💻

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Custom Design System)
- **Icons:** Lucide React

## Getting Started 🛠️

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahekbhambhani11/election-process-education.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd election-process-education
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal).

## How It Works 🧠

This application operates entirely on the client side. The data for the different election processes (US, India, UK) is stored locally within the `src/data/electionData.js` file. The Chat Assistant utilizes a lightweight, custom keyword-matching algorithm (`src/utils/chatLogic.js`) to parse user queries, strip out stop-words, and score the remaining keywords against the timeline descriptions and FAQ data to provide relevant, immediate answers.

## License 📄
This project is open-source and available for educational purposes.