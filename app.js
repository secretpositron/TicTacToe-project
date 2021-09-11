
const sd = document.querySelector('.status');
const rd= document.querySelector('.reset');
const cd = document.querySelectorAll('.game-cell');

const xsign = '×';
const osign = '○';
 
let Live = true;
let xturn = true;

const letterToSymbol = (letter) => letter === 'x' ? xsign : osign;

const winner = (letter) => {
     Live = false;
  if (letter === 'x') {
    sd.innerHTML = `${letterToSymbol(letter)} has won the game!`;
  } else {
    sd.innerHTML = `<span>${letterToSymbol(letter)} has won the game!</span>`;
  }
};

const gamecheck = () => {
  const t1 = cd[0].classList[1];
  const t2 = cd[1].classList[1];
  const t3 = cd[2].classList[1];
  const t4 = cd[3].classList[1];
  const t5 = cd[4].classList[1];
  const t6 = cd[5].classList[1];
  const t7 = cd[6].classList[1];
  const t8 = cd[7].classList[1];
  const t9 = cd[8].classList[1];

  if (t1 && t1 === t2 && t1 === t3) {
    winner(t1);
    cd[0].classList.add('win');
    cd[1].classList.add('win');
    cd[2].classList.add('win');
  } else if (t4 && t4 === t5 && t4 === t6) {
    winner(t4);
    cd[3].classList.add('win');
    cd[4].classList.add('win');
    cd[5].classList.add('win');
  } else if (t7&&t7===t8&&t7===t9) {
    winner(t7);
    cd[6].classList.add('win');
    cd[7].classList.add('win');
    cd[8].classList.add('win');
  } else if (t1&&t1===t4&&t1===t7) {
    winner(t1);
    cd[0].classList.add('win');
    cd[3].classList.add('win');
    cd[6].classList.add('win');
  } else if (t2&&t2===t5&&t2===t8) {
    winner(t2);
    cd[1].classList.add('win');
    cd[4].classList.add('win');
    cd[7].classList.add('win');
  } else if (t3 &&t3===t6&&t3===t9) {
    winner(t3);
    cd[2].classList.add('win');
    cd[5].classList.add('win');
    cd[8].classList.add('win');
  } else if (t1&&t1===t5&&t1===t9) {
    winner(t1);
    cd[0].classList.add('win');
    cd[4].classList.add('win');
    cd[8].classList.add('win');
  } else if (t3&&t3===t5&&t3===t7) {
    winner(t3);
    cd[2].classList.add('win');
    cd[4].classList.add('win');
    cd[6].classList.add('win');
  } else if (t1&&t2&&t3&&t4&&t5&&t6&&t7&&t8&&t9) {
       Live = false;
    sd.innerHTML = 'Game is tied!';
  } else {
    xturn = !xturn;
    if (xturn) {
      sd.innerHTML = `${xsign} is next to play`;
    } else {
      sd.innerHTML = `<span>${osign} is next to play</span>`;
    }
  }
};


const Reseth = () => {
  xturn = true;
  sd.innerHTML = `${xsign} is next`;
  for (const cellDiv of cd) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('win');
  }
    Live = true;
};

const CellClickh = (e) => {
  const classList = e.target.classList;

  if (!Live || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xturn) {
    classList.add('x');
      gamecheck();
  } else {
    classList.add('o');
    gamecheck();
  }
};


rd.addEventListener('click', Reseth);

for (const cellDiv of cd) {
  cellDiv.addEventListener('click', CellClickh)
}