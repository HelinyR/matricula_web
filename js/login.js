document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    console.log("login.js carregado");

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;

        if (!email || !senha) {
            showError('Por favor, preencha todos os campos');
            return;
        }

        if (grecaptcha.getResponse().length === 0) {
            showError('Por favor, confirme que você não é um robô.');
            return;
        }

        //Pega o token do reCAPTCHA v2 gerado automaticamente
        const recaptchaToken = grecaptcha.getResponse();

        try {
            const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/login/supervisor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                //envia o token no campo 'g-recaptcha-response' para backend validar
                body: JSON.stringify({ email, senha, 'g-recaptcha-response': recaptchaToken })
            });

            let data = {};
            try {
                data = await response.json();
            } catch {
                showError('Erro inesperado do servidor.');
                return;
            }

            if (response.ok) {
                localStorage.setItem('token', data.token);
                window.location.href = '/html/telaSupervisor.html';
            } else {
                showError(data.erro || data.message || data.mensagem || 'Erro ao fazer login');
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
