import './icons';

import '../style.css';
import { createGrid } from './createGrid';
import { playerText } from './elements';

const routes = {
    '/': 'main',
    '/game': 'game'
};

let gameContainer;

document.addEventListener('DOMContentLoaded', () => {    
    const app = document.getElementById('app');
    const path = window.location.pathname;
    
    const observer = new MutationObserver(() => {
        setupElements();
        setupEventListeners();
    });

    observer.observe(app, { childList: true });

    function setupElements() {
        gameContainer = document.getElementById('game-container');
        console.log(gameContainer);
    }
    
    function setupEventListeners() {
        const startGame = document.getElementById('start-game');
        const setPlayers = document.getElementById('set-players');
        const restartGame = document.getElementById('restart-game');
        const mainPage = document.getElementById('main-page');

        if (startGame) {
            startGame.addEventListener('click', () => {
                window.location.pathname = '/game'
            });
        }
        
        if (setPlayers) {
            setPlayers.addEventListener('click', () => loadTemplate('game'));
        }
        
        if (restartGame) {
            restartGame.addEventListener('click', () => loadTemplate('game'));
        }
        
        if (mainPage) {
            mainPage.addEventListener('click', () => loadTemplate('main'));
        }
        
    }

    function loadTemplate(id) {
        const template = document.getElementById(id);
    
        if (template) {
            app.innerHTML = template.innerHTML;
        }
    }
    
    loadTemplate(routes[path]);

    console.log(path, gameContainer);
    


    if (path === '/game' && gameContainer) {
        createGrid(gameContainer);
    }
});



// a00 a01 a02 
// a10 a11 a12 
// a20 a21 a22

// Dowiedz się, w jaki sposób możemy odwolywać się do konkretnych wyrazów/elementów macierzy (oczywiście w JS)
 

//Dostęp do pojedynczego elementu

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][1]); // 8

// //Modyfikacja elementu:

// matrix[1][1] = 99;

// console.log(matrix);


// //Wynik:

// [
//     [1, 2, 3],
//     [4, 99, 6],
//     [7, 8, 9]
// ]

// //Iterowanie po całej macierzy

// for (let i = 0; i < matrix.length; i++) {
//     // dostajemy tu każdą tablicę z matrixa i wykonujemy na niej coś
    

//     for (let j = 0; j < matrix[i].length; j++) {
//         // console.log(j);
        
//         console.log(`Element w [${i}][${j}] = ${matrix[i][j]}`);
//     }
// }

