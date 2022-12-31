const fecthPokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIresposta)

    //Tirando o JSON dos dados recebidos
    let data = APIresposta.json()
    return data
}

console.log(fecthPokemon('pikachu'))