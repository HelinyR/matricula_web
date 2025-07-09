async function carregarAtendentes() {
    const tabela = document.getElementById('tabelaAtendentes').querySelector('tbody');
    const msg = document.getElementById('msgAtendentes');
    tabela.innerHTML = '';
    msg.style.display = 'none';

    const token = localStorage.getItem('token');
    console.log('[carregarAtendentes] Token:', token);

    try {
        const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/atendente', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('[carregarAtendentes] Status:', response.status);

        if (!response.ok) {
            let erro;
            try {
                erro = await response.json();
            } catch (e) {
                erro = { message: 'Erro desconhecido ao buscar atendentes.' };
            }
            console.error('[carregarAtendentes] Erro:', erro);
            msg.textContent = erro.erro || erro.message || 'Erro ao buscar atendentes.';
            msg.style.display = 'block';
            return;
        }

        const atendentes = await response.json();
        console.log('[carregarAtendentes] Dados recebidos:', atendentes);

        if (!Array.isArray(atendentes) || atendentes.length === 0) {
            msg.textContent = 'Nenhum atendente encontrado.';
            msg.style.display = 'block';
            return;
        }

        atendentes.forEach(at => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${at.nome}</td>
                <td>${at.cpf}</td>
                <td>${at.data_nascimento ? new Date(at.data_nascimento).toLocaleDateString() : ''}</td>
                <td>${at.telefone}</td>
                <td>${at.endereco}</td>
                <td>${at.rg}</td>
                <td>${at.email}</td>
            `;
            tabela.appendChild(tr);
        });
    } catch (error) {
        console.error('[carregarAtendentes] Erro de conexão:', error);
        msg.textContent = 'Erro ao conectar com o servidor.';
        msg.style.display = 'block';
    }
}



async function carregarSupervisores() {
    const tabela = document.getElementById('tabelaSupervisores')?.querySelector('tbody');
    const msg = document.getElementById('msgSupervisores');
    if (!tabela || !msg) return;
    tabela.innerHTML = '';
    msg.style.display = 'none';

    try {
        const token = localStorage.getItem('token');
        const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/supervisor', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const erro = await response.json();
            msg.textContent = erro.erro || erro.message || 'Erro ao buscar supervisores.';
            msg.style.display = 'block';
            return;
        }

        const supervisores = await response.json();
        if (!Array.isArray(supervisores) || supervisores.length === 0) {
            msg.textContent = 'Nenhum supervisor encontrado.';
            msg.style.display = 'block';
            return;
        }

        supervisores.forEach(sv => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sv.nome}</td>
                <td>${sv.cpf}</td>
                <td>${sv.data_nascimento ? new Date(sv.data_nascimento).toLocaleDateString() : ''}</td>
                <td>${sv.telefone}</td>
                <td>${sv.endereco}</td>
                <td>${sv.rg}</td>
                <td>${sv.email}</td>
            `;
            tabela.appendChild(tr);
        });
    } catch (error) {
        msg.textContent = 'Erro ao conectar com o servidor.';
        msg.style.display = 'block';
    }
}

async function carregarCandidatos() {
    const tabela = document.getElementById('tabelaCandidatos')?.querySelector('tbody');
    const msg = document.getElementById('msgCandidatos');
    if (!tabela || !msg) return;
    tabela.innerHTML = '';
    msg.style.display = 'none';

    const token = localStorage.getItem('token');
    console.log('[carregarCandidatos] Token:', token);

    try {
        const response = await fetch(window.APP_CONFIG.API_BASE_URL + '/candidato', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('[carregarCandidatos] Status:', response.status);

        if (!response.ok) {
            let erro;
            try {
                erro = await response.json();
            } catch (e) {
                erro = { message: 'Erro desconhecido ao buscar candidatos.' };
            }
            console.error('[carregarCandidatos] Erro:', erro);
            msg.textContent = erro.erro || erro.message || 'Erro ao buscar candidatos.';
            msg.style.display = 'block';
            return;
        }

        const candidatos = await response.json();
        console.log('[carregarCandidatos] Dados recebidos:', candidatos);

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
        console.error('[carregarCandidatos] Erro de conexão:', error);
        msg.textContent = 'Erro ao conectar com o servidor.';
        msg.style.display = 'block';
    }
}

// Chame essa função ao mostrar a seção de atendentes
function showSection(sectionId) {
    document.querySelectorAll('.main-content .section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    if (sectionId === 'listarAtendentes') {
        carregarAtendentes();
    }
    if (sectionId === 'listarSupervisores') {
        carregarSupervisores();
    }
    if (sectionId === 'listarCandidatos') {
        carregarCandidatos();
    }
    // Fecha o submenu de consulta após seleção
    const submenu = document.getElementById('submenuConsultar');
    if (submenu) submenu.classList.remove('show');
}

// Exibe tela de boas-vindas ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    showSection('bemVindo');
});