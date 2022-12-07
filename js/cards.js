//Générer des cartes sur la page.

const cards = {
     //J'appelle les variables existantes en HTML.
    body: document.querySelector("body"),
    h1: document.querySelector("h1"),
    element: document.querySelector(".element"),
    cardList: document.querySelector(".cardList"),

    init() {
        //J'initialise le lancement de l'app articles.
        console.log('Cards are connected ✅');
        cards.getData();
    },

    getData() {
        //Je récupère mes données depuis le fichier data.json
        fetch("../data/data.json")
        //Je convertis la réponse au format json
        .then(response => {
            return response.json();
            })
            //Je boucle pour créer autant d'objets que d'ittérations dans le fichier.
            .then(data => {
                for( const cardData of data ) {
                    // console.log (cardData);
                    cards.createCard(cardData); // ici que les cartes vont être créé
                };
            });
    },

    createCard(cardData) {
        //Je génère mes cartes dans le DOM. 
        //Pour cela je crée une div en HTML au préalable que je nomme cardList afin de séparer les éléments.
        //Création de l'élément principal parent card
        // console.log(cardData);
        const cardModel = document.createElement("div");
        cardModel.classList.add("card");
        this.cardList.appendChild(cardModel);

        //Je crée deux éléments enfants title et content
        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card_title");
        const cardTilteText = document.createTextNode(`${cardData.title}`);
        cardTitle.appendChild(cardTilteText);

        const cardContent = document.createElement("p");
        cardContent.classList.add("card_content");
        const cardContentText = document.createTextNode(`${cardData.content}`);
        cardContent.appendChild(cardContentText);

        cardModel.appendChild(cardTitle);
        cardModel.appendChild(cardContent);

    },
};

cards.init();