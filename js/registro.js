const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    const nomeValido = /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;

    if (!nomeValido.test(nome)) {
        alert("Digite seu nome completo usando apenas letras.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    if (!/[A-Z]/.test(senha)) {
        alert("A senha deve ter pelo menos uma letra maiúscula.");
        return;
    }

    if (!/[a-z]/.test(senha)) {
        alert("A senha deve ter pelo menos uma letra minúscula.");
        return;
    }

    if (!/[0-9]/.test(senha)) {
        alert("A senha deve ter pelo menos um número.");
        return;
    }

    if (!/[^A-Za-z0-9]/.test(senha)) {
        alert("A senha deve ter pelo menos um caractere especial.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    const enfermeiras = JSON.parse(
        localStorage.getItem("enfermeiras")
    ) || [];

    const emailExiste = enfermeiras.some(
        enfermeira => enfermeira.email === email
    );

    if (emailExiste) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    const novaEnfermeira = {
        id: Date.now(),
        nome: nome,
        email: email,
        senha: senha
    };

    enfermeiras.push(novaEnfermeira);

    localStorage.setItem(
        "enfermeiras",
        JSON.stringify(enfermeiras)
    );

    alert("Conta criada com sucesso.");

    window.location.href = "login.html";
});