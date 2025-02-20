import { state } from "./state";

const winnerHeadline = document.querySelector('.player');

export function checkWin(playerMoves, player) {
    const status = state.winningCombinations.some(combination => {
        return combination.every(position => playerMoves.includes(position))
    })

    if (status === false) return;

    state.winnerStatus.isWin = true;
    state.winnerStatus.winner = player;
    
    winnerHeadline.outerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2em;">
            <h2>Wygral Gracz ${player}</h2>
            <button onclick="window.location.reload()" style="padding: 2em;">Zagraj jeszcze raz</button>
            <button onclick="window.location.pathname = '/'" style="padding: 2em;">Przejdź do strony glównej</button>
        </div>
    `;

    return state.winnerStatus;
};

