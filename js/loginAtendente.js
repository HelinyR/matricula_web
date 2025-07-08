document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formLoginAtendente');
    const msg = document.getElementById('errorMessage');

    if (!form) {
        console.error('Formulário de login do atendente não encontrado (id="formLoginAtendente")');
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        msg.textContent = '';
        msg.style.display = 'none';

        const email = form.email.value.trim();
        const password = form.password.value;

        // NOVO: Verifica se o reCAPTCHA foi marcado
        if (typeof grecaptcha === 'undefined' || grecaptcha.getResponse().length === 0) {
            msg.textContent = 'Por favor, confirme que você não é um robô.';
            msg.style.display = 'block';
            return;
        }

        // NOVO: Pega o token do reCAPTCHA v2
        const recaptchaToken = grecaptcha.getResponse();

        try {
            const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/login/atendente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // ALTERAÇÃO: envia o token no campo correto 'g-recaptcha-response'
                body: JSON.stringify({ email, senha: password, 'g-recaptcha-response': recaptchaToken })
            });

            if (!response.ok) {
                let erro;
                try {
                    erro = await response.json();
                } catch (e) {
                    erro = { mensagem: 'Erro desconhecido ao fazer login.' };
                }
                msg.textContent = erro.mensagem || erro.erro || 'Erro ao fazer login.';
                msg.style.display = 'block';
                return;
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = 'telaAtendente.html';
            } else {
                msg.textContent = 'Token não recebido do servidor.';
                msg.style.display = 'block';
            }
        } catch (error) {
            msg.textContent = 'Erro ao conectar com o servidor.';
            msg.style.display = 'block';
        }
    });
});
