const pokeContainer = document.querySelector("#pokeContainer");
const pokemonCount = 1010
const colors = {
    fire: '#f35b3a',
    grass: '#4bb82e',
    electric: '#dbee09',
    water: '#313ce0',
    ground: '#b65c0b',
    rock: '#d5d5d4',
    fairy: '#e70973',
    poison: '#8f2dbc',
    bug: '#66df7d',
    dragon: '#c7101f',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ghost: '#69137d',
    dark: '#363c30',
    steel: '#808080'
}



const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) { 
        await getPokemons(i)
    }
}

const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createPokemonCard(data)
}

const createPokemonCard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0')

    const pokeTypes = poke.types.map(type => type.type.name) 
    console.log(pokeTypes)
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    const color = colors[type]
    

    card.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${pokeTypes}</span></small>
</div>
`

    card.innerHTML = pokemonInnerHTML

    pokeContainer.appendChild(card)
}


fetchPokemons()

