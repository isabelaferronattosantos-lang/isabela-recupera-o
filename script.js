// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o formulário do Quiz pelo ID
    const quizForm = document.getElementById('fake-news-form');

    // Escuta o evento de envio (submit) do formulário
    quizForm.addEventListener('submit', (event) => {
        // Impede a página de recarregar ao enviar o formulário
        event.preventDefault();

        // Captura o nome digitado pelo usuário
        const nomeUsuario = document.getElementById('nome').value;

        // Captura a opção selecionada no formato de rádio
        const opcaoSelecionada = document.querySelector('input[name="checagem"]:checked');

        // Validação simples: verifica se o usuário respondeu a pergunta
        if (!opcaoSelecionada) {
            alert(`Por favor, ${nomeUsuario}, selecione uma das opções antes de enviar!`);
            return;
        }

        // Lógica de feedback baseada na resposta
        const resposta = opcaoSelecionada.value;
        
        if (resposta === 'sempre') {
            alert(`Parabéns, ${nomeUsuario}! Você pratica a cidadania digital e ajuda a combater as fake news.`);
        } else if (resposta === 'as-vezes') {
            alert(`Muito bem, ${nomeUsuario}, mas lembre-se: na era das deepfakes, até o que parece real pode ser manipulado. Fique atento!`);
        } else {
            alert(`Atenção, ${nomeUsuario}! Compartilhar sem checar pode espalhar desinformação gerada por IA. Que tal mudar esse hábito?`);
        }

        // Limpa o formulário após o envio
        quizForm.reset();
    });

});
