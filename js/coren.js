const corenOverlay = document.getElementById("corenOverlay");
const formCoren = document.getElementById("formCoren");
const campoCoren = document.getElementById("coren");

const idLogado = JSON.parse(
    localStorage.getItem("enfermeiraLogada")
);

const enfermeiras = JSON.parse(
    localStorage.getItem("enfermeiras")
) || [];

const enfermeira = enfermeiras.find(
    pessoa => pessoa.id === idLogado
);

if (enfermeira && !enfermeira.coren) {
    corenOverlay.classList.add("aberto");
}

formCoren.addEventListener("submit", function (event) {
    event.preventDefault();

    const coren = campoCoren.value.trim();

    if (!coren) {
        alert("Informe o número do COREN.");
        return;
    }

    enfermeira.coren = coren;

    localStorage.setItem(
        "enfermeiras",
        JSON.stringify(enfermeiras)
    );

    corenOverlay.classList.remove("aberto");
});