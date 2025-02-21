import { state } from './state';
import { getItem } from './localStorage';

export function checkWin(playerMoves, player) {
	const status = state.winningCombinations.some(combination => {
		return combination.every(position => playerMoves.includes(position));
	});
	
	if (status === false) return;

	const winnerHeadline = document.getElementById('player');
	const winTemplate = document.getElementById('win');

	state.winnerStatus.isWin = true;
	state.winnerStatus.winner = player;

	const winner = getItem(`player${player}`) || `Gracz ${player}`;

	winTemplate.content.querySelector('span').textContent = winner;

	winnerHeadline.outerHTML = winTemplate.innerHTML;

	return state.winnerStatus;
}
