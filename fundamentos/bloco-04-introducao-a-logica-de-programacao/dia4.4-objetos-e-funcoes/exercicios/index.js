let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem Vinda,", info.personagem);

//------------------------------------------------------------------------

info.recorrente = "sim";

for (const key in info){
    console.log(key)
};

//------------------------------------------------------------------------

for (const key in info) {
    console.log(key, ' = ', info[key])
};

//------------------------------------------------------------------------


//------------------------------------------------------------------------

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo, '.');

  leitor.livrosFavoritos[1]={
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

  console.log(leitor.name,"tem", leitor.livrosFavoritos.length,"livros favoritos.")