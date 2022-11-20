const app = {
  //J'appelle les variables existantes en HTML.
  body: document.querySelector("body"),
  h1: document.querySelector("h1"),
  element: document.querySelector(".element"),

  init() {
    //J'initialise le lancement de mon app.
    console.log("Welcome inside Super Toggle Light Mode 🔌");
    app.createToggleButton();
    app.toggleLightMode();
  },

  createToggleButton() {
    //Je crée mon objet dans le DOM.
    const toggleButton = document.createElement("button");
    // toggleButton.textContent = "Try Light Mode";
    const buttonText = document.createTextNode("Go to Light 🌞");
    //J'applique une classe à mon objet.
    toggleButton.classList.add("button");
    //J'applique un texte sur le bouton.
    toggleButton.appendChild(buttonText);
    //J'insère le bouton "button" à son élément parent "element".
    this.element.appendChild(toggleButton);
  },

  toggleLightMode() {
    //J'appelle mon bouton "button", je place un addEventListener sur le "click" qui lance la méthode "handleLightMode".
    const toggleButton = document.querySelector("button");

    toggleButton.addEventListener("click", this.handleLightMode);
  },

  handleLightMode() {
    //je cible mon body auquel j'ajoute la classe light
    // this.body.classList.toggle("light"); 
    // => this ne va pas foncitonner ici car renvoie à l'élément le plus proche et est imbriqué dans la méthode toggleLightMode
    app.body.classList.toggle("light");
    const toggleButton = document.querySelector("button");
    toggleButton.classList.toggle("button");
    toggleButton.classList.toggle("light-button");

    //Je tranforme le texte de mon button
    if(toggleButton.innerHTML === "Go to Light 🌞") {
      toggleButton.innerHTML = "Go to Dark 🌜";
    } else {
      toggleButton.innerHTML = "Go to Light 🌞";
    };
  },
};

app.init();