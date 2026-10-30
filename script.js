let valorA = document.querySelector("input#valorBinarioA");
const binarioA = [];

let valorB = document.querySelector("input#valorBinarioB");
const binarioB = [];
let resultado = document.querySelector("p#res");

let corpo = document.querySelector("tbody#tabelaPrincipal");
let cabecalho = document.querySelector("tr#cabecalho");

function adicionarA() {
  if (valorA.value.length == 0) {
    resultado.style.color = "#b91c1c";
    resultado.innerHTML = "Você precisa informar um <strong>valor.</strong>";
    valorA.value = "";
    valorA.focus();
  } else if (Number(valorA.value) != 1 && Number(valorA.value) != 0) {
    resultado.style.color = "#b91c1c";
    resultado.innerHTML = "Apenas valores <strong>0 ou 1.</strong>";
    valorA.value = "";
    valorA.focus();
  } else {
    binarioA.push(Number(valorA.value));
    resultado.style.color = "#15803d";
    resultado.innerHTML = `Valor <strong>${Number(valorA.value)}</strong> adicionado!`;
    valorA.focus();
    valorA.value = "";
  }
}

function adicionarB() {
  if (valorB.value.length == 0) {
    resultado.style.color = "#b91c1c";
    resultado.innerHTML = "Você precisa informar um <strong>valor.</strong>";
    valorB.value = "";
    valorB.focus();
  } else if (Number(valorB.value) != 1 && Number(valorB.value) != 0) {
    resultado.style.color = "#b91c1c";
    resultado.innerHTML = "Apenas valores <strong>0 ou 1.</strong>";
    valorB.value = "";
    valorB.focus();
  } else {
    binarioB.push(Number(valorB.value));
    resultado.style.color = "#15803d";
    resultado.innerHTML = `Valor <strong>${Number(valorB.value)}</strong> adicionado!`;
    valorB.focus();
    valorB.value = "";
  }
}

function verificar() {
  corpo.innerHTML = "";
  cabecalho.innerHTML = "";
  if (binarioA.length > binarioB.length) {
    resultado.style.color = "#b91c1c";
    let diferenca = binarioA.length - binarioB.length;
    resultado.innerHTML = `Informe mais ${diferenca} valor(es) para B`;
  } else if (binarioA.length < binarioB.length) {
    resultado.style.color = "#b91c1c";
    let diferenca = binarioB.length - binarioA.length;
    resultado.innerHTML = `Informe mais ${diferenca} valor(es) para A`;
  } else if (binarioA.length == 0 || binarioB.length == 0) {
    resultado.style.color = "#b91c1c";
    resultado.innerHTML = "Os campos <strong>estão vazios.</strong>";
  } else {
    resultado.innerHTML = "";
    const titulos = ["A", "B", "AND", "OR", "NOT A", "NOT B", "XOR"];
    for (let i = 0; i < titulos.length; i++) {
      let th = document.createElement("th");
      th.textContent = titulos[i];
      cabecalho.appendChild(th);
    }

    for (let i = 0; i < binarioA.length; i++) {
      const a = binarioA[i];
      const b = binarioB[i];
      let tr = document.createElement("tr");

      const conteudoLinha = [a, b, a & b, a | b, 1 - a, 1 - b, a ^ b];
      for (let pos = 0; pos < conteudoLinha.length; pos++) {
        let celula = document.createElement("td");
        celula.textContent = conteudoLinha[pos];
        tr.appendChild(celula);
      }
      corpo.appendChild(tr);
    }
  }
}

function limpar() {
  valorA.value = "";
  valorB.value = "";
  binarioA.length = 0;
  binarioB.length = 0;
  resultado.style.color = "#15803d";
  resultado.innerHTML = "O conteúdo <strong>foi limpo.</strong>";
  corpo.innerHTML = "";
  cabecalho.innerHTML = "";
}

valorA.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarA();
  }
});

valorB.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarB();
  }
});
