class JogoPacman {
  constructor(grafo) {
    this.grafo = grafo;
    this.visitados = [];
    this.listaAtual = [];
    for (let i = 0; i < grafo.length; i++) {
      this.visitados[i] = false;
    }
  }

  buscaLargura(origem, destino) {
    if (origem === destino) {
      return console.log("Chegou");
    }

    var atual;

    var predecessor = {};

    this.listaAtual.push(origem);
    let listaVertices;

    while (this.listaAtual.length > 0) {
      atual = this.listaAtual.shift();
      this.visitados[atual] = true;

      //console.log("Array de visitados: " + this.visitados);
      listaVertices = [];

      for (let i = 0; i < this.grafo.length; i++) {
        if (this.grafo[atual][i] === 1 && this.visitados[i] === false) {
          //listaVertices.push(i + 1);
          this.visitados[i] = true;

          if (i === destino) {
            //console.log([listaVertices]);
            var path = [i];
            while (atual !== origem) {
              path.push(atual);
              atual = predecessor[atual];
            }
            path.push(atual);
            path.reverse();
            console.log(path);
            console.log("Chegou!");
            return;
          }

          predecessor[i] = atual;

          this.listaAtual.push(i);
        }
      }
    }
    return false;
  }
}

const grafo = [
  [0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 1],
  [0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 0],
];

jogoPacman = new JogoPacman(grafo);
jogoPacman.buscaLargura(0, 5);
