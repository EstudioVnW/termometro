<template>
  <div class="body">
    <div class="conteudo-descricao">
      <div class="conteudo-descricao__img">
        <img class="conteudo-descricao__img--logo" src="../assets/termometro-logo.svg">
        <img class="conteudo-descricao__img--vnw" src="../assets/logo-VNW.svg">
      </div>
      <div class="conteudo-descricao__prof" >
        <img class="conteudo-descricao__prof--img" src="../assets/foto-perfil.png">
          <h4 class="conteudo-descricao__prof--nome">Rômulo Tunala</h4>
          <h5 class="conteudo-descricao__prof--usuario">Professor</h5>
          <h5 class="conteudo-descricao__prof--local" >Cpx.alemão</h5>
      </div>  
      <div class="conteudo-descricao__detalhes">
          <p class="conteudo-descricao__detalhes--turma">{{modulo}} - {{turma}}</p>
          <p class="conteudo-descricao__detalhes--turno">Manhã</p>
          <p class="conteudo-descricao__detalhes--materia">Introdução ao CSS3</p>
          <p class="conteudo-descricao__detalhes--sobre">
            Esse módulo foi criado para você que quer iniciar no universo da programação. Nele você vai aprender a criar sites incríveis que funcionem em diferentes tamanhos de tela como computadores desktops, celulares, tablets, TVs e muito mais. É o primeiro passo para você desenvolver páginas para sites, aplicativos mobile e sistemas web e desktop.
          </p>
      </div>
    </div>
    <div class="conteudo-duvidas">
      <div class="conteudo-duvidas__container">
        <h1 class="conteudo-duvidas__container--titulo">Centro de Dúvidas</h1>
        <div class="conteudo-duvidas__container-bloco">
          <div class="conteudo-duvidas__container-bloco-caixa">
            <ul class="conteudo-duvidas__container-bloco-caixa-lista" v-for="recado in usuario.recados">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor"></div>
              <li class="conteudo-duvidas__container-bloco-caixa-lista--recado">{{recado}}</li>
            </ul>
          </div>
          <div class="conteudo-duvidas__container-bloco-caixa2">
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor1"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Respondido</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor2"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Responder depois</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor3"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Chamar atenção</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor4"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Dar prioridade</p>
            </div>
          </div>
        </div>
        <div class="conteudo-duvidas__container-bloco2">
            <input class="conteudo-duvidas__container-bloco2--input" v-model="recado" v-on:keyup.enter="addRecado" placeholder="Digite a sua dúvida">
            <button class="conteudo-duvidas__container-bloco2--button">
              Enviar dúvida
            </button>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'recado',
  name: 'legenda',
  data () {
    return {
      recado:'',
      legenda:'',
      usuario: {
        recados: ['Não ficou claro como o sistema funciona!','Não entendi exatamente qual a ordem correta de usar os caractéres na hora de fechar uma tag.','Como faz para colocar um video rodando automaticamente quando a página carregar?','Como faz para colocar um video rodando automaticamente quando a página carregar?','Como faz para colocar um video rodando automaticamente quando a página carregar?'],
      },
      modulo: 'Modulo I',
      turma: 'Turma 2'
    }
  }
}
</script>


<style scoped>
.body{
    height: 90vh; 
    padding: 23px 6px;
    background: url(../assets/foto-fundo.jpg) no-repeat #FF8C00; 
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .conteudo-descricao{
    width: 16vw;
    padding: 2% 0;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .conteudo-descricao__img{
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .conteudo-descricao__img--logo{
    height: 12vh; 
  }
  .conteudo-descricao__img--vnw{
    height: 7vh;
  }
  .conteudo-descricao__prof{
    margin: 3% 0;
    color: #2E3192;
  }
  .conteudo-descricao__prof--img{
    width: 7vw;
    margin: 3% 0;
    border: solid 2px #2E3192;
    border-radius: 100%;
    background-color: #F26522;
  }
  .conteudo-descricao__prof--nome{
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .conteudo-descricao__prof--usuario{
    margin: 0;
    font-size: 14px;
    font-weight: normal;
  }
  .conteudo-descricao__prof--local{
    margin: 0;
    font-size: 16px;
    font-weight: normal;    
  }
  .conteudo-descricao__detalhes{
    width: 90%;
    height: 55vh;
    margin: 0;
    color: #2E3192;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-weight: normal;
  }
  .conteudo-descricao__detalhes--turma{
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #FF611E;
  }
  .conteudo-descricao__detalhes--turno{
    margin: 0;
    font-weight: bold;
  }
  .conteudo-descricao__detalhes--materia{
    font-weight: bold;
    margin: 5% 0;
  }
  .conteudo-descricao__detalhes--sobre{
    min-height: 25vh;
    width: 14vw;
    margin: 0;
    font-size: 14px;
  }
  .conteudo-duvidas{
    width: 80vw;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .conteudo-duvidas__container{
    height: 90vh;
    width: 60vw;
    margin: 0;
    text-align: left;
    color: #2E3192;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .conteudo-duvidas__container--titulo{
    width: 100%;
  }
  .conteudo-duvidas__container-bloco{
    display: flex;
    justify-content: space-between;
  }
  .conteudo-duvidas__container-bloco-caixa{
    width: 40vw;
    overflow: auto;
  }
  .conteudo-duvidas__container-bloco-caixa-lista{
    padding: 1%; 
    border: solid 2px #2E3192;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa-lista--recado{
    width: 85%;
    margin: 5px 10px;
    color: #2E3192;
    list-style-type: none;
  }
  .conteudo-duvidas__container-bloco-caixa2{
    width: 25%;
    height: 25vh;
    padding: 1% 0;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--cor{
    width: 22px;
    height: 22px;
    border: solid 2px #2E3192;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--cor--color{
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
  .cor1{
    background: #18E834;
  }
  .cor2{
    background: #FCAF17;
  }
  .cor3{
    background: #FF0000;
  }
  .cor4{
    background: #F26522;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--texto{
    width: 70%;
    font-size: 14px;
    margin-left: 2%;
  }
  .conteudo-duvidas__container-bloco2{
    width: 100%;
    height: 9vh;
    border: solid 2px #2E3192;
    border-radius: 8px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco2--input{
    width: 95%;
    height: 8vh;
    margin-right: 1%;
    border: none;
    font-size: 16px;
    color: #2E3192;
    padding-left: 1%;
    word-break: wrap;
  }
  .conteudo-duvidas__container-bloco2--button{
    width: 10vw;
    height: 7vh;
    background-color: #2E3192;
    border: none;
    border-radius: 8px;
    color: #fff;
    align-self: center;
  }
</style>
