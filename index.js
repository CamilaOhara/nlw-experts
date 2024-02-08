const perguntas = [
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados sem fazer conversão",
        "Compara apenas os valores, sem levar em consideração os tipos de dados",
        "Realiza uma comparação estrita, levando em consideração os valores e os tipos de dados"
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de programação que representa documentos HTML e XML como uma árvore de objetos.",
        "Uma função nativa em JavaScript para manipular documentos HTML.",
        "Um método de estilização de páginas web em JavaScript.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para variáveis que não serão alteradas, enquanto 'const' é usado para variáveis mutáveis.",
        "'let' pode ser reatribuído, enquanto 'const' é usado para declarar variáveis constantes que não podem ser reatribuídas.",
        "'const' é usado para variáveis globais, enquanto 'let' é usado para variáveis locais.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é closure em JavaScript?",
      respostas: [
        "Uma estrutura de controle de fluxo em JavaScript.",
        "Um tipo de loop utilizado para repetições.",
        "Uma função que tem acesso ao escopo de outra função exterior, mesmo após a função exterior ter terminado a execução.",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toNumber()",
        "stringToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'map()' em JavaScript?",   
      respostas: [
        "Aplicar uma função a cada elemento de um array e retornar um novo array com os resultados.",
        "Remover elementos duplicados de um array.",
        "Ordenar os elementos de um array em ordem alfabética.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca popular para criação de interfaces de usuário.",
        "Uma técnica que permite a comunicação assíncrona entre o navegador e o servidor.",
        "Uma estrutura de controle de exceções em JavaScript.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 10; i++)",
        "loop (let i = 0; i < 10; i++)",
        "repeat (let i = 0; i < 10; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento que ocorre quando o teclado é pressionado.",
        "Um evento que ocorre quando o mouse é movido sobre um elemento.",
        "Um evento que ocorre quando um elemento é clicado pelo usuário.",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length //variaveis não pode colocar espaço, ao invez de separar a proxima palavra começa com letra maiuscula
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta // true or false
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  