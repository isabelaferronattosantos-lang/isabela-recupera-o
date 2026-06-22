document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('fake-news-form');
    const resultadoDiv = document.getElementById('resultado-quiz');

    quizForm.addEventListener('submit', (event) => {
        // Evita o recarregamento padrão da página
        event.preventDefault();

        // Captura do Nome
        const nomeUsuario = document.getElementById('nome').value.trim();

        // Captura das respostas selecionadas
        const r1 = document.querySelector('input[name="pergunta1"]:checked');
        const r2 = document.querySelector('input[name="pergunta2"]:checked');

        let acertos = 0;

        // Sistema de pontuação estruturado
        if (r1 && r1.value === 'correto') acertos++;
        if (r2 && r2.value === 'correto') acertos++;

        // Manipulação avançada do DOM para exibir o resultado estilizado na tela
        resultadoDiv.className = 'resultado-visivel'; // Ativa a classe CSS
        
        if (acertos === 2) {
            resultadoDiv.style.backgroundColor = '#d4edda';
            resultadoDiv.style.color = '#155724';
            resultadoDiv.innerHTML = `🌟 Excelente, ${nomeUsuario}! Você acertou ${acertos}/2 perguntas. Você demonstra ótimas práticas de Cidadania Digital e sabe se proteger contra deepfakes!`;
        } else if (acertos === 1) {
            resultadoDiv.style.backgroundColor = '#fff3cd';
            resultadoDiv.style.color = '#856404';
            resultadoDiv.innerHTML = `⚠️ Bom trabalho, ${nomeUsuario}! Você acertou ${acertos}/2. Atenção: no mundo digital impulsionado por IA, até mídias convincentes precisam ser checadas duas vezes.`;
        } else {
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            resultadoDiv.innerHTML = `🚨 Atenção, ${nomeUsuario}! Você não acertou as questões de checagem. Compartilhar mídias sem validação espalha desinformação. Que tal revisar nossas dicas acima?`;
        }

        // Limpa as seleções do formulário após o envio para permitir novo teste
        quizForm.reset();
    });
});
