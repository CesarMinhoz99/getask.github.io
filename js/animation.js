// animation.js

// Função para ocultar a mensagem de boas-vindas
function hideWelcomeMessage() {
    const message = document.getElementById('welcome-message');
    const description = document.getElementById('welcome-description');

    message.classList.add('fade-out'); // Adiciona a classe de animação
    description.classList.add('fade-out'); // Adiciona a classe de animação

    setTimeout(() => {
        message.classList.add('hidden'); // Esconde o elemento após a animação
        description.classList.add('hidden'); // Esconde o elemento após a animação
    }, 1000); // 1000 milissegundos = 1 segundo (duração da animação)
}


setTimeout(hideWelcomeMessage, 100);
