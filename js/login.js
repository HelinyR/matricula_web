document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;

        if (!email || !senha) {
            showError('Por favor, preencha todos os campos');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/login/supervisor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            // Tenta ler a resposta como JSON, mesmo em erro
            let data = {};
            try {
                data = await response.json();
            } catch (jsonError) {
                // Se não for JSON, mostra erro genérico
                showError('Erro inesperado do servidor.');
                return;
            }

            if (response.ok) {
                localStorage.setItem('token', data.token);
                window.location.href = '/html/telaSupervisor.html';
            } else {
                // Mostra mensagem detalhada do backend
                showError(
                    data.erro ||
                    data.message ||
                    data.mensagem ||
                    'Erro ao fazer login'
                );
            }
        } catch (error) {
            showError('Erro ao conectar com o servidor.');
            console.error('Erro:', error);
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 4000);
    }
});