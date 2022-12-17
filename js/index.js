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

        const homeCardModel = document.createElement("div");
        homeCardModel.classList.add("homeCard");
        this.body.appendChild(homeCardModel);

    },
};

homeCard.init();