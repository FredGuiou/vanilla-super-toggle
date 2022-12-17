const toggle = {
  //J'appelle les variables existantes en HTML.
  body: document.querySelector("body"),
  h1: document.querySelector("h1"),
  navbar: document.querySelector(".navbar"),

  init() {
    //J'initialise le lancement de mon app.
    console.log("Welcome inside Super Toggle Light Mode 🔌");
    toggle.createToggleButton();
    toggle.toggleLightMode();
  },

  createToggleButton() {
    //Je crée mon objet dans le DOM.
    const toggleButton = document.createElement("button");
    // toggleButton.textContent = "Try Light Mode";
    const buttonText = document.createTextNode("🌜 switch to 🌞");
    //J'applique une classe à mon objet.
    toggleButton.classList.add("button");
    //J'applique un texte sur le bouton.
    toggleButton.appendChild(buttonText);
    //J'insère le bouton "button" à son élément parent "element".
    this.navbar.appendChild(toggleButton);
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
    const toggleButton = document.querySelector("button");
    toggle.body.classList.toggle("light");
    // toggleButton.classList.toggle("button");
    toggleButton.classList.toggle("light-button");

    //contains() sert à vérifier l'existence d'une classe et renvoie un booléen.
    // toggleButton.classList.contains('light');
    

    //Je tranforme le texte de mon button
    // if(toggleButton.innerHTML === "🌜 switch to 🌞") {
    //   toggleButton.innerHTML = "🌞 switch to 🌜";
    // } else {
    //   toggleButton.innerHTML = "🌜 switch to 🌞";
    // };

    //Ternaire qui équivaut à la condition if else au dessus.
    //textContent est plus sécurisé que innerHTML on préfère cette formulation.
    toggleButton.textContent === "🌜 switch to 🌞"
      ? (toggleButton.textContent = "🌞 switch to 🌜")
      : (toggleButton.textContent = "🌜 switch to 🌞");
    

    //Je transfosme l'état de mes cartes
    //Je sélectionne tous les éléments ayant la classe card.
    const card = document.querySelectorAll(".card");
    //Cela me renvoit une liste des 3 éléments en console.
    // console.log(card);
    //Je boucle sur la NodeList et j'applique la classe "light-card" sur chaque.
    // for( const item of card ) {
    //   item.classList.toggle("light-card");
    // };

    //Test avec une boucle forEach
    card.forEach(elements => {
      elements.classList.toggle("light-card");
    });

    //Je change l'état de ma/mes homeCard(s)
    const homeCard = document.querySelectorAll(".homeCard");
    homeCard.forEach(elements => {
      elements.classList.toggle("light-homeCard");
    });
  },
};

toggle.init();
