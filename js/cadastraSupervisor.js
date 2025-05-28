document.getElementById('cadastraSupervisorForm').addEventListener('submit', async function (e){
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const data_nascimento = document.getElementById('dataNascimento').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const rg = document.getElementById('rg').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const supervisor ={
        nome,
        cpf,
        data_nascimento,
        telefone,
        endereco,
        rg,
        email,
        senha
    };

    try{
        const response = await fetch('http://127.0.0.1:3000/supervisor',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(supervisor)
        });

        if( response.ok){
            alert('Supervisor cadastrado com sucesso!');
            document.getElementById('cadastraSupervisorForm').reset();
            document.getElementById('errorMessage').style.display = 'none';
        }else{
            const errorData = await response.json();
            document.getElementById('errorMessage').textContent = errorData.message || 'Erro ao cadastrar supervisor. Verifique os dados e tente novamente.';
            document.getElementById('errorMessage').style.display = 'block';
        }
    }catch (error){
        document.getElementById('errorMessage').textContent = 
            'Erro ao conectar com o servidor.';
        document.getElementById('errorMessage').style.display = 'block';
    }
});