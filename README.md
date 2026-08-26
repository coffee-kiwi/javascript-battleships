# Battleships

## 🌟 Highlights

- A browser-based implementation of the classic Battleship game, created using JavaScript.
- Built with a modular JavaScript structure to separate game logic from the user interface.
- Uses Webpack to manage development and production builds.
- Developed as part of The Odin Project's JavaScript curriculum.
- Focuses on applying object-oriented programming, application logic, DOM manipulation, and testing concepts in a complete interactive project.

## ℹ️ Overview

This project was created as part of the Battleship project from The Odin Project's JavaScript course.

The project demonstrates my ability to take the rules and requirements of a familiar game, break them down into smaller components, and implement the underlying game logic using JavaScript.

A major focus of the project was separating the game logic from the user interface and organising the application into smaller modules with clear responsibilities. This helped me develop a better understanding of application structure, debugging, and maintaining increasingly complex JavaScript projects.

The project also provided practical experience configuring and working with Webpack for both development and production environments.

## 💻 Tech Stack

- **Language:** JavaScript
- **Frontend:** HTML5, CSS3
- **Build Tool:** Webpack
- **Code Quality:** ESLint, Prettier
- **Transpilation:** Babel
- **Version Control:** Git / GitHub

## ✍️ Author

My name is Conor, and I'm an aspiring web developer with an interest in both frontend and backend development.

You can find more about me on:

- My website: https://coffee-kiwi.github.io/
- GitHub: https://github.com/coffee-kiwi

## 🚀 Usage

To run the project locally:

1. Clone the repository:

   git clone https://github.com/coffee-kiwi/javascript-battleships.git

2. Navigate into the project directory:

   cd javascript-battleships

3. Install the required dependencies:

   npm install

4. Start the development server:

   npm run dev

Please check `package.json` for the currently available development and production commands.

## 💭 Feedback and Contributing

Feedback is always welcome.

If you notice a bug, have a suggestion for improving the project, or would like to ask a question about the implementation, please feel free to open an issue on GitHub.

## ⚠️ Challenges and Solutions

### Designing the Ship Placement System

One of the most challenging parts of this project was designing and implementing the ship placement system.

I wanted the player to have multiple intuitive ways to position their ships, including:

- Dragging and dropping ships onto the board
- Clicking a ship and then selecting where to place it
- Previewing the cells a ship would occupy before confirming its position

Getting these different interactions to work together while correctly reflecting the state of the game was one of the most technically challenging parts of the project.

To help work through the problem, I used Claude as a development and learning tool. I asked for suggested approaches to implementing each feature and, importantly, the reasoning behind those approaches. I then used these explanations to understand how the different interactions could be structured and incorporated them into my own implementation.

This process helped me become more comfortable breaking a complicated feature into smaller problems, researching possible solutions, and understanding an approach before applying it to my own code.

### Project Structure and Naming

Another challenge was deciding how to organise the application's modules and files and how to clearly name the different responsibilities within the project.

As the application became larger, keeping the game logic, user interactions, and interface-related functionality organised became increasingly important.

Working through this gave me practical experience thinking about separation of concerns and maintainable project structure.

This is also an area where I believe the project could still be improved. Looking back at the code, I can see opportunities to simplify parts of the structure and make some module and file names clearer.

Recognising these areas for improvement has been a useful part of the learning process and has influenced how I approach the organisation of newer projects.