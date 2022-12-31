//Pegando os elementos
const nome = document.getElementById('elemento_nome')
const id = document.getElementById('id')
const imagem = document.getElementById('imagem')
const form = document.getElementById('form')
const btn_prev = document.getElementById('btn-prev')
const btn_next = document.getElementById('btn-next')


let tipo = document.getElementById('tipo_pokemon')

let busca = 1

//Fazendo a requisição para a API
const fecthPokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(APIresposta)

    if(APIresposta.status == 200){
         //Tirando o JSON dos dados recebidos
        let data =  await APIresposta.json()
        return data
    }
}

//gerando e colocando os dados
const RenderPokemon = async (pokemon) =>{
    nome.innerHTML = 'Loading...'
    id.innerHTML = ''
    const data =  await fecthPokemon(pokemon)

    if (data){
        nome.innerHTML = data.name
        id.innerHTML   = ` ID:${data.id}`
        busca = data.id
        imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        console.log(data.types['0'].type['name'])
        if(data.types['0'].type['name'] === 'grass'){
            tipo.src = 'imagens/bush.png'
        }
        else if (data.types['0'].type['name'] === 'fire'){
            tipo.src = 'imagens/fire.png'
        }
        else if (data.types['0'].type['name'] === 'electric'){
            tipo.src = 'imagens/eletric.png'
        }
        else if (data.types['0'].type['name'] === 'bug'){
            tipo.src = 'imagens/bug.png'
        }
        else if (data.types['0'].type['name'] === 'water'){
            tipo.src = 'imagens/water.png'
        }
        else if (data.types['0'].type['name'] === 'poison'){
            tipo.src = 'imagens/poison.png'
        }
        else if (data.types['0'].type['name'] === 'normal'){
            tipo.src = 'imagens/normal.png'
        }
        else if (data.types['0'].type['name'] === 'ground'){
            tipo.src = 'imagens/ground.png'
        }
        else if (data.types['0'].type['name'] === 'fairy'){
            tipo.src = 'imagens/fairy.png'
        }
        else if (data.types['0'].type['name'] === 'fighting'){
            tipo.src = 'imagens/fighting.png'
        }
        else if (data.types['0'].type['name'] === 'psychic'){
            tipo.src = 'imagens/psychic.png'
        }
        else if (data.types['0'].type['name'] === 'rock'){
            tipo.src = 'imagens/rock.png'
        }
        else if (data.types['0'].type['name'] === 'ghost'){
            tipo.src = 'imagens/ghost.png'
        }
        else if (data.types['0'].type['name'] === 'ice'){
            tipo.src = 'imagens/ice.png'
        }
        else if (data.types['0'].type['name'] === 'dragon'){
            tipo.src = 'imagens/dragon.png'
        }
        else if (data.types['0'].type['name'] === 'dark'){
            tipo.src = 'imagens/dark.png'
        }
        else if (data.types['0'].type['name'] === 'steel'){
            tipo.src = 'imagens/steel.png'
        }
        //IMG
        
    }else{
        RenderPokemon('1')
        document.getElementById('conteudo-modal').innerHTML = 'Infelizmente não foi possível encontrar esse pokemon... Mas não desista!!! <i class="fa-solid fa-flower-tulip"></i>'
        //titulo
        let titulo = document.getElementById('exampleModalLabel')
        titulo.innerHTML = 'NÃO ENCONTRADO :('
        titulo.classList.add('text-danger')

        //btn
        let botao = document.getElementById('btn-modal')
        botao.innerHTML = 'Voltar e tentar de novo'
        botao.className = 'btn btn-success'
        $('#modal-sucesso-erro').modal('show')//Modal
        
    }
}


//Adicionando o evento de enviar na tag form
form.addEventListener('submit', (event) =>{

    event.preventDefault()

    RenderPokemon(input.value.toLowerCase())
    input.value = ''

})
//Evento click nos BTNs
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

//Pokemon 1 como padrão ao recarregar
RenderPokemon('1')