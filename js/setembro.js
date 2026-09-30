const setembroAba = document.getElementById("setembroAba");

const setembroPainel = document.getElementById("setembroPainel");

const fecharSetembro = document.getElementById("fecharSetembro");

setembroAba.addEventListener("click", () => {

    setembroPainel.classList.add("aberto");

});


fecharSetembro.addEventListener("click", () => {

    setembroPainel.classList.remove("aberto");

});



setembroPainel.addEventListener("click", (event) => {

    if (event.target === setembroPainel) {

        setembroPainel.classList.remove("aberto");

    }

});