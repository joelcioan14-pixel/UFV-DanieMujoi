function mostrarDivs(id) {
    const divs = document.querySelectorAll('.conteudo');

    divs.forEach(section => {
      section.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
  }

  function mostrar(id) {
    const champions = document.querySelectorAll('.champ');

    champions.forEach(article => {
      article.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
  }

  const classificacao = [

    {
      equipa: "TimãoFC",
      j: 14,
      v: 12,
      e: 1,
      d: 1,
      pts: 37
    },

    {
      equipa: "Vermelho",
      j: 14,
      v: 10,
      e: 2,
      d: 2,
      pts: 32
    },

    {
      equipa: "FCEagles",
      j: 14,
      v: 9,
      e: 3,
      d: 2,
      pts: 30
    },

    {
      equipa: "DreamTeam",
      j: 14,
      v: 8,
      e: 2,
      d: 4,
      pts: 26
    },

    {
      equipa: "TheKingsman",
      j: 14,
      v: 7,
      e: 4,
      d: 3,
      pts: 25
    },

    {
      equipa: "Lanceiros",
      j: 14,
      v: 6,
      e: 3,
      d: 5,
      pts: 21
    },

    {
      equipa: "FCDestroyes",
      j: 14,
      v: 5,
      e: 3,
      d: 6,
      pts: 18
    },

    {
      equipa: "BlackTeam",
      j: 14,
      v: 4,
      e: 3,
      d: 7,
      pts: 15
    }


  ];

  const goleadores = [

    ["Nathan Fuanzolo", 13],
    ["Zeizi Polo", 12],
    ["Heuler", 10],
    ["Laurindo", 9],
    ["Timóteo Adriano", 8],
    ["Martinho", 7],
    ["Katendi Inácio", 6],
    ["Kelson Manuel", 5],
    ["Anderson Chisses", 4],
    ["Silvera", 4]

  ];

  const tabela = document.getElementById("table");

  classificacao.forEach((equipa, posicao) => {

    tabela.innerHTML += `
        <tr>
        <td>${posicao + 1}</td>
        <td>${equipa.equipa}</td>
        <td>${equipa.j}</td>
        <td>${equipa.v}</td>
        <td>${equipa.e}</td>
        <td>${equipa.d}</td>
        <td>${equipa.pts}</td>
        </tr>
        `;

  });

  const lista = document.getElementById("artilheiros");

  goleadores.forEach(jogador => {

    lista.innerHTML += `
        <li>${jogador[0]} - ${jogador[1]} golos</li>
        `;

  });

  const grupoA = [

    {
      equipa: "Moçambique",
      j: 2,
      v: 2,
      e: 0,
      d: 0,
      pts: 6
    },

    {
      equipa: "França",
      j: 1,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    },

    {
      equipa: "Portugal",
      j: 2,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    },

    {
      equipa: "Brasil",
      j: 2,
      v: 0,
      e: 0,
      d: 2,
      pts: 0
    }

  ];

  const grupoB = [

    {
      equipa: "Inglaterra",
      j: 2,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    },

    {
      equipa: "Espanha",
      j: 2,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    },

    {
      equipa: "Angola",
      j: 2,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    },

    {
      equipa: "Argentina",
      j: 2,
      v: 1,
      e: 0,
      d: 1,
      pts: 3
    }

  ];

  const tabelaA = document.getElementById("grupoA");
  const tabelaB = document.getElementById("grupoB");

  grupoA.forEach((equipa, pos) => {

    tabelaA.innerHTML += `
        <tr>
        <td>${pos + 1}</td>
        <td>${equipa.equipa}</td>
        <td>${equipa.j}</td>
        <td>${equipa.v}</td>
        <td>${equipa.e}</td>
        <td>${equipa.d}</td>
        <td>${equipa.pts}</td>
        </tr>
        `;

  });

  grupoB.forEach((equipa, pos) => {

    tabelaB.innerHTML += `
        <tr>
        <td>${pos + 1}</td>
        <td>${equipa.equipa}</td>
        <td>${equipa.j}</td>
        <td>${equipa.v}</td>
        <td>${equipa.e}</td>
        <td>${equipa.d}</td>
        <td>${equipa.pts}</td>
        </tr>
        `;

  });

  const roda = document.querySelectorAll('.slide');

  let atual = 0;

  setInterval(() => {
    roda[atual].classList.remove('active');

    atual++;

    if (atual >= roda.length) {
      atual = 0;
    }
    roda[atual].classList.add('active');
  }, 4000);

  /* Botões da Liga, Taça, Supertaça e Nations */
  function showTab(tabId) {

    const tabs = document.querySelectorAll('.tabs-content');

    tabs.forEach(tab => {
      tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
  }

  // liga elite aberta por padrão 
  showTab('interno', 'interno1');
