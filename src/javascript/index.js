import './icons';

import '../style.css';
import { createGrid } from './createGrid';
import { state, resetState } from './state';
import { getItem, setItem } from './localStorage';

const routes = {
	'/': 'main',
	'/game': 'game',
};

let gameContainer;

document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('app');
	const path = window.location.pathname;

	const player1 = getItem('player1');

	const observer = new MutationObserver(() => {
		setupElements();
		setupEventListeners();
	});

	observer.observe(app, { childList: true });

	function setupElements() {
		gameContainer = document.getElementById('game-container');

		if (path === '/game' && gameContainer && !state.winnerStatus.isWin) {
			createGrid(gameContainer);
		}
	}

	function setupEventListeners() {
		const startGame = document.getElementById('start-game');
		const setPlayers = document.getElementById('set-players');
		const restartGame = document.getElementById('restart-game');
		const mainPage = document.getElementById('main-page');
		const inputs = document.getElementsByTagName('input');

		function setup() {
			Array.from(inputs).forEach(input => {
				if (input.value !== '') {
					setItem(input.name, input.value);
					input.value = '';
				}
			});
		}

		if (startGame) {
			startGame.addEventListener('click', () => {
				if (inputs) {
					setup();
				}

				window.location.pathname = '/game';
			});
		}

		if (setPlayers) {
			const setupPlayers = () => {
				if (inputs) {
					setup();
				}
			};

			setPlayers.addEventListener('click', setupPlayers);
		}

		if (restartGame) {
			restartGame.addEventListener('click', () => {
				resetState();
				loadTemplate('game');
			});
		}

		if (mainPage) {
			mainPage.addEventListener('click', () => loadTemplate('main'));
		}
	}

	function loadTemplate(id) {
		const template = document.getElementById(id);

		if (id === 'game') {
			template.content.querySelector('#player').textContent = player1 || 'Gracz 1';
		}

		if (template) {
			app.innerHTML = template.innerHTML;
		}
	}

	loadTemplate(routes[path]);
});
