const fichaPaciente = document.getElementById("fichaPaciente");

const parametros = new URLSearchParams(window.location.search);
const idPaciente = parametros.get("id");

const pacientes = JSON.parse(
    localStorage.getItem("pacientes")
) || [];

const paciente = pacientes.find(
    pessoa => pessoa.id == idPaciente
);

if (!paciente) {
    fichaPaciente.innerHTML = `
        <div class="nenhum-paciente">
            <h3>Paciente não encontrado</h3>
            <p>Não foi possível encontrar os dados deste paciente.</p>
            <a href="pacientes.html" class="botao">
                Voltar para pacientes
            </a>
        </div>
    `;
} else {

    fichaPaciente.innerHTML = `

        <div class="ficha-topo">

            <div>
                <span class="ficha-label">PACIENTE</span>

                <h3>
                    ${paciente.nome}
                </h3>
            </div>

            <span class="tipo-sanguineo">
                ${paciente.sangue || "Não informado"}
            </span>

        </div>


        <div class="ficha-secao">

            <h3>Dados pessoais</h3>

            <div class="ficha-grid">

                <div class="ficha-item">
                    <span>CPF</span>
                    <strong>${paciente.cpf || "Não informado"}</strong>
                </div>

                <div class="ficha-item">
                    <span>Data de nascimento</span>
                    <strong>${paciente.nascimento || "Não informado"}</strong>
                </div>

                <div class="ficha-item">
                    <span>Sexo</span>
                    <strong>${paciente.sexo || "Não informado"}</strong>
                </div>

                <div class="ficha-item">
                    <span>Telefone</span>
                    <strong>${paciente.telefone || "Não informado"}</strong>
                </div>

                <div class="ficha-item">
                    <span>Nome da mãe</span>
                    <strong>${paciente.nomeMae || "Não informado"}</strong>
                </div>

                <div class="ficha-item">
                    <span>Nome do pai</span>
                    <strong>${paciente.nomePai || "Não informado"}</strong>
                </div>

                <div class="ficha-item ficha-largo">
                    <span>Endereço</span>
                    <strong>${paciente.endereco || "Não informado"}</strong>
                </div>

            </div>

        </div>


        <div class="ficha-secao">

            <h3>Dados físicos</h3>

            <div class="ficha-grid">

                <div class="ficha-item">
                    <span>Altura</span>
                    <strong>
                        ${paciente.altura ? paciente.altura + " cm" : "Não informado"}
                    </strong>
                </div>

                <div class="ficha-item">
                    <span>Peso</span>
                    <strong>
                        ${paciente.peso ? paciente.peso + " kg" : "Não informado"}
                    </strong>
                </div>

                <div class="ficha-item">
                    <span>Tipo sanguíneo</span>
                    <strong>
                        ${paciente.sangue || "Não informado"}
                    </strong>
                </div>

            </div>

        </div>


        <div class="ficha-secao">

            <h3>Alergias</h3>

            <div class="ficha-texto">
                ${paciente.alergias || "Nenhuma informação registrada."}
            </div>

        </div>


        <div class="ficha-secao">

            <h3>Medicamentos de uso habitual</h3>

            <div class="ficha-texto">
                ${paciente.medicamentosUso || "Nenhum medicamento registrado."}
            </div>

        </div>


        <div class="ficha-secao">

            <h3>Medicamentos a serem administrados</h3>

            <div class="ficha-texto">
                ${paciente.medicamentosAdministrados || "Nenhum medicamento registrado."}
            </div>

        </div>


        <div class="ficha-secao">

            <h3>Observações gerais</h3>

            <div class="ficha-texto">
                ${paciente.observacoes || "Nenhuma observação registrada."}
            </div>

        </div>


        <div class="ficha-acoes">

            <button
                type="button"
                class="botao"
                id="btnEditar"
            >
                Editar paciente
            </button>

            <button
                type="button"
                class="botao excluir"
                id="btnExcluir"
            >
                Excluir paciente
            </button>

        </div>
    `;


    document.getElementById("btnExcluir").addEventListener("click", function () {

        const confirmar = confirm(
            "Tem certeza que deseja excluir este paciente?"
        );

        if (!confirmar) {
            return;
        }

        const pacientesAtualizados = pacientes.filter(
            pessoa => pessoa.id != idPaciente
        );

        localStorage.setItem(
            "pacientes",
            JSON.stringify(pacientesAtualizados)
        );

        alert("Paciente excluído com sucesso.");

        window.location.href = "pacientes.html";
    });


    document.getElementById("btnEditar").addEventListener("click", function () {

        window.location.href = `cadastro.html?id=${paciente.id}`;
    });
}