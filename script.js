const nome = document.getElementById('elemento_nome')
const id = document.getElementById('id')
const imagem = document.getElementById('imagem')
const form = document.getElementById('form')
const btn_prev = document.getElementById('btn-prev')
const btn_next = document.getElementById('btn-next')


let busca = 1

const fecthPokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIresposta)

    if(APIresposta.status == 200){
         //Tirando o JSON dos dados recebidos
        let data =  await APIresposta.json()
        return data
    }
}




const RenderPokemon = async (pokemon) =>{
    nome.innerHTML = 'Loading...'
    id.innerHTML = ''
    const data =  await fecthPokemon(pokemon)

    if (data){
        nome.innerHTML = data.name
        id.innerHTML   = data.id
        busca = data.id
        imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }else{
        imagem.style.display = 'none'
        nome.innerHTML = 'Not Found :('
        id.innerHTML   = 0
    }
}



form.addEventListener('submit', (event) =>{

    event.preventDefault()

    RenderPokemon(input.value.toLowerCase())
    input.value = ''

})

btn_prev.addEventListener('click',() =>{
    if (busca > 1){
        busca -=1
        RenderPokemon(busca)
    }
    
} )

btn_next.addEventListener('click',() =>{
    busca +=1
    RenderPokemon(busca)
} )


RenderPokemon('1')