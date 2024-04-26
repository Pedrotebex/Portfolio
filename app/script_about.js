document.addEventListener('DOMContentLoaded', function() {
    const idiomaPtBtn = document.getElementById('idioma-pt-about');
    const idiomaEnBtn = document.getElementById('idioma-en-about');
    const titulo = document.getElementById('titulo');
    const paragrafo1 = document.getElementById('paragrafo1');
    const pedroSemlink = document.querySelector('.pedro_semlink');
    const subtitulo = document.querySelector('.apresentacao__links__subtitulo');
    const homeLink = document.querySelector('.cabecalho__menu__link[href="index.html"]');
    const sobreLink = document.querySelector('.cabecalho__menu__link[href="sobre.html"]')
    
    // Textos em Português
    const textosPt = {
        'titulo': 'Sobre mim',
        'paragrafo1': 'Olá! Meu nome é Pedro Fraguglia e atualmente estou dedicado aos estudos de Análise e Desenvolvimento de Sistemas na Universidade São Francisco. Com uma paixão pela programação Front-End, estou determinado a me tornar um programador experiente nessa área.',
        'paragrafo2': 'Tenho uma experiência anterior de dois anos e meio na indústria do Marketing Digital, onde desempenhei várias funções, incluindo gerenciamento de mídias sociais, criação de arte e conteúdo, desenvolvimento de páginas web utilizando WordPress, HTML e Javascript, além de trabalhar com servidores web. Participei ativamente em lançamentos digitais, contribuindo para resultados excepcionais.',
        'pedro_semlink': 'Desenvolvido por @Pedrofraguglia_',
        'subtitulo': 'Acesse minhas Redes',
        'home': 'Home',
        'sobre': 'Sobre mim'

    };
    
    // Textos em Inglês
    const textosEn = {
        'titulo': 'About Me',
        'paragrafo1': 'Hello! My name is Pedro Fraguglia and I\'m currently dedicated to studying Systems Analysis and Development at the University of São Francisco. With a passion for Front-End programming, I\'m determined to become an experienced programmer in this field.',
        'paragrafo2': 'I have previous experience of two and a half years in the Digital Marketing industry, where I performed various functions, including social media management, creation of art and content, development of web pages using WordPress, HTML, and Javascript, as well as working with web servers. I actively participated in digital launches, contributing to exceptional results.',
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
            paragrafo1.innerHTML = textosEn['paragrafo1'];
            paragrafo2.innerHTML = textosEn['paragrafo2'];
            pedroSemlink.textContent = textosEn['pedro_semlink'];
            homeLink.textContent = textosEn['home'];
            sobreLink.textContent = textosEn['sobre'];

        } else {
            console.log('Mudando para Português');
            titulo.innerHTML = textosPt['titulo'];
            paragrafo1.innerHTML = textosPt['paragrafo1'];
            paragrafo2.innerHTML = textosPt['paragrafo2'];
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
