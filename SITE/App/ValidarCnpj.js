// Arquivo script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const cnpjInput = document.getElementById('cnpj');
    const cnpjError = document.getElementById('cnpjError');

    // Adicionar evento de blur para o campo CNPJ
    cnpjInput.addEventListener('blur', () => {
        const cnpjValue = cnpjInput.value.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos do CNPJ

        if (!validarCNPJ(cnpjValue)) {
            cnpjError.style.display = 'block'; // Exibe a mensagem de erro
        } else {
            cnpjError.style.display = 'none'; // Esconde a mensagem de erro se o CNPJ for válido
        }
    });

    // Adicionar evento de submit para o formulário
    form.addEventListener('submit', (event) => {
        const cnpjValue = cnpjInput.value.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos do CNPJ

        if (!validarCNPJ(cnpjValue)) {
            cnpjError.style.display = 'block'; // Exibe a mensagem de erro
            event.preventDefault(); // Impede o envio do formulário
        } else {
            cnpjError.style.display = 'none'; // Esconde a mensagem de erro se o CNPJ for válido
        }
    });
});
