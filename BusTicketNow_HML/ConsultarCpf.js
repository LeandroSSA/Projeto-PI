// Evento 'blur' para validar CPF ao sair do campo CPF
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('blur', function() {
        const cpfValue = cpfInput.value;
        const isValidCPF = validarCPF(cpfValue);

        const cpfError = document.getElementById('cpfError');
        if (!isValidCPF) {
            cpfError.style.display = 'inline'; // Exibir mensagem de erro
        } else {
            cpfError.style.display = 'none'; // Ocultar mensagem de erro
        }
    });
});
