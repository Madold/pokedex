"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/{id or name}/";

// DOM ELEMENTS
const pokemon_avatar = document.getElementById("pokemon-img");
const pokemon_name = document.getElementById("pokemon-name");
const pokemon_xp = document.getElementById("pokemon-xp");
const pokemon_attack = document.getElementById("attack");
const pokemon_defense = document.getElementById("defense");
const pokemon_special_attack = document.getElementById("special-attack");
const form = document.getElementById("form");
const pokemon_input = document.getElementById("pokemon-input");
const invalid_advice = document.querySelector(".invalid");
const submit_btn = document.getElementById("submit");

// Listeners and functions
form.addEventListener("submit", function getPokemon(event) {
  event.preventDefault();
  const pokemon = pokemon_input.value.trim().toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((pokemon) => {
      pokemon_avatar.src = pokemon.sprites.front_default;
      pokemon_avatar.classList.add("rounded-full");
      pokemon_name.innerHTML = `${pokemon.name} <span class="font-normal">${pokemon.stats[0].base_stat}HP</span>`;
      pokemon_xp.textContent = `${pokemon.base_experience}XP`;
      pokemon_attack.textContent = pokemon.stats[1].base_stat;
      pokemon_defense.textContent = pokemon.stats[2].base_stat;
      pokemon_special_attack.textContent = pokemon.stats[3].base_stat;
      invalid_advice.classList.add("hidden");
    })
    .catch(err => {
      pokemon_avatar.src = "img/placeholder.png";
      pokemon_avatar.classList.remove("rounded-full");
      pokemon_name.textContent = "Please tipe a valid pokemon!!"
      invalid_advice.classList.remove("hidden");
      console.error(err);
    });
});
