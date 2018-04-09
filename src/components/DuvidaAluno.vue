<template>
  <div class="pai">
    <div class="pai-sobre-o-professor">
      <div class="pai-sobre-inicio">
        <img class="pai-sobre-inicio-termometro-img" src="../assets/termometro-logo.svg">
        <img class="pai-sobre-inicio-logo-img" src="../assets/logo-VNW.svg">
      </div>
      <div class="pai-sobre-expecificacoes-prof" >
        <img class="pai-sobre-foto-professor-perfil" src="../assets/foto-perfil.png">
          <h4 class="pai-sobre-expecificacoes-prof-nome">Rômulo Tunala</h4>
          <h5 class="pai-sobre-expecificacoes-prof-proficao">Professor</h5>
          <h5 class="pai-sobre-expecificacoes-prof-local" >Cpx.alemão</h5>
      </div>  
      <div class="pai-sobre_duvidas-retangulo-expecificaçoes">
          <div class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma">
            <div class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma">
              <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-M">MÓDULO 1 - </p>
              <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-T">TURMA 2</p>
            </div>
            <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turno">Manhã</p>
          </div>
          <p class="pai-sobre_duvidas-retangulo-expecificaçoes-materia">Introdução ao CSS3</p>
          <p class="pai-sobre_duvidas-retangulo-expecificaçoes-materia_sobre">
            Esse módulo foi criado para você que quer iniciar no universo da programação. Nele você vai aprender a criar sites incríveis que funcionem em diferentes tamanhos de tela como computadores desktops, celulares, tablets, TVs e muito mais. É o primeiro passo para você desenvolver páginas para sites, aplicativos mobile e sistemas web e desktop.
          </p>
      </div>
    </div>
    <div class="pai-centro_duvidas">
      <div class="pai-centro_duvidas-lista_conteiner">
        <h1>Centro de Dúvidas</h1>
        <div class="pai-centro_duvidas-lista_conteiner-recados">
          <ul class="pai-centro_duvidas-lista_conteiner-recados-ul" v-for="recado in usuario.recados">
            <li class="pai-centro_duvidas-lista_conteiner-recados-ul-li">{{recado}}</li>
          </ul>
        </div> 
        <div class="pai-centro_duvidas-caixa_comentario">
            <input class="input-caixa-comentario" v-model="recado" v-on:keyup.enter="addRecado" placeholder="Digite a sua dúvida">
            <button class="pai-centro_duvidas-caixa_comentario-botao_iniciar">
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
        recados: ['Não ficou claro como o sistema funciona!','Não entendi exatamente qual a ordem correta de usar os caractéres na hora de fechar uma tag.','Como faz para colocar um video rodando automaticamente quando a página carregar?','Como faz para colocar um video rodando automaticamente quando a página carregar?','Como faz para colocar um video rodando automaticamente quando a página carregar?','Como faz para colocar um video rodando automaticamente quando a página carregar?'],
        legendas: ['Respondido','Responder depois','Chamar atenção']
      } 
    }
  }
}
</script>


<style scoped>
.pai{
    height: 90vh; 
    padding: 23px 6px;
    background: url(../assets/foto-fundo.jpg) no-repeat #FF8C00; 
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .pai-sobre-o-professor{
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
  .pai-sobre-inicio{
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pai-sobre-inicio-termometro-img{
    height: 12vh; 
  }
  .pai-sobre-inicio-logo-img{
    height: 7vh;
  }
  .pai-sobre-expecificacoes-prof{
    color: #2E3192;
    margin: 3% 0;
  }
  .pai-sobre-foto-professor-perfil{
    width: 7vw;
    margin: 3% 0;
    background-color: #F26522;
    border: solid 2px #2E3192;
    border-radius: 100%;
  }
  .pai-sobre-expecificacoes-prof-nome{
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .pai-sobre-expecificacoes-prof-proficao{
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }
  .pai-sobre-expecificacoes-prof-local{
    margin: 0;
    font-size: 16px;
    font-weight: normal;    
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes{
    display: flex;
    margin: 0 ;
    width: 13vw;
    height: 55vh;
    text-align: left;
    flex-direction: column;
    font-weight: normal;
    color: #2E3192;
    
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma{
    width: 100%;
    font-weight: normal;
    display: flex;
    justify-content: flex-start;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-M{
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    color: #FF611E;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-T{
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    color: #FF611E;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turno{
    margin: 0;
    font-weight: bold;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-materia{
    font-weight: bold;
    margin: 5% 0;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-materia_sobre{
    min-height: 25vh;
    width: 14vw;
    margin: 0;
    font-size: 14px;
  }
  .pai-centro_duvidas{
    width: 80vw;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .pai-centro_duvidas-lista_conteiner{
    height: 90vh;
    width: 50vw;
    margin: 0;
    text-align: left;
    color: #2E3192;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pai-centro_duvidas-lista_conteiner-recados{
    width: 35vw;
    overflow: auto;
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul{
    list-style-type: circle;
    overflow: auto;
    padding-left: 0; 
    border: solid 2px #2E3192;
    border-radius: 8px;
    background-color:
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul-li{
    margin: 5px;
    color: #2E3192;
    list-style-type: none;
  }
  .pai-centro_duvidas-caixa_comentario{
    width: 50vw;
    height: 9vh;
    border: solid 2px #2E3192;
    border-radius: 8px;
    padding: 0 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input-caixa-comentario{
    width: 77%;
    height: 8vh;
    border: none;
    font-size: 16px;
    color: #2E3192;
    padding-left: 2%;
  }
  .pai-centro_duvidas-caixa_comentario-botao_iniciar{
    width: 10vw;
    height: 7vh;
    background-color: #2E3192;
    border: none;
    border-radius: 8px;
    color: #fff;
    align-self: center;

  }
  .pai-centro_duvidas-caixa_comentario-entrada-descricao{
    display: flex;
    align-self: center;
  }
</style>
