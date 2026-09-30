const enfermeiraLogada = localStorage.getItem("enfermeiraLogada");

if (!enfermeiraLogada) {
    window.location.href = "login.html";
}