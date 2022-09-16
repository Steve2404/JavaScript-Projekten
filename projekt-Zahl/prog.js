// Schritt 1 - Auswahl unserer Elemente
let input = document.querySelector("#number");
let error = document.querySelector(".text-danger");
let formular = document.querySelector("#formular");

// Schritt 2 - Den Fehler verbergen
error.style.display = "none";

// Schritt 3 - Erzeugen einer Zufallszahl
let zufallZahl = Math.floor(1001 * Math.random());
let cout = 0;
let numberChoice;

// Schritt 6 - Erstellen Sie die Funktion Prüfen
function pruefen(numbers) {
  let instruction = document.createElement("div");
  let result = document.createElement("div");
  if (numbers > zufallZahl) {
    instruction.textContent = "#" + cout + " (" + numbers + ") das ist mehr !";
    instruction.className = "instruction plus";
  }else if (numbers < zufallZahl) {
    instruction.textContent = "#" + cout + " (" + numbers + ") das ist weniger !";
    instruction.className = "instruction moins";
   } else {
    instruction.textContent =
      "#" + cout + " (" + numbers + ")  ✨🎉 Sie haben es geschafft ✨🎉!";
    instruction.className = "instruction finish";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
}

// Schritt 4 - Überprüfen, ob der Nutzer eine Zahl angibt
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

// Schritt 5 - Beim Absenden des Formulars handeln
formular.addEventListener("submit", (e) => {
  e.preventDefault(); // erlaubt es, das Standard-Ereignis von html abzubrechen
  if (isNaN(input.value) || input.value === "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "silver";
    cout++;
    numberChoice = input.value;
    input.value = "";
    pruefen(numberChoice);
  }
});
