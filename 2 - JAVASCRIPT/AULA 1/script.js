let pessoas = [{
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    aprovado: true
},
{
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro",
    aprovado: false
},
{
    nome: "Pedro",
    idade: 35,
    cidade: "Belo Horizonte",
    aprovado: true
}
];

function saudarPessoa(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}. ${pessoa.aprovado ? "Fui aprovado!" : "Não fui aprovado."}`);
};

pessoas.forEach(saudarPessoa);
