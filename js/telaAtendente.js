function showSection(sectionId) {
    document.querySelectorAll('.main-content .section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    if (sectionId === 'listarCandidatos') {
        carregarCandidatos();
    }
    if (sectionId === 'minhasInformacoes') {
        carregarMinhasInformacoes();
    }
    // Fecha o submenu de consulta após seleção
    const submenu = document.getElementById('submenuConsultar');
    if (submenu) submenu.classList.remove('show');
}

async function carregarCandidatos() {
    const tabela = document.getElementById('tabelaCandidatos').querySelector('tbody');
    const msg = document.getElementById('msgCandidatos');
    tabela.innerHTML = '';
    msg.style.display = 'none';

    const token = localStorage.getItem('token');
    try {
        const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/candidato', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            let erro;
            try {
                erro = await response.json();
            } catch (e) {
                erro = { message: 'Erro desconhecido ao buscar candidatos.' };
            }
            msg.textContent = erro.erro || erro.message || 'Erro ao buscar candidatos.';
            msg.style.display = 'block';
            return;
        }

        const candidatos = await response.json();
        if (!Array.isArray(candidatos) || candidatos.length === 0) {
            msg.textContent = 'Nenhum candidato encontrado.';
            msg.style.display = 'block';
            return;
        }

        candidatos.forEach(cd => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${cd.nome}</td>
                <td>${cd.cpf}</td>
                <td>${cd.data_nascimento ? new Date(cd.data_nascimento).toLocaleDateString() : ''}</td>
                <td>${cd.telefone}</td>
                <td>${cd.endereco}</td>
                <td>${cd.rg}</td>
                <td>${cd.email}</td>
            `;
            tabela.appendChild(tr);
        });
    } catch (error) {
        msg.textContent = 'Erro ao conectar com o servidor.';
        msg.style.display = 'block';
    }
}

function carregarMinhasInformacoes() {
    const infoDiv = document.getElementById('infoAtendente');
    const msg = document.getElementById('msgAtendente');
    infoDiv.innerHTML = '';
    msg.style.display = 'none';

    const token = localStorage.getItem('token');
    const payload = window.decodeJWT(token);

    if (!payload) {
        msg.textContent = 'Não foi possível obter suas informações.';
        msg.style.display = 'block';
        return;
    }

    // Exemplo de campos, ajuste conforme o payload do seu backend
    infoDiv.innerHTML = `
        <p><strong>ID:</strong> ${payload.usuario_id || ''}</p>
        <p><strong>Tipo:</strong> ${payload.tipo_usuario || ''}</p>
        <!-- Adicione outros campos relevantes do payload aqui -->
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('bemVindo');
});
