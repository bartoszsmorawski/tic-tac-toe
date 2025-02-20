import { state } from "./state";
import { player1, player2 } from "./players";
import { checkWin } from "./checkWin";

const playerText = document.getElementById('player');

export function updateMatrix(cell) {
    if (state.winnerStatus.isWin) return;

    const row = state.matrix.find(r => r.includes(cell));
    const col = row.findIndex(el => el === cell);

    const coordinates = `${state.matrix.indexOf(row)}${col}`;

    if (!(state.count % 2)) {
        player1.push(coordinates);
        checkWin(player1, '1');
        playerText.textContent = 'Gracz 2';
    } else {
        player2.push(coordinates);
        checkWin(player2, '2');
        playerText.textContent = 'Gracz 1';
    }


    // console.log(player1, player2);
    
    // znajdź sposób, byśmy mogli mieć dwóch graczy, i przypisywać im wspólrzędne klikniętej komórki
}