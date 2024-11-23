document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(`Email: ${email}, Password: ${password}`);
    // Aqui você pode adicionar a lógica de autenticação
});

window.onload = function() {
    alert("Alerta: Este não é o site oficial da Prime Video, é apenas um conceito simples feito por um desenvolvedor iniciante, favor não inserir e-mail ou senhas, todos os icones e o botão irão leva-lo para os serviços oficiais da Amazon");
};

