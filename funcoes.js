const fs = require('fs');

const vetorNumeros = [];

function f_gerar()
{
    vetorNumeros.length = 0;
    console.log(vetorNumeros.length);
    for (let i = 0; i < 50; i++) {
        num = Math.floor(Math.random()*50);
        vetorNumeros.push(num);
        console.log(num);
        
        document.querySelector('#valor-max').textContent = "";
        document.querySelector('#valor-min').textContent = "";
        document.querySelector('#tempo').textContent = "";
    }  
    fs.writeFileSync('dados_coletados.txt', String(vetorNumeros.join('\n')));
}

function f_valormin()
{
    const numeroMin = Math.min(...vetorNumeros);
    console.log("mínimo: " + numeroMin);
    document.getElementById('valor-min').textContent =  numeroMin;
}

function f_valormax()
{
    const numeroMax = Math.max(...vetorNumeros);
    console.log("maximo: " + numeroMax);
    document.querySelector('#valor-max').textContent = numeroMax;
}

function f_ordenar()
{
    const start = performance.now();
    ordemNumeros = vetorNumeros.sort((a,b) => a - b);
    console.log(ordemNumeros);
    fs.writeFileSync('dados_coletados.txt', String(ordemNumeros.join('\n')));

    const end = performance.now();
    tempoDeExecucao = end - start;
    console.log(`Execution time: ${tempoDeExecucao} ms`);
    document.querySelector('#tempo').textContent = tempoDeExecucao + 'ms';
}

function f_popup()
{
    mensagem = fs.readFileSync('mensagem.txt');
    alert(mensagem);
}

function close_window()
{
    close();
}