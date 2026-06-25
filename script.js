<script>

function abrirModal(nome,foto,descricao,preco){

document.getElementById('modal').style.display='block';

document.getElementById('modal-img').src=foto;

document.getElementById('modal-titulo').innerHTML=nome;

document.getElementById('modal-desc').innerHTML=descricao;

document.getElementById('modal-preco').innerHTML=preco;

}

function fecharModal(){

document.getElementById('modal').style.display='none';

}

</script>