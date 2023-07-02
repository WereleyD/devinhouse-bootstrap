import { produtos } from "./produtos.js";

const cols = document.querySelector(".row.row-2.cols-4.gap-4");
console.log(cols);

criarCards()

function criarCards() {
    console.log(produtos.length)

    produtos.forEach(produto => {
        
        let div = document.createElement("div");
        div.setAttribute("class", "col");
        cols.appendChild(div);
        
        let div2 = document.createElement("div");
        div2.setAttribute("class", "card border border-secondary-subtle bg-secondary-subtle");
        div2.setAttribute("style", "width: 18rem;");
        div.appendChild(div2);
        
        let img = document.createElement("img");
        img.setAttribute("class", "border-bottom border-top border-secondary-subtle mt-4 bg-dark-subtle");
        img.setAttribute("src", produto.imagem);
        img.setAttribute("alt", "minoxidil");
        div2.appendChild(img);
        
        let div3 = document.createElement("div");
        div3.setAttribute("class", "card-body");
        div2.appendChild(div3);
        
        let h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.innerText = produto.nome;
        div3.appendChild(h5);
        
        let p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.innerText = `R$ ${(produto.preco).toFixed(2)}`;
        div3.appendChild(p);
        
        let a = document.createElement("a");
        a.setAttribute("class", "btn btn-primary");
        a.setAttribute("href", "#");
        a.innerText = "Adicionar";
        div3.appendChild(a);
    });
}





