const formCadastro = document.getElementById("formCadastro");

const parametros = new URLSearchParams(window.location.search);
const idPaciente = parametros.get("id");

const pacientes = JSON.parse(
    localStorage.getItem("pacientes")
) || [];

const paciente = pacientes.find(
    pessoa => pessoa.id == idPaciente
);

if (paciente) {

    document.querySelector(".pagina-cabecalho h2").textContent =
        "Editar paciente";

    document.querySelector(".pagina-cabecalho p").textContent =
        "Altere as informações do paciente.";

    document.getElementById("nome").value =
        paciente.nome || "";

    document.getElementById("cpf").value =
        paciente.cpf || "";

    document.getElementById("nascimento").value =
        paciente.nascimento || "";

    document.getElementById("sexo").value =
        paciente.sexo || "";

    document.getElementById("sangue").value =
        paciente.sangue || "";

    document.getElementById("altura").value =
        paciente.altura || "";

    document.getElementById("peso").value =
        paciente.peso || "";

    document.getElementById("nomeMae").value =
        paciente.nomeMae || "";

    document.getElementById("nomePai").value =
        paciente.nomePai || "";

    document.getElementById("telefone").value =
        paciente.telefone || "";

    document.getElementById("endereco").value =
        paciente.endereco || "";

    document.getElementById("alergias").value =
        paciente.alergias || "";

    document.getElementById("medicamentosUso").value =
        paciente.medicamentosUso || "";

    document.getElementById("medicamentosAdministrados").value =
        paciente.medicamentosAdministrados || "";

    document.getElementById("observacoes").value =
        paciente.observacoes || "";

    formCadastro.querySelector(
        "button[type='submit']"
    ).textContent = "Salvar alterações";
}

formCadastro.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const dados = {

        nome: document.getElementById("nome").value.trim(),

        cpf: document.getElementById("cpf").value.trim(),

        nascimento: document.getElementById("nascimento").value,

        sexo: document.getElementById("sexo").value,

        sangue: document.getElementById("sangue").value,

        altura: document.getElementById("altura").value,

        peso: document.getElementById("peso").value,

        nomeMae: document.getElementById("nomeMae").value.trim(),

        nomePai: document.getElementById("nomePai").value.trim(),

        telefone: document.getElementById("telefone").value.trim(),

        endereco: document.getElementById("endereco").value.trim(),

        alergias: document.getElementById("alergias").value.trim(),

        medicamentosUso:
            document.getElementById("medicamentosUso").value.trim(),

        medicamentosAdministrados:
            document.getElementById("medicamentosAdministrados").value.trim(),

        observacoes:
            document.getElementById("observacoes").value.trim()
    };

    if (paciente) {

        const indice = pacientes.findIndex(
            pessoa => pessoa.id == idPaciente
        );

        pacientes[indice] = {
            ...pacientes[indice],
            ...dados
        };

        localStorage.setItem(
            "pacientes",
            JSON.stringify(pacientes)
        );

        alert("Paciente atualizado com sucesso.");

        window.location.href =
            `verpac.html?id=${idPaciente}`;

    } else {

        const novoPaciente = {
            id: Date.now(),
            ...dados
        };

        pacientes.push(novoPaciente);

        localStorage.setItem(
            "pacientes",
            JSON.stringify(pacientes)
        );

        alert("Paciente cadastrado com sucesso.");

        window.location.href =
            `verpac.html?id=${novoPaciente.id}`;
    }
});