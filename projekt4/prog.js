// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector(".text-danger");
let formulaire = document.querySelector("#formulaire");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(1001 * Math.random());
let cout = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
  let instruction = document.createElement("div");
  if (nombre > nombreAleatoire) {
    instruction.textContent = "#" + cout + " (" + nombre + ") c est plus !";
    instruction.className = "instruction plus";
  } else if (nombre < nombreAleatoire) {
    instruction.textContent = "#" + cout + " (" + nombre + ") c est moins !";
    instruction.className = "instruction moins";
  } else {
    instruction.textContent =
      "#" + cout + " (" + nombre + ")  feliciation vous avez trouve!";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault(); // permet d annuler l evenement par defaut du html
  if (isNaN(input.value) || input.value == " ") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "silver";
    cout++;
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
  }
});
