
// je recupere mon formulaire
let formulaire = document.querySelector("form");

//Ajout d'une actions au clic du button 
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();

//Je récupère la valeur de mes champs du formulaire
let firstName = document.getElementById("first-name").value
let lastName = document.getElementById("last-name").value
let message = document.getElementById("message").value

//je verifie si les champs sont vides
if (firstName === '' || lastName === '' || message === '') {
     // Et si un des champ ou des champs sonyt vide afficher un message d'erreur
    document.getElementById("error-message").style.display = 'block';
    } else {
    //si tout les champs sont bien remplie alors aucun message d'erreur s'affiche
    document.getElementById("error-message").style.display = 'none';
   //création du nouvelle espace commentaire
    const newComment = document.createElement('div');
    newComment.classList = 'flex space-x-4 text-sm text-gray-500';
    newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                <p>${message}</p>
            </div>
        </div>
        `;
        //ajout du nouvelle espace comentaire a la liste de commentaire
        let commentList = document.getElementById("comment-list")
        commentList.appendChild(newComment)
        //reset le fomulaire
        formulaire.reset();
        }
    });