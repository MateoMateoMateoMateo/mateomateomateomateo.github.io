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
