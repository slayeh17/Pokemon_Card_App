const input = document.getElementById("search-input")
const searchBtn = document.getElementById("search-button")
const image = document.getElementById("pokemon-image")
const pname = document.getElementById("pokemon-name")
const id = document.getElementById("pokemon-id")
const type = document.getElementById("types")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack")
const sprecialDefense = document.getElementById("special-defense")
const speed = document.getElementById("speed")
const img = document.getElementById("pokemon-image")

searchBtn.addEventListener("click", ()=>{
    type.textContent = ""
    const inputValue = input.value.toLowerCase()
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputValue}`)
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        img.src = `${data.sprites.front_default}`
        pname.textContent = `${data.name.toUpperCase()}`
        id.textContent = `#${data.id}`
        data.types.forEach((t)=>{
            type.textContent += `${t.type.name.toUpperCase()}    `
        })
        weight.textContent = `Weight: ${data.weight}`
        height.textContent = `Height: ${data.height}`
        hp.textContent = `HP: ${data.stats[0].base_stat}`
        attack.textContent = `Attack: ${data.stats[1].base_stat}`
        defense.textContent = `Defense: ${data.stats[2].base_stat}`
        specialAttack.textContent = `Special Attack: ${data.stats[3].base_stat}`
        sprecialDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`
        speed.textContent = `Speed: ${data.stats[5].base_stat}`
    })
    .catch((error) => {
        alert("Pokémon not found")
        console.log(error)
    })
})