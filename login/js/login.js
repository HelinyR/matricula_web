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
            //vamo fazer a requisiçãoa para o backend aqui
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
