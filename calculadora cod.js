// Obtém o elemento do visor pelo ID
const visor = document.getElementById('visor');

/**
 * Adiciona o valor do botão clicado ao visor.
 * @param {string} valor - O número ou operador.
 */
function appendToVisor(valor) {
    visor.value += valor;
}

/**
 * Limpa todo o conteúdo do visor.
 */
function limparVisor() {
    visor.value = '';
}

/**
 * Apaga o último caractere do visor.
 */
function apagarUltimo() {
    // Pega o valor atual e remove o último caractere
    visor.value = visor.value.slice(0, -1);
}

/**
 * Calcula a expressão matemática no visor.
 * Usa a função eval() para avaliar a string como código JavaScript.
 * (Atenção: eval() não é recomendado para entradas de usuários não confiáveis
 * em aplicações mais complexas, mas é simples para este exemplo).
 */
function calcular() {
    try {
        // Usa a função nativa eval() para calcular a expressão
        visor.value = eval(visor.value);
    } catch (error) {
        // Exibe "Erro" se a expressão for inválida
        visor.value = 'Erro';
    }
}