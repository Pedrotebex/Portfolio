// Definição dos textos em inglês
const textsEn = {
    'idioma-pt': 'PT',
    'idioma-en': 'EN',
    'titulo': 'About Me',
    'paragrafo1': 'Hello! My name is Pedro Fraguglia and I\'m currently dedicated to studying Systems Analysis and Development at the University of São Francisco. With a passion for Front-End programming, I\'m determined to become an experienced programmer in this field.',
    'paragrafo2': 'I have previous experience of two and a half years in the Digital Marketing industry, where I performed various functions, including social media management, creation of art and content, development of web pages using WordPress, HTML, and Javascript, as well as working with web servers. I actively participated in digital launches, contributing to exceptional results.'
    // Adicione mais textos conforme necessário
};

// Seleção dos elementos na página Home
const idiomaPtBtn = document.getElementById('idioma-pt');
const idiomaEnBtn = document.getElementById('idioma-en');
const titulo = document.getElementById('titulo');
const paragrafo1 = document.getElementById('paragrafo1');
const paragrafo2 = document.getElementById('paragrafo2');
// Adicione mais elementos conforme necessário

// Função para alternar os textos entre português e inglês
function toggleLanguage(texts) {
    // Adiciona evento de clique ao botão de idioma PT
    idiomaPtBtn.addEventListener('click', function() {
        // Atualiza o conteúdo dos elementos para os textos em português
        titulo.textContent = texts['titulo'];
        paragrafo1.textContent = texts['paragrafo1'];
        paragrafo2.textContent = texts['paragrafo2'];
        // Adicione mais atribuições de texto conforme necessário
    });

    // Adiciona evento de clique ao botão de idioma EN
    idiomaEnBtn.addEventListener('click', function() {
        // Atualiza o conteúdo dos elementos para os textos em inglês
        titulo.textContent = textsEn['titulo'];
        paragrafo1.textContent = textsEn['paragrafo1'];
        paragrafo2.textContent = textsEn['paragrafo2'];
        // Adicione mais atribuições de texto conforme necessário
    });
}

// Chama a função com os textos em português para inicializar a página
toggleLanguage(texts);
