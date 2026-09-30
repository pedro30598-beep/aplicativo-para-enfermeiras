const btnTema = document.getElementById("btnTema");

if (btnTema) {
    btnTema.addEventListener("click", () => {

        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {
            btnTema.textContent = "Tema claro";
            localStorage.setItem("tema", "escuro");
        } else {
            btnTema.textContent = "Tema escuro";
            localStorage.setItem("tema", "claro");
        }

    });

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        btnTema.textContent = "Tema claro";
    }
}

const btnSair = document.getElementById("btnSair");

if (btnSair) {
    btnSair.addEventListener("click", function () {

        localStorage.removeItem("enfermeiraLogada");

        window.location.href = "login.html";

    });
}