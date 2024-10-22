function verificarIdade() {
    const dataNascimento = new Date(document.getElementById('idade').value);
    const hoje = new Date();
    let idadeAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    const resultado = document.getElementById('resultado');
    const tempoTerra = document.getElementById('tempoTerra');

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idadeAnos--;
    }

    resultado.classList.add("fade-out");
    tempoTerra.classList.add("fade-out");

    setTimeout(() => {
        if (idadeAnos == 18) {
            resultado.textContent = "Vai pro exército, princesa!";
        } else if (idadeAnos < 18) {
            resultado.textContent = "Você tem menos de 18 anos.";
        } else if (idadeAnos > 18) {
            resultado.textContent = "Já pode ir preso!";
        }
        
        if (idadeAnos < 0) {
            resultado.textContent = "Primo da Inês?........... inexistente";
        }

        calcularTempoTerra(dataNascimento, idadeAnos);

        resultado.classList.remove("fade-out");
        tempoTerra.classList.remove("fade-out");
        resultado.classList.add("fade-in");
        tempoTerra.classList.add("fade-in");
    }, 1000); // Duração do efeito de saída
}

function calcularTempoTerra(dataNascimento, idadeAnos) {
    const agora = new Date();

    // Diferença total em milissegundos
    const diferenca = agora - dataNascimento;

    // Calcular tempo em diferentes unidades
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30.44); // Aproximação

    const diasRestantes = dias % 7;
    const semanasRestantes = semanas % 52;
    
    // Exibir os resultados
    const tempoTerra = document.getElementById('tempoTerra');
    tempoTerra.textContent = `Você tem ${idadeAnos} anos, ${semanasRestantes} semanas e ${diasRestantes} dias.`;
}
