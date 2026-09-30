let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

let lista = document.getElementById("listaPacientes");

if (pacientes.length === 0) {

    lista.innerHTML = "<p>Nenhum paciente cadastrado.</p>";

} else {

    pacientes.forEach(function(paciente, index) {

        lista.innerHTML += `
            <div class="paciente">

                <h2>Paciente ${index + 1}</h2>

                <p><strong>Nome:</strong> ${paciente.nome}</p>

                <p><strong>Idade:</strong> ${paciente.idade}</p>

                <p><strong>Nome da mãe:</strong> ${paciente.nomeMae}</p>

                <p><strong>Nome do pai:</strong> ${paciente.nomePai}</p>

                <p><strong>Altura:</strong> ${paciente.altura}</p>

                <p><strong>Peso:</strong> ${paciente.peso}</p>

                <p><strong>Gênero:</strong> ${paciente.genero}</p>

                <p><strong>Data de nascimento:</strong> ${paciente.dataNasc}</p>

                <p><strong>CPF:</strong> ${paciente.cpf}</p>

                <hr>

            </div>
        `;
    });
}