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
  showTab('interno', );
  
  /* HERO SLIDER */
let imgs=[
"https://image.cdn2.seaart.me/upload/static/20260712/bd989dfceaf1116b91991fa2e0cbaea1_high.webp",
"https://image.cdn2.seaart.me/upload/static/20260712/67b0908638a6ccb68c0fe79c0ace96ab_high.webp",
"https://image.cdn2.seaart.me/upload/static/20260712/e9a393fcb4f33a5d98aa64d5af418df3_high.webp"
];

let i=0;
setInterval(()=>{
i=(i+1)%imgs.length;
document.getElementById("slideshow").src=imgs[i];
},3000);

/* DASHBOARD ANIMATION */
window.onload=()=>{
document.querySelectorAll(".dash-card").forEach((el,i)=>{
setTimeout(()=>{
el.style.transform="translateY(0)";
el.style.opacity="1";
},i*150);
});
};

/* NAV */
function openTab(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

/* ==========================
   BASE DE DADOS
========================== */

const rankings = {

golos: [

{
pos:1,
nome:"Zeizi Polo",
clube:"The Kingsman",
valor:`
<h3>54</h3>
<p>45 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/3735f7d53496a4ca9200258a41992832_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lc8kde878c73bgm650/bb46c5dc-ae88-4aa7-8dcf-6971cd0fff1b.png"
},

{
pos:2,
nome:"Katendi Inácio",
clube:"The Kingsman",
valor:`
<h3>31</h3><p>48 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/74f9724e5db5c17a44d1834e42f13801_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lc8kde878c73bgm650/bb46c5dc-ae88-4aa7-8dcf-6971cd0fff1b.png"
},

{
pos:3,
nome:"AGUINALDO",
clube:"Dream Team",
valor:`
<h3>26</h3>
<p>19 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/4e7bb860a613583cf3c99452056c71a1_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8liskte878c73fgrmmg/38ba98d0-6c44-4d87-abd9-fd5a74ca8580.png"
},

{
pos:4,
nome:"Laurindo",
clube:"Cosmic Team",
valor:`
<h3>26</h3>
<p>31 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/25de048705fc7981b8402f46ddd43f36_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lij5de878c73fg37f0/d891b05a-3ee7-4d64-b5d7-dce260fd5d72.png"
},

{
pos:5,
nome:"Érik",
clube:"Puli United",
valor:`
<h3>25</h3>
<p>23 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/25c3f3c8540f8699bee75babbf34be68_high.webp",
logo:"https://image.cdn2.seaart.me/upload/static/20260707/91ca63894a7227e9f1c9601cfce6efbf_high.webp"
},

{
pos:6,
nome:"Fadario",
clube:"FC Zeico",
valor:`
<h3>24</h3>
<p>15 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/0615671bd56f3fc30bcb3fe4ddce664b_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-06/d8i7fjte878c73dm37og/34ee0a83-5278-4acc-be27-18c5b2ea8959.png"
},

{
pos:7,
nome:"Nathan",
clube:"The Kingsman",
valor:`
  <h3>23</h3>
  <p>28 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/ecd0168a38c44694ab74f7cef5d7b99d_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lc8kde878c73bgm650/bb46c5dc-ae88-4aa7-8dcf-6971cd0fff1b.png"
},

{
pos:8,
nome:"Graciano",
clube:"Puli United",
valor:`
   <h3>22</h3>
   <p>19 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/ab7435b9fd2eeac3af021ed434240c7f_high.webp",
logo:"https://image.cdn2.seaart.me/upload/static/20260707/91ca63894a7227e9f1c9601cfce6efbf_high.webp"
},

{
pos:9,
nome:"Martinho",
clube:"Black Team",
valor:`
<h3>22</h3>
<p>38 Jogos</h3>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/b0681be8acac6ee38c0df73e4954285a_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXRBVLmNumJ5cnkymJ8EeraG5tZbvc790qVR28ArGmw&s=10"
},

{
pos:10,
nome:"ANDERSON",
clube:"Cosmic Team",
valor:`
<h3>17</h3>
<p>26 Jogos</h3>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/8fb2ba81e620e108bb98a0f0293508f4_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lij5de878c73fg37f0/d891b05a-3ee7-4d64-b5d7-dce260fd5d72.png"
},

{
pos:11,
nome:"Epifânio",
clube:"FC Zeico",
valor:`
<h3>17</h3>
<p>25 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/fffdcb1b73988896b44d26f7adf25ea4_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-06/d8i7fjte878c73dm37og/34ee0a83-5278-4acc-be27-18c5b2ea8959.png"
},

{
pos:12,
nome:"Timóteo",
clube:"FC Zeico",
valor:`
<h3>13</h3>
<p>24 jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Z-lxbuKMIzkSFw8kpOQmIN93lXzYiNdnz_pbSh75cg&s=10",
logo:"https://image.cdn2.seaart.me/2026-06-06/d8i7fjte878c73dm37og/34ee0a83-5278-4acc-be27-18c5b2ea8959.png"
},

{
pos:13,
nome:"Heuler",
clube:"Cosmic Team",
valor:`
<h3>13</h3><p>22 jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoHA5oQNzi65m6PiQN1HQVjV7cTp5MXAHi5a9cJ-nsg&s=10",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lij5de878c73fg37f0/d891b05a-3ee7-4d64-b5d7-dce260fd5d72.png"
},

{
pos:14,
nome:"Ery",
clube:"Cosmic Team",
valor:`
<h3>12</h3><p>43 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/b66f77c8fa1a3e3003c55cf18a04f3cc_high.webp",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8lij5de878c73fg37f0/d891b05a-3ee7-4d64-b5d7-dce260fd5d72.png"
},

{
pos:15,
nome:"Hosten",
clube:"Puli United",
valor:`
<h3>11</h3><p>13 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/960b0e979f7fefeb01b5e6eb967225a2_high.webp",
logo:"https://image.cdn2.seaart.me/upload/static/20260707/91ca63894a7227e9f1c9601cfce6efbf_high.webp"
},

{
pos:16,
nome:"Augusto K",
clube:"Dream Team",
valor:`
<h3>11</h3><p>34 Jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmlWyCAz6Hz5Y4MEIixvc4mQz4VD_fEKFQq2xwtJRqg&s=10",
logo:"https://image.cdn2.seaart.me/2026-06-11/d8liskte878c73fgrmmg/38ba98d0-6c44-4d87-abd9-fd5a74ca8580.png"
}

],

assist: [

{
pos:1,
nome:"Zeizi Polo",
clube:"Seleção das Quinas",
valor:`
<h3>47</h3><p>27 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/3735f7d53496a4ca9200258a41992832_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3UiTaqyAnLPUajRZzZMQXRz4HCSDaG4sgN6jv9H1Dg&s=10"
},

{
pos:2,
nome:"Graciano",
clube:"Gauleses",
valor:`
<h3>36</h3><p>13 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/ab7435b9fd2eeac3af021ed434240c7f_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntp4hu3c7B8AwfvVp7m0F3QxbZjH6uZUOzEWRo-hoSw&s=10"
},

{
pos:3,
nome:"ANDERSON",
clube:"Leões do Atlas",
valor:`
<h3>27</h3><p>24 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/8fb2ba81e620e108bb98a0f0293508f4_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBT-Bf-jc2qU58ZMlffGRPjRuQEb3QR40vO5EbKZtGw&s=10"
},

{
pos:4,
nome:"AGUINALDO",
clube:"Leões do Atlas",
valor:`
<h3>21</h3><p>13 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/4e7bb860a613583cf3c99452056c71a1_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBT-Bf-jc2qU58ZMlffGRPjRuQEb3QR40vO5EbKZtGw&s=10"
},

{
pos:5,
nome:"Katendi Inácio",
clube:"Palancas Negras",
valor:`
<h3>16</h3><p>16 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/74f9724e5db5c17a44d1834e42f13801_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMREaqSNoG4KecnmU00e4jV2ujUOoRlZSXPWwLrAFfg&s=10"
},

{
pos:6,
nome:"Edward",
clube:"Três Leões",
valor:`
<h3>16</h3><p>7 jogos</p>
`,
foto:"https://s2.glbimg.com/c1UZ516mc6YGgcsWOWZGdrKvAqI=/e.glbimg.com/og/ed/f/original/2018/10/22/mulher-confronta-negro.jpg",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS3OY5lQd0zoFM_4bBTEqhdAEHaXJ8gREXCaqxuxF3A&s=10"
},

{
pos:7,
nome:"André Miguel",
clube:"Canarinhos",
valor:`
<h3>15</h3><p>16 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/bef3917b34b33f460d0e750bdac0e55e_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV156RnLjQ_I_hQy7GS50BnhMnckElpS1kL5IpRD1VQQ&s=10"
},

{
pos:8,
nome:"Laurindo",
clube:"Seleção das Quinas",
valor:`
<h3>15</h3><p>19 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/25de048705fc7981b8402f46ddd43f36_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3UiTaqyAnLPUajRZzZMQXRz4HCSDaG4sgN6jv9H1Dg&s=10"
},

{
pos:9,
nome:"Érik",
clube:"Gauleses",
valor:`
<h3>14</h3><p>26 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/25c3f3c8540f8699bee75babbf34be68_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntp4hu3c7B8AwfvVp7m0F3QxbZjH6uZUOzEWRo-hoSw&s=10"
},

{
pos:10,
nome:"Fadario",
clube:"Socceiroos",
valor:`
<h3>11</h3><p>3 Jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/0615671bd56f3fc30bcb3fe4ddce664b_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfhRh68JctFUl-__MxCqk_3-riu4SDKQhbWOOBXoQcPw&s=10"
},

{
pos:11,
nome:"Nathan",
clube:"Palancas Negras",
valor:`
<h3>11</h3><p>9 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/ecd0168a38c44694ab74f7cef5d7b99d_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMREaqSNoG4KecnmU00e4jV2ujUOoRlZSXPWwLrAFfg&s=10"
},

{
pos:12,
nome:"Jeovani",
clube:"Alviceleste",
valor:`
<h3>11</h3><p>6 jogos</p>
`,
foto:"https://image.cdn2.seaart.me/upload/static/20260707/7ad9be33eae71c9a4c974fe8bb3d803b_high.webp",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIlfbewCNNkJDX6MGXkGgYl1hQlw3SjwFlYE1jPIMIg&s"
},

{
pos:13,
nome:"Ageu",
clube:"Seleção das Quinas",
valor:`
<h3>9</h3><p>21 jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0Vsea0hthZ38Tc15YBSx3_nuXT0U7xFHNIkQdYwMkg&s=10",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3UiTaqyAnLPUajRZzZMQXRz4HCSDaG4sgN6jv9H1Dg&s=10"
},

{
pos:14,
nome:"Fenias",
clube:"La Roja",
valor:`
<h3>8</h3><p>7 jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwqhZueHMwG5RTUnxM_ODlBpJZPn8wjUcnV7zwHLWMw&s",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbNRjjbM-eI2JzH2iQ5fpoOCSkrOu6G7XwaoWzjrjCg&s=10"
},

{
pos:15,
nome:"Enock",
clube:"Seleção das Quinas",
valor:`
<h3>8</h3><p>6 jogos</p>
`,
foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBXyWxnBlOn06Skv8wpPNMm5rakgM705UY0eEEQ17HQ&s=10",
logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3UiTaqyAnLPUajRZzZMQXRz4HCSDaG4sgN6jv9H1Dg&s=10"
}

]

};

/* ==========================
   VARIÁVEL
========================== */

let categoriaAtual = "golos";

/* ==========================
   ABRIR MODAL
========================== */

function openRanking(tipo){

categoriaAtual = tipo;

document.getElementById("modalTitle").innerText =
tipo === "golos" ? "Ranking Completo de Golos" : "Ranking Completo de Assistências";

document.getElementById("rankingModal").style.display="flex";

mostrarLista(rankings[tipo]);

document.getElementById("searchPlayer").value="";

}

/* ==========================
   FECHAR
========================== */

function closeRanking(){

document.getElementById("rankingModal").style.display="none";

}

/* ==========================
   GERAR LISTA
========================== */

function mostrarLista(lista){

const ranking=document.getElementById("rankingList");

ranking.innerHTML="";

lista.forEach(j=>{

ranking.innerHTML+=`

<div class="player">

<div class="left">

<div class="position">

${j.pos}

</div>

<div class="photo">

<img src="${j.foto}">

<img class="club" src="${j.logo}">

</div>

<div>

<h3>${j.nome}</h3>

<p>${j.clube}</p>

</div>

</div>

<div class="value">

${j.valor}

</div>

</div>

`;

});

}

/* ==========================
   PESQUISA
========================== */

document.getElementById("searchPlayer")

.addEventListener("keyup",function(){

let texto=this.value.toLowerCase();

let resultado=rankings[categoriaAtual].filter(j=>{

return j.nome.toLowerCase().includes(texto)

|| j.clube.toLowerCase().includes(texto);

});

mostrarLista(resultado);

});

/* ==========================
   FECHAR CLICANDO FORA
========================== */

window.onclick=function(e){

const modal=document.getElementById("rankingModal");

if(e.target==modal){

closeRanking();

}

};

/* TOTS DIVS TROCA */

document.querySelectorAll(".level").forEach(level => {

    const cards = level.querySelectorAll(".tots");

    let atual = 0;

    cards[0].classList.add("active");

    setInterval(() => {

        cards[atual].classList.remove("active");

        atual++;

        if (atual >= cards.length) {
            atual = 0;
        }

        cards[atual].classList.add("active");

    }, 5000);

});


const teams = [
            {
                rank: 1,
                logo: "https://image.cdn2.seaart.me/2026-06-11/d8lc8kde878c73bgm650/bb46c5dc-ae88-4aa7-8dcf-6971cd0fff1b.png",
                name: "The Kingsman",
                points: 160
            },
            {
                rank: 2,
                logo: "https://image.cdn2.seaart.me/2026-06-11/d8lij5de878c73fg37f0/d891b05a-3ee7-4d64-b5d7-dce260fd5d72.png",
                name: "Cosmic Team",
                points: 127
            },
            {
                rank: 3,
                logo: "https://image.cdn2.seaart.me/upload/static/20260707/91ca63894a7227e9f1c9601cfce6efbf_high.webp",
                name: "Puli United",
                points: 97,
                highlight: true
            },
            {
                rank: 4,
                logo: "https://image.cdn2.seaart.me/2026-06-11/d8liskte878c73fgrmmg/38ba98d0-6c44-4d87-abd9-fd5a74ca8580.png",
                name: "Dream Team",
                points: 95
            },
            {
                rank: 5,
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3KFJR5wC73yXar4l-sdILvuZn5JO6dobxqK8sukz7g&s=10",
                name: "Paviterra",
                points: 62
            },
            {
                rank: 6,
                logo: "https://image.cdn2.seaart.me/2026-06-06/d8i7fjte878c73dm37og/34ee0a83-5278-4acc-be27-18c5b2ea8959.png",
                name: "FC Zeico",
                points: 57
            },
            {
                rank: 7,
                logo: "https://image.cdn2.seaart.me/upload/static/20260712/879bd643bf7e232b5183eb573140fae0_high.webp",
                name: "Laranja Mecânica",
                points: 54
            },
            {
                rank: 8,
                logo: "https://image.cdn2.seaart.me/2026-07-12/d99vd5te878c73cbhgv0/834cf825-59e9-48dd-8d81-8aaeba20b852.png",
                name: "Black Team",
                points: 43
            },
            {
                rank: 9,
                logo: "https://image.cdn2.seaart.me/2026-07-12/d99vdr5e878c73d2bkd0/4706c48c-e6fe-4043-874c-2aab6fd76487.png",
                name: "Galáticos",
                points: 42
            },
            {
                rank: 10,
                logo: "https://image.cdn2.seaart.me/upload/static/20260712/89fabb2779bd86fb197445c67e206083_high.webp",
                name: "Marvel FC",
                points: 40
            }
        ];

        function createTeamElement(team) {
            const div = document.createElement('div');
            div.className = `team-row ${team.highlight ? 'highlight' : ''}`;
            div.id = `team-${team.rank}`;

            div.innerHTML = `
                <div class="rank">${team.rank}</div>
                <img src="${team.logo}" alt="${team.name}" class="logo">
                <div class="team-name">${team.name}</div>
                <div class="points">
                    <div class="points-value">${team.points}</div>
                    <div class="points-label">PONTOS</div>
                </div>
            `;
            return div;
        }

        function renderRanking() {
            const container = document.getElementById('ranking');
            container.innerHTML = '';

            // Top 5
            for (let i = 0; i < 5; i++) {
                container.appendChild(createTeamElement(teams[i]));
            }

            // Bottom 5 (escondidos)
            for (let i = 5; i < 10; i++) {
                const el = createTeamElement(teams[i]);
                el.style.display = 'none';
                container.appendChild(el);
            }
        }

        let expanded = false;

        function toggleRanking() {
            expanded = !expanded;
            const btn = document.getElementById('revealBtn');

            for (let i = 6; i <= 10; i++) {
                const row = document.getElementById(`team-${i}`);
                if (row) {
                    row.style.display = expanded ? 'flex' : 'none';
                }
            }

            if (expanded) {
                btn.textContent = 'VER MENOS TIMES';
            } else {
                btn.textContent = 'VER OS PRÓXIMOS 5 TIMES';
            }
        }

        // Inicializar
        window.onload = function() {
            renderRanking();
        };

         const carrosseis = document.querySelectorAll(".awards-ed");

carrosseis.forEach(carrossel => {

    const cards = carrossel.querySelectorAll(".awards-card");

    let index = 0;

    setInterval(() => {

        index++;

        if(index >= cards.length){
            index = 0;
        }

        const largura = cards[0].offsetWidth;

        carrossel.style.transform =
            `translateX(-${index * largura}px)`;

    },3000);

});
        
fetch("header.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("header").innerHTML=data;
});

