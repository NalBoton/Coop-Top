// Anima entrada dos elementos ao carregar
window.addEventListener("load", function() {
    document.getElementById("Rosto").classList.add("fade-up");
    document.getElementById("vers").classList.add("fade-up");
    document.getElementById("botao").classList.add("fade-up");
});

// Mostra o overlay com animação ao clicar no botão
document.getElementById("botao").addEventListener("click", function() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    // Reinicia animação da mensagem
    const mensagem = document.getElementById("mensagem");
    mensagem.style.opacity = "0";
    mensagem.style.transform = "scale(0.8)";
    mensagem.style.animation = "fadeZoom 0.8s ease forwards";
});
