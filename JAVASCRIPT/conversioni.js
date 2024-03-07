let cv = {
    "Nome": "alessandro",
    "Cognome": "mosella",
    "Indirizzo": "via marche 5, Martinsicuro (TE)",
    "Tel":"null",
    "Mobile":3925633195,
    "Email":"alessandromosella47@gmail.com",
    "Sito": "null",
    "Sesso": "maschio",
    "Ddn": "25/06/2004",
    "Cittadinanza": " italia" 
}
let jsonToString = JSON.stringify(cv)
console.log(jsonToString) 

let StringToJson = JSON.parse(jsonToString)
console.log(StringToJson)