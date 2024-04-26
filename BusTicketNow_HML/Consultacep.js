document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');

    cepInput.addEventListener('blur', () => {
        const cepValue = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

        if (cepValue.length === 8) {
            const url = `https://viacep.com.br/ws/${cepValue}/json/`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('endereco').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    } else {
                        alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao consultar o CEP:', error);
                });
        }
    });
});

