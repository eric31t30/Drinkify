

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

export function applyThemeOnce() {
  const root = document.documentElement;

  root.style.setProperty("--color-1", randomColor());
  root.style.setProperty("--color-2", randomColor());
}
