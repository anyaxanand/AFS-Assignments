let score = {
  1: { runs: 0, wickets: 0, balls: 0 },
  2: { runs: 0, wickets: 0, balls: 0 }
};

function getTeam() {
  return document.getElementById("teamSelect").value;
}

function updateDisplay() {
  for (let i = 1; i <= 2; i++) {
    document.getElementById(`runs${i}`).textContent = score[i].runs;
    document.getElementById(`wickets${i}`).textContent = score[i].wickets;
    document.getElementById(`balls${i}`).textContent = score[i].balls;
  }
}

function addRun(runs) {
  let t = getTeam();
  score[t].runs += runs;
  updateDisplay();
}

function addBall() {
  let t = getTeam();
  score[t].balls += 1;
  updateDisplay();
}

function addWide() {
  let t = getTeam();
  score[t].runs += 1;
  // Wide ball does not count as a legal ball
  updateDisplay();
}

function addNoBall() {
  let t = getTeam();
  score[t].runs += 1;
  // No-ball does not count as a legal ball
  updateDisplay();
}

function addWicket() {
  let t = getTeam();
  if (score[t].wickets < 10) {
    score[t].wickets += 1;
    score[t].balls += 1;
  }
  updateDisplay();
}

function resetGame() {
  score = {
    1: { runs: 0, wickets: 0, balls: 0 },
    2: { runs: 0, wickets: 0, balls: 0 }
  };
  updateDisplay();
}

// Initial Display
updateDisplay();
