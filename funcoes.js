const fs = require('fs');

const numeros = [];

function f_gerar()
{
    numeros.length = 0;
    console.log(numeros.length);
    for (let i = 0; i < 50; i++) {
        a = Math.floor(Math.random()*50);
        numeros.push(a);
        console.log(a);
    }  
    fs.writeFileSync('dados_coletados.txt', String(numeros.join('\n')));
}

function f_valormin()
{
    const min = Math.min(...numeros);
    console.log("mínimo: "+min);
    document.querySelector('#valor-min').textContent = min;
}

function f_valormax()
{
    const max = Math.max(...numeros);
    console.log("maximo: "+max);
    document.querySelector('#valor-max').textContent = max;
}

function f_ordenar()
{
    const start = performance.now();
    x = numeros.sort((a,b) => a - b);
    console.log(x);
    fs.writeFileSync('dados_coletados.txt', String(x.join('\n')));

    const end = performance.now();
    tempo = end - start;
    console.log(`Execution time: ${tempo} ms`);
    document.querySelector('#tempo').textContent = tempo + 'ms';
}

function f_popup()
{
    messege = fs.readFileSync('mensagem.txt');
    alert(messege);
}

function close_window()
{
    close();
}