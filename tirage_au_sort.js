function tirage_au_sort()
{
var participant = ['Jonathan','Luc','Adeline','Marc','Alexandra','Marco','Houssine','Dylan','Benjamin','Helder','Zakia','Max','Nicolas','Nathan','Dania','Océane','Aurélien'];

var tirage = participant[Math.floor(Math.random() * participant.length)];

alert("Le nom gagnant est : "+[tirage]);
}
