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

        // Obter os dados do formulário
        const companyName = document.getElementById('company-name').value;
        const jobName = document.getElementById('job-name').value;
        const cidade = document.getElementById('create-cidade').value;
        const description = document.getElementById('description').value;
        const valor = document.getElementById('valor').value;
        const contato = document.getElementById('contato').value;
        const hash = document.getElementById('hash').value;

        // Enviar os dados para o backend
        fetch('http://localhost/getask-backend/create_job.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                companyName: companyName,
                jobTitle: jobName,
                city: cidade,
                jobDescription: description,
                salary: valor,
                contact: contato,
                jobHash: hash
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Trabalho criado com sucesso!", data);
                toggleForm(); // Fecha o formulário após o sucesso
                fetchJobs(); // Atualiza a lista de empregos
            })
            .catch(error => {
                console.error('Erro ao criar trabalho:', error);
            });
    });

    // Função para editar trabalho
    document.getElementById('edit-job-button').addEventListener('click', (event) => {
        event.preventDefault();
        const hash = document.getElementById('edit-hash').value;
        if (hash) {
            console.log("Buscando trabalho com a hash:", hash);
            // Aqui você pode implementar a lógica para buscar e editar o trabalho
        } else {
            alert("Por favor, insira a hash do trabalho que deseja editar.");
        }
    });
}

// Função para buscar empregos e exibi-los
function fetchJobs() {
    fetch('http://localhost/getask-backend/get_jobs.php')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            const cardsContainer = jobList.querySelector('.cards-container');

            // Limpar os cartões existentes
            cardsContainer.innerHTML = '';

            // Criar e adicionar novos cartões
            data.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';
                jobCard.innerHTML = `
                    <h2>${job.jobTitle}</h2>
                    <p><strong>Cidade:</strong> ${job.city}</p>
                    <p><strong>Descrição:</strong> ${job.jobDescription}</p>
                    <p><strong>Valor:</strong> R$ ${job.salary}</p>
                    <p><strong>Contato:</strong> ${job.contact}</p>
                `;
                cardsContainer.appendChild(jobCard);
            });

            // Mostrar a lista de empregos
            jobList.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Erro ao buscar empregos:', error);
        });
}

// Inicia os eventos ao carregar o documento
document.addEventListener('DOMContentLoaded', () => {
    addClickListeners();
    fetchJobs(); // Chama a função para buscar e exibir empregos ao carregar a página
});
