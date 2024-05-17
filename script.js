// Je récupère mes éléments 
const commentList = document.getElementById('comment-list')
const commentForm = document.querySelector('form')
const errorMessage = document.getElementById('error-message')
const submitButton = document.querySelector('form button')

//Je récupère la valeur de mes champs du formulaire
const firstName = document.getElementById('first-name').value
const lastName = document.getElementById('last-name').value
const message = document.getElementById('message').value

// Ajout d'une actions au clic du button 
submitButton.addEventListener('click', (event) => {
//J'évite le chargement par défault
event.preventDefault()
//je vérifie si les champs son vides 
if (firstName === '' || lastName === '' || message === '') {
    // Et si les champs ou un des champ et vide j'affiche mn message d'erreur
    errorMessage.style.display = 'block';
} else {
    //si tout les champs sont bien remplie alors aucun message d'erreur s'affiche
    errorMessage.style.display = 'none';
    //Création du nouvel espace de commentaire
    const newComment = document.createElement('div');
    //ajout les champs remplie dans le nouvelle espace commentaire 
    newComment.innerHTML = ${firstName} ${lastName} ${message};
    //ajout du nouveau commentaire créer à la liste de commentaire
    commentList.appendChild(newComment);
} 
});