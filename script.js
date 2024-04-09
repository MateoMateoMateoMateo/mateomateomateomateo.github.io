// Load previous poll results from JSON file
let pollResults = {};

function loadPollResults() {
  fetch('poll_results.json')
    .then(response => response.json())
    .then(data => {
      pollResults = data;
    })
    .catch(error => {
      console.error('Error loading poll results:', error);
    });
}

// Save poll results to JSON file
function savePollResults() {
  fetch('poll_results.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pollResults)
  })
  .catch(error => {
    console.error('Error saving poll results:', error);
  });
}

// Function to handle voting
function vote(option) {
  if (option === 'Yes') {
    pollResults['Yes'] = (pollResults['Yes'] || 0) + 1;
  } else if (option === 'No') {
    pollResults['No'] = (pollResults['No'] || 0) + 1;
  }

  // Update UI or perform any necessary actions after voting
  console.log('Voted:', option);

  // Save poll results
  savePollResults();
}

// Load poll results when the page is loaded
loadPollResults();

// Simple Number Guessing Game
let randomNumber;
let attempts = 0;
let guessedCorrectly = false;

function guessNumber() {
  const guess = parseInt(prompt('Guess a number between 1 and 100:'));

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts!`);
    guessedCorrectly = true;
  } else if (guess < randomNumber) {
    alert('Too low! Try again.');
  } else {
    alert('Too high! Try again.');
  }

  if (!guessedCorrectly) {
    guessNumber();
  }
}

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessedCorrectly = false;
  guessNumber();
}
