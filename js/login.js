const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;

    const enfermeiras = JSON.parse(
        localStorage.getItem("enfermeiras")
    ) || [];

    const enfermeira = enfermeiras.find(
        pessoa =>
            pessoa.email === email &&
            pessoa.senha === senha
    );

    if (!enfermeira) {
        alert("E-mail ou senha incorretos.");
        return;
    }

    localStorage.setItem(
        "enfermeiraLogada",
        JSON.stringify(enfermeira.id)
    );

    window.location.href = "index.html";
});