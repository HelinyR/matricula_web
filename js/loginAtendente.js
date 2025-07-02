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

        // Corrigido para pegar os campos corretos do formulário
        const email = form.email.value.trim();
        const password = form.password.value;

        try {
            const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/login/atendente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha: password })
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
