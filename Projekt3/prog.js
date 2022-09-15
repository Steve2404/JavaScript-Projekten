// List of Zitaten
let zitaten = [
  [
    "Das Leben ist ein Geheimnis, das es zu leben gilt, und kein Problem, das es zu lösen gilt",
    "Gandhi",
  ],
  ["Das größte Risiko besteht darin, kein Risiko einzugehen.", "Mark Zuckerberg"],
  ["Verdienen Sie sich Ihre Führungsposition jeden Tag aufs Neue.", "Mickael Jordan"],
  ["Seien Sie die Veränderung, die Sie in der Welt sehen wollen.", "Gandhi"],
  [
    "Jedes Mal, wenn Sie sich auf derselben Seite wie die Mehrheit befinden, ist es an der Zeit, einen Schritt zurückzutreten und nachzudenken.",
    "Mark Twain",
  ],
  [
    "Nur diejenigen, die das Risiko eingehen, zu weit zu gehen, werden herausfinden, wie weit man gehen kann.",
    "T.S Elliot",
  ],
  ["Erfolg ist, siebenmal hinzufallen und achtmal aufzustehen.", "Japanisches Sprichwort"],
  [
    "In zwanzig Jahren werden Sie von den Dingen, die Sie nicht getan haben, mehr enttäuscht sein als von den Dingen, die Sie getan haben. Verlassen Sie also die ausgetretenen Pfade. Setzen Sie die Segel. Gehen Sie auf Entdeckungsreise. Träumen Sie ein wenig. Entdecken Sie.",
    "Mark Twain",
  ],
  [
    "Wenn Sie mit dem Handeln warten, ist alles, was Sie mit der Zeit gewinnen, Alter.",
    "Brian Tracy",
  ],
  [
    "Wenn man seine Aufmerksamkeit auf ein einziges Projekt richtet, schlägt der Geist ständig Ideen und Verbesserungen vor, die ihm entgehen würden, wenn er mit mehreren Projekten gleichzeitig beschäftigt wäre.",
    "P.T. Barnum",
  ],
  [
    "Sich selbst zu widmen, um alles zu tun, was man kann, um anderen zu helfen, das zu bekommen, was sie wollen, ist der Schlüssel zum Erfolg.",
    "Brian Sher",
  ],
  [
    "Wenn Sie denken, dass Sie zu klein sind, um etwas zu bewirken, versuchen Sie, mit einer Mücke ins Bett zu gehen.",
    "Anita Roddick",
  ],
  [
    "Beurteilen Sie jeden Tag nicht danach, was Sie ernten, sondern nach den Samen, die Sie säen.",
    "Robert Louis Stevenson",
  ],
  ["Handeln ist der grundlegende Schlüssel zu jedem Erfolg.", "Pablo Picasso"],
  [
    "Erfolg bedeutet, von Misserfolg zu Misserfolg zu wandern und dabei motiviert zu bleiben.",
    "Winston Churchill",
  ],
  [
    "Ihre Zukunft wird durch das, was Sie heute tun, geschaffen, nicht durch das, was Sie morgen tun.",
    "Robert T. Kiyosaki",
  ],
  [
    "Lassen Sie sich nicht entmutigen, oft ist es der letzte Schlüssel am Schlüsselbund, der die Tür öffnet.",
    "Zig Ziglar",
  ],
  [
    "Um deinen Lebensunterhalt zu verdienen, lerne in der Schule. Um ein Vermögen zu verdienen, lerne selbst.",
    "Brian Tracy",
  ],
  [
    "Gewinner finden Wege, Verlierer Ausreden...",
    "F. D. Roosevelt",
  ],
  [
    "Sie sind nie zu alt, um sich neue Ziele zu setzen oder Ihre Träume wahr werden zu lassen.",
    "C.S. Lewis",
  ],
  [
    "Ein Pessimist sieht in jeder Chance eine Schwierigkeit. Ein Optimist sieht in jeder Schwierigkeit eine Chance.",
    "Winston Churchill",
  ],
];

let zita = document.querySelector("#zita");
let author = document.querySelector("#author");
let newZita = document.querySelector("#new");

let last = 0; 
let zufallNbr = 0; 

//gibt die größte ganze Zahl zurück, die kleiner oder gleich max ist 
function generatorZufallNbr(max) {
  return Math.floor(Math.floor(max) * Math.random());
}

newZita.addEventListener("click", () => {
  do {
    zufallNbr = generatorZufallNbr(zitaten.length);
  } while (zufallNbr == last);
  zita.textContent = zitaten[zufallNbr][0];
  author.textContent = zitaten[zufallNbr][1];
  last = zufallNbr;
});
