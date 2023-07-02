class Produto {
    constructor(nome, preco, imagem) {
        this.nome = nome;
        this.preco = preco;
        this.imagem = imagem;
    }
}

let p1 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p2 = new Produto("Teste", 19.50, "/imagens/minoxidil.png");
let p3 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p4 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p5 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p6 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p7 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");
let p8 = new Produto("Minoxidil", 19.50, "/imagens/minoxidil.png");

export let produtos = [p1, p2, p3, p4, p5, p6, p7, p8];