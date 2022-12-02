//Générer des cartes sur la page.

const cards = {

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
                for( const card of data ) {
                    console.log (card);
                    cards.createCard(); // ici que les cartes vont être créé
                };
            });
    },

    createCard() {
        //Je génère mes cartes dans le DOM.
        console.log("Prochaine étape, générer les cartes dans le DOM !");

        //Créer un élément principal parent card
        //Je crée deux éléments enfants Title et content
        //Je fais adopter mes éléments enfants par le parent card

    },
};

cards.init();