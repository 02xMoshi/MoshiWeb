window.initSakura = function() {
  const sakuraContainer = document.getElementById('sakura-container');
  if (!sakuraContainer) {
    console.error('Sakura container div not found');
    return;
  }

  // Adjustable parameters
  const petalMinSize = 5; // minimum petal width in px
  const petalMaxSize = 20; // maximum petal width in px
  const petalMinOpacity = 0.4;
  const petalMaxOpacity = 1.0;
  const petalMinDuration = 8; // minimum fall duration in seconds
  const petalMaxDuration = 15; // maximum fall duration in seconds
  const petalSpawnInterval = 500; // interval between petal spawns in ms

  const sakuraImages = [
    '../sakura1.png',
    '../sakura2.png',
    '../sakura3.png'
  ];

  function createSakuraPetal() {
    const img = document.createElement('img');
    img.src = sakuraImages[Math.floor(Math.random() * sakuraImages.length)];
    img.classList.add('sakura-petal');
    img.style.left = `${Math.random() * 100}%`;
    img.style.width = `${Math.random() * (petalMaxSize - petalMinSize) + petalMinSize}px`;
    img.style.opacity = Math.random() * (petalMaxOpacity - petalMinOpacity) + petalMinOpacity;
    img.style.animationDuration = `${Math.random() * (petalMaxDuration - petalMinDuration) + petalMinDuration}s`;
    img.style.animationDelay = '0s';
    sakuraContainer.appendChild(img);

    img.addEventListener('animationend', () => {
      if (sakuraContainer.contains(img)) {
        sakuraContainer.removeChild(img);
      }
    });
  }

  setInterval(createSakuraPetal, petalSpawnInterval);
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('sakura-container')) {
    window.initSakura();
  }
});
