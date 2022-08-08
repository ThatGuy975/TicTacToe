let ostarscore = 0;
let xstarscore = 0;
let tiestarscore = 0;

// window.addEventListener("DOMContentLoaded", () => {
//   //assiging variables
//     const tiles = Array.from(document.querySelectorAll(".tile"));
//     const playerDisplay = document.querySelector(".display-player");
//     const resetButton = document.querySelector("#reset");
//     const announcer = document.querySelector(".announcer");
//   // empty array assgined to store the results
//     let board = ["", "", "", "", "", "", "", "", ""];
//       // current player default to X
//     let currentPlayer = "X";

// //bydefault game is active
//     let isGameActive = true;
//   // 3 variables for declaring the result

//     const PLAYERX_WON = "PLAYERX_WON";
//     const PLAYERO_WON = "PLAYERO_WON";
//     const TIE = "TIE";

//     /*
//           Indexes within the board
//           [0] [1] [2]
//           [3] [4] [5]
//           [6] [7] [8]
//       */
//  const winningConditions = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     function handleResultValidation() {
//       let roundWon = false;
//       for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         const a = board[winCondition[0]];
//         const b = board[winCondition[1]];
//         const c = board[winCondition[2]];
//         if (a === "" || b === "" || c === "") {
//           continue;
//         }
//         if (a === b && b === c) {
//           roundWon = true;
//           break;
//         }
//       }
// if (roundWon) {
//         announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
//         isGameActive = false;
//         return;
//       }

//       if (!board.includes("")) announce(TIE);
//     }

//     const announce = (type) => {
//       switch (type) {
//         case PLAYERO_WON:
// announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
//           break;
//         case PLAYERX_WON:
//           announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
//           break;
//         case TIE:
//           announcer.innerText = "Tie";
//       }
//       announcer.classList.remove("hide");
//     };
// // it will check whether you can type anything or not
//     const isValidAction = (tile) => {
//       if (tile.innerText === "X" || tile.innerText === "O") {
//         return false;
//       }

//       return true;
//     };
//     const updateBoard = (index) => {
//       board[index] = currentPlayer;
//     };
// const changePlayer = () => {
//       playerDisplay.classList.remove(`player${currentPlayer}`);
//       currentPlayer = currentPlayer === "X" ? "O" : "X";
//       playerDisplay.innerText = currentPlayer;
//       playerDisplay.classList.add(`player${currentPlayer}`);
//     };
// const userAction = (tile, index) => {
//       if (isValidAction(tile) && isGameActive) {
//         //we want to change the text of the tile with the current player
//         tile.innerText = currentPlayer;
//         tile.classList.add(`player${currentPlayer}`);
//         // calling three functions
//         updateBoard(index);
//         handleResultValidation();
//         changePlayer();
//       }
//     };
//     const resetBoard = () => {
//       board = ["", "", "", "", "", "", "", "", ""];
//       isGameActive = true;
//       announcer.classList.add("hide");

//       if (currentPlayer === "O") {
//         changePlayer();
//       }
//       tiles.forEach((tile) => {
//         tile.innerText = "";
//         tile.classList.remove("playerX");
//         tile.classList.remove("playerO");
//       });
//     };
//   //when we click on the file this will happen
//     tiles.forEach((tile, index) => {
//       tile.addEventListener("click", () => userAction(tile, index));
//     });
//     resetButton.addEventListener("click", resetBoard);
//   });

window.addEventListener("DOMContentLoaded", () => {
  const tiles = Array.from(document.querySelectorAll(".tile"));
  const playerDisplay = document.querySelector(".display-player");
  const announcer = document.querySelector(".announcer");

  const resetButton = document.querySelector("#reset");

  let currentPlayer = "X";
  let isGameActive = true;
  let board = ["", "", "", "", "", "", "", "", ""];

  const PLAYERX_WON = "PLAYERX_WON";
  const PLAYERO_WON = "PLAYERO_WON";
  const TIE = "TIE";

  const winningConditions = [
    [0, 1, 2],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  // const winner = () => {
  //   let sj = 0;
  //   sj++;
  //   document.getElementsByClassName("winner!").innerHTML(sj);
  // };

  const xscore = document.querySelector(".xscore");
  const oscore = document.querySelector(".oscore");
  const tiescore = document.querySelector(".tiescore");
  const tiestarimg = document.querySelector(".tiestarimg");
  const xstarimg = document.querySelector(".xstarimg");
  const ostarimg = document.querySelector(".ostarimg");
  const Xname = document.getElementById("Pxname").innerText;
  const Oname = document.getElementById("Poname");

  // let kl = 0;
  // let gq = 0;
  // let sj = 0;
  // const xWinTable = () => {
  //   kl++;
  //   document.querySelector(".x").innerText = kl;
  // };
  // const tieWinTable = () => {
  //   gq++;
  //   document.querySelector(".tie").innerText = gq;
  // };
  // const oWinTable = () => {
  //   sj++;
  //   document.querySelector(".o").innerText = sj;
  // };

  const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < 8; i++) {
      const winningCondition = winningConditions[i];
      const a = board[winningCondition[0]];
      const b = board[winningCondition[1]];
      const c = board[winningCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      console.log(a, b, c);
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      updateScoreBoard(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
    }

    if (!board.includes("")) {
      announce(TIE);
      updateScoreBoard(TIE);
    }
  };
  const updateScoreBoard = (type) => {
    switch (type) {
      case PLAYERO_WON:
        oscore.innerText = parseInt(oscore.innerText) + 1;
        // ostarscore + 1;
        star(oscore, ostarimg);
        break;
      case PLAYERX_WON:
        xscore.innerText = parseInt(xscore.innerText) + 1;
        // xstarscore + 1;
        star(xscore, xstarimg);
        break;
      default:
        tiescore.innerText = parseInt(tiescore.innerText) + 1;
        // tiestarscore + 1;
        star(tiescore, tiestarimg);
    }
  };

  const star = (element1, element2) => {
    // if (ostarscore%3===0) {
    //   document.getElementsByClassName(ostarimg).classList.remove(starhide);
    //   document.getElementsByClassName(ostarimg).classList.add(starshow);
    // } else if (xstarscore%3===0) {
    //   document.getElementsByClassName(xstarimg).classList.remove(starhide);
    //   document.getElementsByClassName(xstarimg).classList.add(starshow);
    // } else if (tiestarscore % 3 === 0) {
    //   document.getElementsByClassName(tiestarimg).classList.remove(starhide);
    //   document.getElementsByClassName(tiestarimg).classList.add(starshow);
    // }
    if (parseInt(element1.innerText) % 3 === 0) {
      const img = document.createElement("img");
      img.src =
        "https://rlv.zcache.co.nz/custom_message_gold_star_with_gold_glitter_texture_star_sticker-r8c6018b4e6f64bd4b7386ba858eb00be_0ugdr_8byvr_540.jpg";
      img.width = 20;
      element2.appendChild(img);
    }
  };

  const announce = (type) => {
    switch (type) {
      case PLAYERO_WON:
        announcer.innerText = "Player O WON";
        // oWinTable();
        break;
      case PLAYERX_WON:
        announcer.innerText = "Player X WON";
        // xWinTable();
        break;
      default:
        announcer.innerText = "TIE";
      // tieWinTable();
    }
    announcer.classList.remove("hide");
  };

  const changePlayer = () => {
    playerDisplay.classList.remove("player" + currentPlayer);
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    if (currentPlayer === "X") {
      playerDisplay.innerText = Xname;
    } else {
      playerDisplay.innerText = Oname;
    }
    playerDisplay.classList.add("player" + currentPlayer);
  };

  const updateBoard = (index) => {
    board[index] = currentPlayer;
  };

  const userAction = (tile, index) => {
    if (isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add("player" + currentPlayer);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
  });

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    announcer.classList.add("hide");
    if (currentPlayer === "O") {
      changePlayer();
    }
    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList.remove("playerX");
      tile.classList.remove("playerO");
    });
  };

  resetButton.addEventListener("click", resetBoard);
});
