//Générer des cartes sur la page.

const cards = {
     //J'appelle les variables existantes en HTML.
    body: document.querySelector("body"),
    h1: document.querySelector("h1"),
    cardList: document.querySelector(".cardList"),

    init() {
        //J'initialise le lancement de l'app cards.
        console.log('Cards are connected ✅');
        cards.getData();
    },

    getData() {
        //Je récupère mes données depuis le fichier cards.json
        fetch("../data/cards.json")
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
        const cardModel = document.createElement("li");
        cardModel.classList.add("card");
        this.cardList.appendChild(cardModel);

        //Ces deux sections organisent les élements de façon homogène dans chaque cartes.

        const cardSectionHeader = document.createElement("div");
        cardSectionHeader.classList.add("card__section-Header");
        cardModel.appendChild(cardSectionHeader);

        const cardSectionMain = document.createElement("div");
        cardSectionMain.classList.add("card__section-Main");
        cardModel.appendChild(cardSectionMain);


        //Je crée deux éléments enfants title et content
        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card_title");
        const cardTilteText = document.createTextNode(`${cardData.title}`);
        cardTitle.appendChild(cardTilteText);

        const cardContent = document.createElement("p");
        cardContent.classList.add("card_content");
        const cardContentText = document.createTextNode(`${cardData.content}`);
        cardContent.appendChild(cardContentText);

        //Afin d'accéder à l'article via une fenêtre Modale je crée un élément lien.
        const cardReadLink = document.createElement("a");
        cardReadLink.classList.add("card__read-link");
        cardReadLink.setAttribute("href", "");
        const cardReadLinkText = document.createTextNode(`${cardData.readlink}`);
        cardReadLink.appendChild(cardReadLinkText);

        cardSectionHeader.appendChild(cardTitle);
        cardSectionMain.appendChild(cardContent);
        cardSectionMain.appendChild(cardReadLink);



    },
};

cards.init();