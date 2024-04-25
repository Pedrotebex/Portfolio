// Textos em inglês
const idiomaPtText = 'PT';
const idiomaEnText = 'EN';
const tituloEnText = 'About Me';
const paragrafo1EnText = 'Hello! My name is Pedro Fraguglia and I\'m currently dedicated to studying Systems Analysis and Development at the University of São Francisco. With a passion for Front-End programming, I\'m determined to become an experienced programmer in this field.';
const paragrafo2EnText = 'I have previous experience of two and a half years in the Digital Marketing industry, where I performed various functions, including social media management, creation of art and content, development of web pages using WordPress, HTML, and Javascript, as well as working with web servers. I actively participated in digital launches, contributing to exceptional results.';

// Seleção dos elementos na página Home
const idiomaPtBtn = document.getElementById('idioma-pt');
const idiomaEnBtn = document.getElementById('idioma-en');
const titulo = document.getElementById('titulo');
const paragrafo1 = document.getElementById('paragrafo1');
const paragrafo2 = document.getElementById('paragrafo2');

// Função para alternar os textos entre português e inglês
function toggleLanguage() {
    idiomaPtBtn.addEventListener('click', function() {
        // Atualiza o conteúdo dos elementos para os textos em português
        titulo.textContent = 'Sobre mim';
        paragrafo1.textContent = 'Olá! Meu nome é Pedro Fraguglia e atualmente estou dedicado aos estudos de Análise e Desenvolvimento de Sistemas na Universidade São Francisco. Com uma paixão pela programação Front-End, estou determinado a me tornar um programador experiente nessa área.';
        paragrafo2.textContent = 'Tenho uma experiência anterior de dois anos e meio na indústria do Marketing Digital, onde desempenhei várias funções, incluindo gerenciamento de mídias sociais, criação de arte e conteúdo, desenvolvimento de páginas web utilizando WordPress, HTML e Javascript, além de trabalhar com servidores web. Participei ativamente em lançamentos digitais, contribuindo para resultados excepcionais.';
    });

    idiomaEnBtn.addEventListener('click', function() {
        // Atualiza o conteúdo dos elementos para os textos em inglês
        titulo.textContent = tituloEnText;
        paragrafo1.textContent = paragrafo1EnText;
        paragrafo2.textContent = paragrafo2EnText;
    });
}

// Chama a função para alternar os textos entre português e inglês
toggleLanguage();
