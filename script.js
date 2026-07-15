function abrirModal(nome, foto, descricao, preco){

    document.getElementById('modal').style.display = 'block';

    document.getElementById('modal-img').src = foto;

    document.getElementById('modal-titulo').innerHTML = nome;

    document.getElementById('modal-desc').innerHTML = descricao;

    document.getElementById('modal-preco').innerHTML = preco;

}

function fecharModal(){

    document.getElementById('modal').style.display = 'none';

}

window.onclick = function(event){

    let modal = document.getElementById('modal');

    if(event.target == modal){

        modal.style.display = 'none';

    }

};

document.querySelectorAll('.titulo-item').forEach(botao => {

    botao.addEventListener('click', () => {

        let conteudo = botao.nextElementSibling;

        if(conteudo.style.display === 'block'){

            conteudo.style.display = 'none';

        } else {

            conteudo.style.display = 'block';

        }

    });

});
function abrirItem(card){

    let opcoes = card.nextElementSibling;

    if(opcoes.style.display=="block"){

        opcoes.style.display="none";

    }else{

        opcoes.style.display="block";

    }

}

document.querySelectorAll(".titulo-item").forEach(botao => {
    botao.addEventListener("click", () => {

        const conteudo = botao.nextElementSibling;

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
        } else {
            conteudo.style.display = "block";
        }

    });
});
document.querySelectorAll(".produto").forEach(card=>{

    card.addEventListener("click",()=>{

        let preco=card.querySelector(".preco");

        if(preco.style.display=="block"){

            preco.style.display="none";

        }else{

            preco.style.display="block";

        }

    });

});