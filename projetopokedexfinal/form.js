// Criação do formulário
var form = document.createElement("form");
form.id = "pokemonForm";

// Criação do label
var label = document.createElement("label");
label.textContent = "Digite o nome do seu Pokémon preferido:";
form.appendChild(label);

// Criação do input
var input = document.createElement("input");
input.type = "text";
input.id = "pokemonInput";
input.required = true;
form.appendChild(input);

// Criação do botão de envio
var button = document.createElement("button");
button.type = "submit";
button.textContent = "Enviar";
form.appendChild(button);

// Adiciona o formulário ao corpo do documento
document.body.appendChild(form);

// Evento de envio do formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário para a página seguinte

  // Obtém o valor digitado no campo de input
  var pokemonName = document.getElementById("pokemonInput").value;

  // Verifica o nome do Pokémon e redireciona para a página correspondente
  if (pokemonName === "bulbasaur" || pokemonName === "Bulbasaur") {
    window.location.href = "bulbasaur.html";
  } else if (pokemonName === "ivysaur" || pokemonName === "Ivysaur") {
    window.location.href = "ivysaur.html";
  } else if (pokemonName === "venusaur" || pokemonName === "Venusaur") {
    window.location.href = "venusaur.html";
  } else if (pokemonName === "charmander" || pokemonName === "Charmander") {
    window.location.href = "charmander.html";
  } else if (pokemonName === "charmeleon" || pokemonName === "Charmeleon") {
    window.location.href = "charmeleon.html";
  } else if (pokemonName === "charizard" || pokemonName === "Charizard") {
    window.location.href = "charizard.html";
  } else if (pokemonName === "squirtle" || pokemonName === "Squirtle") {
    window.location.href = "squirtle.html";
  } else if (pokemonName === "wartortle" || pokemonName === "Wartortle") {
    window.location.href = "wartortle.html";
  } else if (pokemonName === "blastoise" || pokemonName === "Blastoise") {
    window.location.href = "blastoise.html";
  } else if (pokemonName === "articuno" || pokemonName === "Articuno") {
    window.location.href = "articuno.html";
  } else if (pokemonName === "zapdos" || pokemonName === "Zapdos") {
    window.location.href = "zapdos.html";
  } else if (pokemonName === "moltres" || pokemonName === "Moltres") {
    window.location.href = "moltres.html";
  } else if (pokemonName === "mewtwo" || pokemonName === "Mewtwo") {
    window.location.href = "mewtwo.html";
  } else if (pokemonName === "mew" || pokemonName === "Mew") {
    window.location.href = "mew.html";
  } else {
    alert("O Pokémon digitado não existe. Por favor, tente novamente.");
  }
});
