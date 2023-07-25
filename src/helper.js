export let lastKey;
export const lastKeyHelper = (arg) => {
  lastKey = arg;
};

export let gameOver = false;
export const toggleGameOver = () => {
  gameOver = true;
};
