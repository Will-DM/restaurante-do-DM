
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const contactResponse = document.getElementById('contactResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Coleta os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Constrói a URL de redirecionamento com os parâmetros
            const confirmationUrl = `response.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&mensagem=${encodeURIComponent(mensagem)}`;

            // Redireciona para a página de confirmação
            window.location.href = confirmationUrl;
        });
    }
});
