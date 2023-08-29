function criarCarro() {

    let marca = document.getElementById("input-marca").value;
    let modelo = document.getElementById("input-modelo").value;
    let ano = document.getElementById("input-ano").value;
    let cor = document.getElementById("input-cor").value;
    let km = document.getElementById("input-km").value;
    let preco = document.getElementById("input-preco").value;
    let imagem = document.getElementById("input-imagem").value;


    const carro = new carro(marca, modelo, ano, cor, km, preco, imagem);


    listaCarros.add(carro);
    renderizarConteudo();

}

class Carro{
    constructor(marca, modelo, ano, cor, km, preco, imagem) {

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.km = km;
        this.preco = preco;
        this.imagem = imagem;
    }
}


function verificarInputs() {
    let marca = document.getElementById("input-marca").value;
    let modelo = document.getElementById("input-modelo").value;
    let ano = document.getElementById("input-ano").value;
    let cor = document.getElementById("input-cor").value;
    let km = document.getElementById("input-km").value;
    let preco = document.getElementById("input-preco").value;
    let imagem = document.getElementById("input-imagem").value;

    if (marca == "" || modelo == "" || ano == "" || cor == "" || km == "" || preco == "" || imagem == "") {

        console.log("Os dados estão vazios!");

        return true;
    } else {
        console.log("Os dados não estão em branco.");
        return false;
    }
}

function envieMsg(msg, tipo) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}





class listaCarros {


    constructor() {


        this.listaCarros = [];
    }

    add(parametro) {


        if (verificarInputs()) {
            envieMsg("Preencha todos os campos!", "erro");
        } else if (! isURLValida(parametro.imgLink)) {
            envieMsg("URL inválida!", "erro");
        } else {
            this.listaCarros.push(parametro);
            limparInputs();
            envieMsg("Cadastrado com sucesso!", "sucesso");

        }
    }
}

const listaCarros = new listaCarros();


function limparInputs() {
     marca = document.getElementById("input-marca").value = ""; 
     modelo = document.getElementById("input-modelo").value = "";
     ano = document.getElementById("input-ano").value = "";
     cor = document.getElementById("input-cor").value = "";
     km = document.getElementById("input-km").value = "";
     preco = document.getElementById("input-preco").value = "";
     imagem = document.getElementById("input-imagem").value = "";
}


function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}





