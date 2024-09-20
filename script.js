let teamAName = localStorage.getItem('teamAName') || 'Team A';
let teamBName = localStorage.getItem('teamBName') || 'Team B';
let scoreA = parseInt(localStorage.getItem('scoreA')) || 0;
let scoreB = parseInt(localStorage.getItem('scoreB')) || 0;

// Function to update team names
function updateTeamNames() {
    document.getElementById('teamANameDisplay').textContent = teamAName;
    document.getElementById('teamBNameDisplay').textContent = teamBName;
}

function updateScores() {
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
}

function increaseScore(team, points) {
    if (team === 'A') {
        scoreA += points;
        localStorage.setItem('scoreA', scoreA);
    } else if (team === 'B') {
        scoreB += points;
        localStorage.setItem('scoreB', scoreB);
    }
    updateScores();
}

function decreaseScore(team, points) {
    if (team === 'A' && scoreA - points >= 0) {
        scoreA -= points;
        localStorage.setItem('scoreA', scoreA);
    } else if (team === 'B' && scoreB - points >= 0) {
        scoreB -= points;
        localStorage.setItem('scoreB', scoreB);
    }
    updateScores();
}

function resetScores() {
    let userConfirmed = confirm('Are you sure you want to reset the scores?');
    if (userConfirmed) {
        scoreA = 0;
        scoreB = 0;
        localStorage.setItem('scoreA', scoreA);
        localStorage.setItem('scoreB', scoreB);
        updateScores();
    }
}

// Event listeners for input changes in admin.html
document.getElementById('teamANameInput')?.addEventListener('input', function(event) {
    teamAName = event.target.value;
    localStorage.setItem('teamAName', teamAName);
    updateTeamNames();
});

document.getElementById('teamBNameInput')?.addEventListener('input', function(event) {
    teamBName = event.target.value;
    localStorage.setItem('teamBName', teamBName);
    updateTeamNames();
});

// Event listener for storage changes
window.addEventListener('storage', function(event) {
    if (event.key === 'teamAName') {
        teamAName = event.newValue;
        document.getElementById('teamANameDisplay').textContent = teamAName;
    } else if (event.key === 'teamBName') {
        teamBName = event.newValue;
        document.getElementById('teamBNameDisplay').textContent = teamBName;
    } else if (event.key === 'scoreA') {
        scoreA = parseInt(event.newValue);
        document.getElementById('scoreA').textContent = scoreA;
    } else if (event.key === 'scoreB') {
        scoreB = parseInt(event.newValue);
        document.getElementById('scoreB').textContent = scoreB;
    }
});

// Initial update of team names and scores
updateTeamNames();
updateScores();
