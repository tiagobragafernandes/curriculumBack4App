    function mostrarContatos() {
    const contatos = document.getElementById("descricao-contato");

    if(contatos.style.display == "none" || contatos.style.display === ""){
        contatos.style.display = "block";
    } else{
        contatos.style.display = "none";
    }
}
