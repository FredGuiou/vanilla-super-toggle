// Générer une Carte d'accueil de l'utilisateur.

const homeCard = {
    // J'appelle les variables existantes potenciellement manipulables dans le DOM.
    body: document.querySelector("body"),
    h1: document.querySelector("h1"),

    init(){
        //J'initialise le lancement de l'app homeCard.
        console.log('Hello from space 🚀');
        homeCard.getData();
    },

    getData() {
        //Je récupère mes données depuis le fichier homecard.json
        fetch("../data/homecard.json")
        //Je convertis la réponse au format json
        .then(response => {
            return response.json();
            })
            //Je boucle pour créer autant d'objets que d'ittérations dans le fichier.
            .then(data => {
                for( const homeCardData of data ) {
                    // console.log (cardData);
                    homeCard.createHomeCard(homeCardData); // ici que les cartes vont être créé
                };
            });
    },

    createHomeCard(homeCardData) {

        const homeCardContainer = document.createElement("div");
        homeCardContainer.classList.add("homeCard");
        this.body.appendChild(homeCardContainer);

        const sectionLeft = document.createElement("div");
        sectionLeft.classList.add("homeCard--SectionLeft");

        const sectionRight = document.createElement("div");
        sectionRight.classList.add("homeCard--SectionRight");

        homeCardContainer.appendChild(sectionLeft);
        homeCardContainer.appendChild(sectionRight);

        const sectionLeftUp = document.createElement("div");
        sectionLeftUp.classList.add("sectionLeftUp");

        const sectionLeftDwn = document.createElement("div");
        sectionLeftDwn.classList.add("sectionLeftDwn");

        sectionLeft.appendChild(sectionLeftUp);
        sectionLeft.appendChild(sectionLeftDwn);

        const welcomePicture = document.createElement("img");
        welcomePicture.classList.add("profile_picture");
        welcomePicture.setAttribute('src', `${homeCardData.picture}`);
        welcomePicture.setAttribute('alt', `${homeCardData.alt}`);
        sectionLeftUp.appendChild(welcomePicture);

        const textPresentation = document.createElement("p");
        textPresentation.classList.add("textPresentation");
        textPresentation.textContent = `${homeCardData.presentation}`;
        sectionLeftDwn.appendChild(textPresentation);

        const welcomeText = document.createElement("p");
        welcomeText.classList.add("welcomeText");
        welcomeText.textContent = `${homeCardData.welcome}`;
        sectionRight.appendChild(welcomeText);

        

    },
};

homeCard.init();