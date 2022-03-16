class JogoPacman {
    constructor(grafo) {
      this.grafo = grafo;
      this.visitados = [];
      this.fila = [];
      for (let i = 0; i < grafo.length; i++) {
        this.visitados[i] = false;
      }
    }

    /**
     * Obtém os vizinhos do "vertice" no "grafo" dado.
     * @param {number[][]} grafo 
     * @param {number} vertice 
     * @returns {number[]}
     */
    getVizinhos(grafo, vertice){
        const vizinhos = [];
        for(let viz in grafo[vertice]){
            if(grafo[vertice][viz] > 0) vizinhos.push(parseInt(viz));
        }
        return vizinhos;
    }
  
    /**
     * Realiza a Busca em Largura para encontrar o menor caminho entre origem e destino.
     * @param {number} origem vértice de origem.
     * @param {number} destino vértice de destino.
     * @returns {number[]} menor caminho entre origem e destino.
     */
    buscaLargura(origem, destino) {
      if (origem === destino) {
        return console.log("Chegou");
      }
  
      let atual;
  
      let predecessor = {};
  
      this.fila.push(origem);
  
      while (this.fila.length > 0) {
        atual = this.fila.shift();
        this.visitados[atual] = true;

        for(let viz of this.getVizinhos(this.grafo, atual)){
            if(this.visitados[viz] === true) continue

            this.visitados[viz] = true;

            if (viz === destino) {
                let path = [viz];
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
    
              predecessor[viz] = atual;
    
              this.fila.push(viz);

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
  
  const grafo2 = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  ];
  
  jogoPacman = new JogoPacman(grafo2);
  jogoPacman.buscaLargura(4, 9);
