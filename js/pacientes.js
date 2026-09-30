const listaPacientes = document.getElementById("listaPacientes");
const pesquisaPaciente = document.getElementById("pesquisaPaciente");

function carregarPacientes() {
    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    mostrarPacientes(pacientes);
}

function mostrarPacientes(pacientes) {
    listaPacientes.innerHTML = "";

    if (pacientes.length === 0) {
        listaPacientes.innerHTML = `
            <div class="nenhum-paciente">
                <h3>Nenhum paciente cadastrado</h3>
                <p>Cadastre um paciente para começar.</p>
            </div>
        `;
        return;
    }

    pacientes.forEach((paciente) => {
        const card = document.createElement("div");

        card.className = "paciente-card";

        card.innerHTML = `
            <div>
                <h3>${paciente.nome}</h3>
                <p>${paciente.nascimento || "Data não informada"}</p>
                <span>${paciente.sangue || "Tipo sanguíneo não informado"}</span>
            </div>

            <a href="verpac.html?id=${paciente.id}" class="botao secundario">
                Ver paciente
            </a>
        `;

        listaPacientes.appendChild(card);
    });
}

pesquisaPaciente.addEventListener("input", () => {
    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

    const pesquisa = pesquisaPaciente.value.toLowerCase();

    const resultado = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(pesquisa)
    );

    mostrarPacientes(resultado);
});

carregarPacientes();