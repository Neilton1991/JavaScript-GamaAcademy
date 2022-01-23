const filmes = [
    {
        id: 1,
        titulo:"Dilema das Redes",
        descrição: "Um documentario sobre tecnologia",
        duração: 120
    },
     {  id: 2,
        titulo:"US",
        descrição: "Um filme de terror",
        duração: 120
    },
    {
        id: 3,
        titulo:"Corra",
        descrição: "Filme de suspense",
        duração: 120
    },

]

const[{id, titulo, descrição, duração}] = filmes
filmes.map(filme => console.log(filme.descrição))
