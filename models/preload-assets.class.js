class PreloadAssets {
  constructor() {}

  static loadAssets() {
    return new Promise((resolve, reject) => {
      const assetPaths = [
        // List all asset paths here
        "img/7.Marcadores/Barra/Marcador vida/azul/100_.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/0_.png",
        "img/7.Marcadores/Icono/Monedas.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/100_.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/40_.png",
        "img/5.Fondo/Capas/3.Fondo3/1.png",
        "img/5.Fondo/Capas/5.cielo_1920-1080px.png",
        "img/5.Fondo/Capas/2.Fondo2/2.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/20_.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/20_.png",
        "img/5.Fondo/Capas/4.nubes/1.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/80_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/0_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/40_.png",
        "img/5.Fondo/Capas/2.Fondo2/1.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/60_.png",
        "img/5.Fondo/Capas/3.Fondo3/2.png",
        "img/5.Fondo/Capas/1.suelo-fondo1/1.png",
        "img/7.Marcadores/Barra/Marcador moneda/azul/60_.png",
        "img/7.Marcadores/Barra/Marcador vida/azul/80_.png",
        "img/5.Fondo/Capas/1.suelo-fondo1/2.png",
      ];

      let assetsLoaded = 0;
      assetPaths.forEach((path) => {
        const img = new Image();
        img.onload = () => {
          assetsLoaded++;
          if (assetsLoaded === assetPaths.length) {
            resolve(); // All assets are loaded
          }
        };
        img.onerror = reject;
        img.src = path;
      });
    });
  }

  static loadAudio() {
    return new Promise((resolve, reject) => {
      const audioPaths = [
        "audio/running.mp3",
        "audio/jump.mp3",
        "audio/hurt.mp3",
        "audio/dying.mp3",
        "audio/bottle.mp3",
        "audio/coin.mp3"
      ];

      let audiosLoaded = 0;
      audioPaths.forEach((path) => {
        const audio = new Audio();
        audio.src = path;
        audio.addEventListener(
          "canplaythrough",
          () => {
            audiosLoaded++;
            if (audiosLoaded === audioPaths.length) {
              resolve(); // All audio files are loaded
            }
          },
          { once: true } //used to remove the listener after it executes
        );
        audio.addEventListener(
          "error",
          (e) => {
            reject(`Failed to load audio at ${path}: ${e.message}`);
          },
          { once: true }
        );
      });
    });
  }

  //'./audio/running.mp3');
  //'./audio/jump.mp3');
  //'./audio/hurt.mp3');
  //'./audio/dying.mp3');
}
