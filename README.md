# Quizify - Cricket Quiz Application

A command-line based cricket quiz application built with Node.js that tests your knowledge of cricket and maintains a persistent leaderboard.

## Features

- Interactive command-line interface
- Cricket-themed questions covering various aspects of the sport
- Real-time score tracking
- Persistent leaderboard system
- Immediate feedback on answers
- Congratulations message for new high scores

## Prerequisites

Before running the application, make sure you have:

- Node.js installed on your system
- npm (Node Package Manager) installed

## Installation

1. Clone this repository or download the source code
2. Navigate to the project directory
3. Install the required dependencies:

```bash
npm install readline-sync
```

## Usage

1. Start the quiz by running:

```bash
node quizify.js
```

2. Enter your name when prompted
3. Answer each question by typing the letter corresponding to your chosen option
4. View your final score and the updated leaderboard
5. The leaderboard will be automatically saved to `leaderboard.json`

## Game Structure

- The quiz consists of multiple-choice questions about cricket
- Each question has 4 options (a, b, c, d)
- Correct answers earn you 1 point
- Your score is compared against the leaderboard
- The leaderboard is automatically updated and saved

## Leaderboard System

- Scores are persistently stored in `leaderboard.json`
- The leaderboard shows the top scores
- New high scores are celebrated with a congratulatory message
- The leaderboard is automatically sorted by score

## File Structure

- `quizify.js` - Main application file
- `leaderboard.json` - Stores the persistent leaderboard data
- `README.md` - This documentation file

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## License

This project is open source and available under the MIT License.

## Author

Created by Ayush Singh

---

Enjoy testing your cricket knowledge with Quizify! 🏏 