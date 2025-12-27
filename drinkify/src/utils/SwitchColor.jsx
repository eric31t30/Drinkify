let showingA = true;
let intervalId = null;

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

export function setRandomColors(interval = 8000) {
   const root = document.documentElement;

  const update = () => {
    
    if (showingA) {
      root.style.setProperty("--bg-b-1", randomColor());
      root.style.setProperty("--bg-b-2", randomColor());
    } else {
      root.style.setProperty("--bg-a-1", randomColor());
      root.style.setProperty("--bg-a-2", randomColor());
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.style.setProperty("--layer-a", showingA ? 0 : 1);
        root.style.setProperty("--layer-b", showingA ? 1 : 0);
        showingA = !showingA;
      });
    });
  };

   update();
   return setInterval(update, interval);
}

export function stopRandomColors() {
  clearInterval(intervalId);
  intervalId = null;
}


// export function setRandomColors() {
//   const root = document.documentElement;

//   root.style.setProperty("--bg-color-1", randomColor());
//   root.style.setProperty("--bg-color-2", randomColor());
// }

// function randomColor() {
//   return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
// }

// setInterval(setRandomColors, 8000);
