window.addEventListener('load', function(){

    const cabecalho = document.querySelector('.container-cabecalho')
    const logo = document.querySelector('.logo')
    const btnMenu = document.querySelector('.btn-menu')
    var alturaCabecalho = cabecalho.offsetHeight
    const contentMenu = document.querySelector('.content-menu')
    const menuPrincipal = document.querySelector('.menu-principal')
    var menuAberto = false
    var posicaoScrollAtual = 0
    var cabecalhoBranco = false
    var itensMenu = document.querySelectorAll('.item')


    
    //Aplica um pading-top no menu quando mobile
    menuPrincipal.style.paddingTop = alturaCabecalho+'px';
    if (window.matchMedia("(min-width:991px)").matches) {
        
        menuPrincipal.style.paddingTop = 0+'px';

    } 

    //Eventos de click
    btnMenu.addEventListener('click', function(){

        toggleMenu()

    })

    contentMenu.addEventListener('click', function(e){

        if(e.target.id == 'content-menu' && menuAberto){
            toggleMenu()
        }

    })

    itensMenu.forEach(item =>{

        item.addEventListener('click', function(e){

            let linkInterno = item.getAttribute('linkInterno')
            
            if(linkInterno == "true"){

                e.preventDefault()

                autoScrollMenu(item)
                
            }

        })

    })

    //Eventos de scroll
    window.addEventListener('scroll', function(){

        posicaoScrollAtual = window.scrollY

        mudaCorCabecalho(posicaoScrollAtual)

    })

    //Controla o menu em relação ao tamanho da tela
    window.addEventListener('resize', function(){

        if(window.matchMedia("(max-width:990px)").matches){
            menuPrincipal.style.paddingTop = alturaCabecalho+'px';
        }else if(window.matchMedia("(min-width:991px)").matches && menuAberto){
            menuPrincipal.style.paddingTop = 0+'px'; 
            toggleMenu()
        }else{
            menuPrincipal.style.paddingTop = 0+'px';
        }

    })


    //Controla a situação do menu | caso aberto ou fechado muda a cor do btn-menu e logo

    function toggleMenu(){

        if(!menuAberto){
            btnMenu.classList.add('btn-menu-aberto')
            menuAberto = true
            abrirMenu(menuAberto)
        }else{
            btnMenu.classList.remove('btn-menu-aberto')
            menuAberto = false
            abrirMenu(menuAberto)
        }

    }

    //Abri o menu mobile | caso já eteja aberto o menu e fechado

    function abrirMenu(menuAberto){

        if(menuAberto){

            if(posicaoScrollAtual < alturaCabecalho){
                mudarCorLogo(cabecalhoBranco = true)
            }else{
                mudarCorBtnMenu(cabecalhoBranco = false)
            }
            paralizaBody(menuAberto)
            contentMenu.classList.add('content-menu-aberto')
            
        }else{

            if(posicaoScrollAtual < alturaCabecalho){
                mudarCorLogo(cabecalhoBranco = false)
            }else{
                mudarCorBtnMenu(cabecalhoBranco = true)
            }
            paralizaBody(menuAberto)
            contentMenu.classList.remove('content-menu-aberto')

        }

    }

    //Paraliza o scroll do body caso o menu esteja aberto
    function paralizaBody(menuAberto){
        let body = document.querySelector('body')
        if(menuAberto){
            body.classList.add('paraliza-body')
        }else{
            body.classList.remove('paraliza-body')
        }

    }

    //Muda a cor da logo dependendo da situação do menu aberto ou fechado

    function mudarCorLogo(cabecalhoBranco){
        if(cabecalhoBranco){
            logo.classList.add('logo-escuro')
        }else{
            logo.classList.remove('logo-escuro')
        }
    }

    //Muda a cor do btn menu 
    function mudarCorBtnMenu(cabecalhoBranco){
        if(cabecalhoBranco){
            btnMenu.classList.add('btn-menu-escuro')
        }else{
            btnMenu.classList.remove('btn-menu-escuro')
        }
    }

    //Muda a cor do cabecalho quando a página é scrollada
    function mudaCorCabecalho(posicaoScrollAtual){

        if(posicaoScrollAtual >= alturaCabecalho){

            cabecalhoBranco = true
            cabecalho.classList.add('cabecalho-branco')
            mudarCorBtnMenu(cabecalhoBranco)
            mudarCorLogo(cabecalhoBranco)

        }else{

            cabecalhoBranco = false
            cabecalho.classList.remove('cabecalho-branco')
            mudarCorBtnMenu(cabecalhoBranco)
            mudarCorLogo(cabecalhoBranco)
        }

    }

    function autoScrollMenu(itemMenu){

        let seletor = itemMenu.querySelector('a').getAttribute("href")

        let section = document.querySelector(seletor)

        let posicaoSection = section.offsetTop;

        let posPartida = posicaoScrollAtual;
        let posDestino = posicaoSection;

        window.scrollTo({
            top:posicaoSection - alturaCabecalho,
            left:0,
            behavior:'smooth'
        })


        //Verifica se a tela ta mobile | caso sim fecha o menu n ação do scroll
        if(window.matchMedia("(max-width:990px)").matches){

            toggleMenu()

        }

        
    }

})