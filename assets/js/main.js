window.addEventListener('load', function(){
    const cabecalho = document.querySelector('.container-cabecalho')
    var alturaCabecalho = cabecalho.offsetHeight
    var posicaoScrollAtual = 0
    let gridPrincipal = document.querySelector('.container-principal')

    //A primeira section do grid principal deve ter um padding-top para descontar a altura do cabecalho

    let primaryChild =  gridPrincipal.children[0]

    primaryChild.style.paddingTop = alturaCabecalho+'px'



//Eventos de scroll
window.addEventListener('scroll', function(){

    
    posicaoScrollAtual = window.scrollY

    voltaTopo(posicaoScrollAtual)

})


//FUNÇÕES

function voltaTopo(posicaoScrollAtual){

    let btn = document.querySelector('.btn-volta-top')

    if(posicaoScrollAtual > (100/(1/2))){

        btn.classList.add('btn-volta-top-visivel')

        btn.addEventListener('click', function(){

            window.scrollTo({
                top:0 - alturaCabecalho,
                left:0,
                behavior:'smooth'
            })

        })

    }else{
        btn.classList.remove('btn-volta-top-visivel')
    }

}

})