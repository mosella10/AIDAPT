// Funzione per ottenere i dati del Pokémon dall'API
function getPokemonData() {
    var pokemonId = document.getElementById("pokemonId").value;
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Visualizza i dati del Pokémon
        document.getElementById("pokemonName").innerText = "Nome: " + data.name;
        document.getElementById("pokemonImage").src = data.sprites.front_default;
        document.getElementById("pokemonTypes").innerText = "Tipi: " + data.types.map(type => type.type.name).join(", ");
        document.getElementById("pokemonAbilities").innerText = "Abilità: " + data.abilities.map(ability => ability.ability.name).join(", ");
      })
      .catch(error => {
        console.log("Errore:", error);
      });
  }