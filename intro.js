// Exemplo genérico de código JavaScript

// --- Declaração de variáveis ---
let nome = "Paula";
const idade = 21;
var ativo = true;

// --- Função genérica ---
function saudacao(usuario) {
  return `Olá, ${usuario}! Bem-vindo(a) ao sistema.`;
}

// --- Objeto exemplo ---
const usuario = {
  nome: "Paula",
  idade: 25,
  ativo: true,
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

// --- Estrutura de decisão ---
if (ativo) {
  console.log(saudacao(nome));
} else {
  console.log("Usuário inativo.");
}

// --- Estrutura de repetição ---
for (let i = 1; i <= 5; i++) {
  console.log(`Contagem: ${i}`);
}

// --- Manipulação de array ---
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((n) => n * 2);
console.log("Números dobrados:", dobrados);

// --- Uso de Promises (assíncrono) ---
function carregarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true;
      if (sucesso) resolve("Dados carregados com sucesso!");
      else reject("Erro ao carregar dados.");
    }, 2000);
  });
}

carregarDados()
  .then((msg) => console.log(msg))
  .catch((erro) => console.error(erro))
  .finally(() => console.log("Processo finalizado."));

// --- Função de inicialização ---
function iniciarApp() {
  console.log("Aplicação iniciada.");
  usuario.saudacao();
}

iniciarApp();

