document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

   
    console.log('Tentativa de login:', { username, password });

   
    alert(`Bem-vindo, ${username}!`);
});
