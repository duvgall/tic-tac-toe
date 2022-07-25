const gameBoard = (() => {
    const winCombos = [
      [0, 1, 2]
      [3, 4, 5]
      [6, 7, 8]
      [0, 3, 6]
      [1, 4, 7]
      [2, 5, 8]
      [0, 4, 8]
      [6, 4, 2]
    ];

    let winner = '';
    let turns = 0;

    let winnerCombo = [];

    let board = []
});



const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', () => {
      document.querySelector('table').style.display = 'block';
      document.getElementById('reset-btn').style.display = 'block';

});