export default function initRendersButton(AppTrigger, WindowName, AppIcon, AppIndex, W, H, cClass = {}) {
  function setupButton() {
    const ACT = document.getElementById(AppTrigger);

    if (ACT) {
      ACT.addEventListener("click", () => {
        const createWindow = window.parent !== window ? window.parent.CreateWid : window.CreateWid;

        const resolvedClass = typeof cClass === 'function' ? cClass() : cClass;

        if (createWindow) {
          createWindow(ACT, WindowName, AppIcon, AppIndex, null, W, H, resolvedClass);
        } else {
          console.error("CreateWid no está disponible. Asegúrate de que WidOther.js se haya cargado en la ventana principal.");
        }
      });
    } else {
      console.warn(`Elemento '${AppTrigger}' no encontrado en el DOM`);
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener("DOMContentLoaded", setupButton);
  } else {
    setupButton();
  }
}
