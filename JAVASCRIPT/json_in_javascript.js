let cv = {
    "Nome": "alessandro",
    "Cognome": "mosella",
    "Indirizzo": "via marche 5, Martinsicuro (TE)",
    "Tel":"null",
    "Mobile":'3925633195',
    "Email":"alessandromosella47@gmail.com",
    "Sito": "null",
    "Sesso": "maschio",
    "Ddn": "25/06/2004",
    "Cittadinanza": " italia"
}
let contenitoreCv = document.getElementById('cv')
console.log(cv)
let contenuto = ''
for (let e of Object.entries(cv)) {
    contenuto += '<div><b>' + e[0] + ':</b> <span>' + e[1] + '</span></div>'
}
contenitoreCv.innerHTML = console.log


