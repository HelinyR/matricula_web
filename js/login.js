document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        //nome

        // Aqui você pode adicionar validações básicas
        if (!email || !password) {
            showError('Por favor, preencha todos os campos');
            return;
        }

        try {
            // Aqui você implementará a chamada para o servidor
            // Exemplo de como será a estrutura:
            /*
            const response = await fetch('sua-url-api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            
            if (response.ok) {
                // Login bem sucedido
                window.location.href = '/dashboard.html';
            } else {
                showError(data.message || 'Erro ao fazer login');
            }
            */

            // Por enquanto, apenas simulamos um login
            console.log('Tentativa de login:', { email, password });
            showError('Funcionalidade de login será implementada em breve');
        } catch (error) {
            showError('Erro ao processar a requisição');
            console.error('Erro:', error);
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}); 
