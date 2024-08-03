const images = {
  'rock': '/img/janken_gu.png',
  'paper': '/img/janken_choki.png',
  'scissors': '/img/janken_pa.png'
};

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';

  document.getElementById('playerChoice').src = images[playerChoice];
  document.getElementById('computerChoice').src = images[computerChoice];

  if (playerChoice === computerChoice) {
      result = 'あいこです。もう一度やり直してください。';
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
             (playerChoice === 'paper' && computerChoice === 'rock') ||
             (playerChoice === 'scissors' && computerChoice === 'paper')) {
      result = 'あなたの勝ちです！';
  } else {
      result = 'あなたの負けです。';
  }

  document.getElementById('result').textContent = `結果: ${result}`;
}
