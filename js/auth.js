(function() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '../index.html';
        return;
    }

    // Verifica se é um JWT válido e não expirado
    function isValidJWT(token) {
        const parts = token.split('.');
        if (parts.length !== 3) return false;
        try {
            const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
            if (!payload.exp) return false;
            // exp está em segundos desde epoch
            const now = Math.floor(Date.now() / 1000);
            return payload.exp > now;
        } catch (e) {
            return false;
        }
    }

    if (!isValidJWT(token)) {
        localStorage.removeItem('token');
        window.location.href = '../index.html';
        return;
    }

    // Função utilitária para extrair o payload do JWT
    window.decodeJWT = function(token) {
        if (!token) return null;
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        try {
            const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
            return JSON.parse(payload);
        } catch (e) {
            return null;
        }
    };

    // Função global para checar tipo de usuário
    window.checkUserType = function(expectedType) {
        const token = localStorage.getItem('token');
        const payload = window.decodeJWT(token);
        if (!payload || payload.tipo_usuario !== expectedType) {
            localStorage.removeItem('token');
            window.location.href = '../index.html';
        }
    };

    // Exemplo de log (opcional)
    // const payload = window.decodeJWT(token);
    // console.log('Payload JWT:', payload);
})();