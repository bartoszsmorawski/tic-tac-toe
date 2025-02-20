import { state } from "./state";
import { renderIcons } from "./icons";
import { updateMatrix } from "./updateMatrix";

const winnerHeadline = document.querySelector('.player');

export function clickHandler(event) {
    if (event.target.innerHTML || state.winnerStatus.isWin) return;

    const idx = parseInt(event.target.dataset.index);    

    updateMatrix(idx);

    state.count++;

    if (state.count === 9 && state.winnerStatus.isWin === false) {
        winnerHeadline.textContent = 'Remis!'
    }

    const iconSrc = state.count % 2 ? 'x' : 'circle';
    const icon = `<i data-lucide="${iconSrc}"></i>`;
    event.target.innerHTML = icon;
    
    renderIcons();
}

// if (warunek) {
//   coś tam (jeśli prawda)
// } else {
//   coś innego (jeśli falsz)
// }

// const test = warunek ? coś tam (jeśli prawda) : coś innego (jeśli falsz)