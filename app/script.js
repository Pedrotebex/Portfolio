document.addEventListener('DOMContentLoaded', function() {
    const idiomaPtBtn = document.getElementById('idioma-pt');
    const idiomaEnBtn = document.getElementById('idioma-en');
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const pedroSemlink = document.querySelector('.pedro_semlink');
    const subtitulo = document.querySelector('.apresentacao__links__subtitulo');
    const homeLink = document.querySelector('.cabecalho__menu__link[href="index.html"]');
    const sobreLink = document.querySelector('.cabecalho__menu__link[href="sobre.html"]');

    // Textos em Português
    const textosPt = {
        'titulo': 'Eleve seu negócio digital a outro nível <span class="titulo-destaque">com um Front-end de qualidade!</span>',
        'descricao': 'Olá! Sou Pedro Fraguglia, desenvolvedor Front-end em constante evolução. Já possuo experiência na área de criação de sites web e design na área de Marketing. Vamos conversar?',
        'pedro_semlink': 'Desenvolvido por @Pedrofraguglia_',
        'subtitulo': 'Acesse minhas Redes',
        'home': 'Home',
        'sobre': 'Sobre mim'
    };

    // Textos em Inglês
    const textosEn = {
        'titulo': 'Take your digital business to the next level with <span class="titulo-destaque">quality Front-end!</span>',
        'descricao': 'Hello! I\'m Pedro Fraguglia, a Front-end developer constantly evolving. I already have experience in web design and marketing design. Shall we talk?',
        'pedro_semlink': 'Developed by @Pedrofraguglia_',
        'subtitulo': 'Access my Networks',
        'home': 'Home',
        'sobre': 'About Me'
    };

    // Função para atualizar os textos
    function atualizarTextos(idioma) {
        if (idioma === 'en') {
            console.log('Mudando para Inglês');
            titulo.innerHTML = textosEn['titulo'];
            descricao.innerHTML = textosEn['descricao'];
            pedroSemlink.textContent = textosEn['pedro_semlink'];
            subtitulo.textContent = textosEn['subtitulo'];
            homeLink.textContent = textosEn['home'];
            sobreLink.textContent = textosEn['sobre'];
        } else {
            console.log('Mudando para Português');
            titulo.innerHTML = textosPt['titulo'];
            descricao.innerHTML = textosPt['descricao'];
            pedroSemlink.textContent = textosPt['pedro_semlink'];
            subtitulo.textContent = textosPt['subtitulo'];
            homeLink.textContent = textosPt['home'];
            sobreLink.textContent = textosPt['sobre'];
        }
    }

    // Event listeners para os botões de idioma
    idiomaPtBtn.addEventListener('click', function() {
        atualizarTextos('pt');
    });

    idiomaEnBtn.addEventListener('click', function() {
        atualizarTextos('en');
    });
});
