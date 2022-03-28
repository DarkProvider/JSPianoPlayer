// De keys en notes variables bevatten de piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

keys.forEach(function(key){
  notes.push(document.getElementById(key));
})


// Maak hieronder een functie met de naam keyPlay die de achtergrondkleur van de toetsen verandert wanneer ze worden ingedrukt.


// Maak hieronder een functie met de naam playNote die de pianotoets afspeelt


// Maak hieronder een functie met de naam eventAssigment met event handler eigenschappen


// Maak hieronder een forEach loop die de elementen in de notes array doorgeeft aan je eventAssigment functie


// Deze variables bevatten de voortgangsknoppen die de gebruiker door de songteksten laten gaan
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Deze variable bevat de '-END' element
let lastLyric = document.getElementById('column-optional');

// Dit statement verberg alle voortgangsknoppen, behalve de eerste
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Maak hieronder een functie voor de eerste voortgangsknop nextOne met een click event 


// Maak hieronder een functie voor de tweede voortgangsknop nextTwo met een click event


// Maak hieronder een functie voor de derde voortgangsknop nextThree met een click event


// Dit is de functie voor de startOver button met een click event
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}