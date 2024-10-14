// Tutorial do Senhas Fortes + Convertido Py -> JS

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const senha = document.getElementById('senha').value;
    verificarEAtualizarSenha(senha);
});

document.getElementById('senha').addEventListener('input', function() {
    verificarEAtualizarSenha(this.value);
});

window.onload = function() {
    verificarEAtualizarSenha(''); 
};

function verificarForcaSenha(senha) {
    let score = 0;

    if (senha.length >= 8) {
        if (/[A-Z]/.test(senha)) score++;
        if (/[a-z]/.test(senha)) score++;
        if (/[0-9]/.test(senha)) score++;
        if (/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(senha)) score++;
    }

    return score;
}

function atualizarIndicadorForca(score) {
    const strengthIndicator = document.getElementById('strength-indicador');
    const strengthText = document.getElementById('strenght-text');
    const strengths = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Média",
        3: "Forte",
        4: "Muito forte"
    };

    strengthText.textContent = `Força da senha: ${strengths[score]}`;
    const width = (score / 4) * 100;
    strengthIndicator.style.width = `${width}%`;

    const colors = ['#e31212', '#eda429', '#f5df22', '#1cd22c', '#1c9927'];
    strengthIndicator.style.backgroundColor = colors[Math.min(score, colors.length - 1)];
}

function verificarEAtualizarSenha(senha) {
    const score = verificarForcaSenha(senha);
    atualizarIndicadorForca(score);

    const mensagem = document.getElementById('mensagem');
    if (score === 4) {
        mensagem.textContent = "SENHA FORTE!!! PARABÉNS";
    } else {
        if (senha.length < 8) {
            mensagem.textContent = "Tenha no mínimo 8 caracteres.";
        } else if (!/[A-Z]/.test(senha)) {
            mensagem.textContent = "Use ao menos uma letra maiúscula.";
        } else if (!/[a-z]/.test(senha)) {
            mensagem.textContent = "Use ao menos uma letra minúscula.";
        } else if (!/[0-9]/.test(senha)) {
            mensagem.textContent = "Use ao menos um número.";
        } else if (!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(senha)) {
            mensagem.textContent = "Use ao menos um caractere especial.";
        }
    }
}

// Mostra Senha
const password = document.getElementById('senha');
const icon = document.getElementById('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type','password')
        icon.classList.remove('hide')
    }
}