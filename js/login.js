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

            const data = await response.json();

            if (response.ok) {
                //salva o token
                localStorage.setItem('token', data.token);
                window.location.href = '/html/telaSupervisor.html';
            } else {
                showError(data.erro || data.message || 'Erro ao fazer login');
            }
        } catch (error) {
            showError('Erro ao processar a requisição');
            console.error('Erro:', error);
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});