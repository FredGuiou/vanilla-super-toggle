//const app => créer un tableau d'éléments sur lequel on va boucler pour générer la navbar
// droite gauche haut bas
// déplacement éléments


const navbar = {

    navbar: document.querySelector(".navbar"),

    init() {
        console.log('Navbar On board ! 🟡')
        navbar.getData();
    },

    getData() {
        //Je récupère mes données depuis le fichier navbar.json
        fetch("../data/navbar.json")
            //Je convertis la réponse au format json
            .then(response => {
                return response.json();
            })
            //Je boucle pour créer autant d'objets que d'ittérations dans le fichier.
            .then(data => {
                for (const navData of data) {
                    // console.log (navData);
                    navbar.createNavlinks(navData); // ici que les liens vont être créé.
                };
            });
    },

    createNavlinks(navData) {
        // console.log(navData);
        //Je génère mes liens dans le DOM.
        
        const linkModel = document.createElement('a');
        linkModel.classList.add("link");
        this.navbar.appendChild(linkModel);
        linkModel.setAttribute("href", `${navData.url}`);

        //Je génère les noms de chaque lien.
        const name = document.createTextNode(`${navData.link}`);
        linkModel.appendChild(name);

    }
};

navbar.init();