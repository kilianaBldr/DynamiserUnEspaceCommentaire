
// je recupere mon formulaire
let formulaire = document.querySelector("form");

//Ajout d'une actions au clic du button 
formulaire.addEventListener("submit", function (event) {
  event.preventDefault(); 
});

//je creer une fonction qui control mes champs 
function controlChamps () {
    //Je récupère la valeur de mes champs du formulaire
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let message = document.getElementById("message").value


    //je verifie si les champs sont vides
        if (firstName === "" || lastName === '' || message === '') {
            document.getElementById("error-message").style.display = 'block';
            // Et si oui les champs ou un des champ vide affiche mn message d'erreur
        } else {
         //si tout les champs sont bien remplie alors aucun message d'erreur s'affiche
            document.getElementById("error-message").style.display = 'none';
        }
    }
//fonction pour recuperer les valeurs des champs et pour rajouter le commentaires ecrit 

//reset le fomulaire
    formulaire.reset();


