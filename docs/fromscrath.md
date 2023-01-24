# What about this file ?

This file is notepad in wich I save some informations for future usings.

Dans init(){
    toggle.checkMode();
}

  checkMode() {
    //Vérifie l'état du light mode au lancement.
    let lightMode = localStorage.getItem("light-Mode");
    if (lightMode === "enabled") {
      this.handleLightMode
    };
  },

  toggleLightMode() {
    //J'appelle mon bouton "button", je place un addEventListener sur le "click" qui lance la méthode "handleLightMode".
    const toggleButton = document.querySelector("button");

    toggleButton.addEventListener("click", (e) => {
      let lightMode = localStorage.getItem("light-Mode");
      if (lightMode ==="disabled") {
      this.handleLightMode
      };
    });
  },
  