// Função para alternar a visibilidade dos formulários
function toggleForm(formId) {
    const forms = ['search-form', 'create-job-form', 'edit-job-form'];
    forms.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    if (formId) {
        document.getElementById(formId).classList.toggle('hidden');
    }
}

// Gera uma hash aleatória
function generateHash() {
    return Math.random().toString(36).substr(2, 9);
}

// Adiciona eventos de clique aos botões
function addClickListeners() {
    document.getElementById('procurar-btn').addEventListener('click', (event) => {
        event.preventDefault();
        toggleForm('search-form');
    });

    document.getElementById('criar-btn').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('hash').value = generateHash();
        toggleForm('create-job-form');
    });

    document.getElementById('editar-btn').addEventListener('click', (event) => {
        event.preventDefault();
        toggleForm('edit-job-form');
    });

    // Funções para fechar os formulários
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            toggleForm();
        });
    });

    // Função para criar trabalho
    document.getElementById('create-job-button').addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Trabalho criado com sucesso!");
    });

    // Função para editar trabalho
    document.getElementById('edit-job-button').addEventListener('click', (event) => {
        event.preventDefault();
        const hash = document.getElementById('edit-hash').value;
        if (hash) {
            console.log("Buscando trabalho com a hash:", hash);
        } else {
            alert("Por favor, insira a hash do trabalho que deseja editar.");
        }
    });
}

// Inicia os eventos ao carregar o documento
document.addEventListener('DOMContentLoaded', addClickListeners);
