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
              <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-M">MÓDULO 1 -</p>
              <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-T">TURMA 2</p>
            </div>
            <p class="pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turno">Manhã</p>
          </div>
          <p class="pai-sobre_duvidas-retangulo-expecificaçoes-materia">Introdução ao CSS3</p>
          <p class="pai-sobre_duvidas-retangulo-expecificaçoes-materia_sobre">Esse módulo foi criado para você que quer iniciar no universo da programação. Nele você vai aprender a criar sites incríveis que funcionem em diferentes tamanhos de tela como computadores desktops, celulares, tablets, TVs e muito mais. É o primeiro passo para você desenvolver páginas para sites, aplicativos mobile e sistemas web e desktop.</p>
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
          <label class="pai-centro_duvidas-caixa_comentario-entrada">
            <span class="pai-centro_duvidas-caixa_comentario-entrada-descricao">Digite a sua dúvida:</span>
            <input class="input-caixa-comentario" v-model="recado" v-on:keyup.enter="addRecado">
            <input class="pai-centro_duvidas-caixa_comentario-botao_iniciar" type="button" name="botao-ok" value="Enviar dúvida">
          </label>
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
        recados: ['Não ficou claro como o sistema funciona!','Não entendi exatamente qual a ordem correta de usar os caractéres na hora de fechar uma tag.','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?'],
        legendas: ['Respondido','Responder depois','Chamar atenção']
      } 
    }
  }
}
</script>


<style scoped>
.pai{
    display: flex;
    flex-direction: row;
    background-color: #FF8C00;
    padding: 23px 3px 23px 6px;
    height: 93vh;
    justify-content: space-around;
    background-image: url(../assets/foto-fundo.jpg); 
    background-size: 100vw 113vh;
    background-repeat: no-repeat;
  }
  .pai-sobre-o-professor{
    display: flex;
    width: 15vw;
    border-style: solid;
    border-color: #2E3192;
    border-width: 2px;
    background-color: #FFFFFF;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
  }
  .pai-sobre-inicio-termometro-img{
    height: 80px;
    width: 60px;  
  }
  .pai-sobre-inicio-logo-img{
    height: 7vh;
    width: 5vw;
  }
  
  .pai-sobre-inicio{
    margin: 0 auto;
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: center;
  }
  .pai-sobre-foto-professor-perfil{
    width: 7vw;
    height: 13vh;
    border-radius: 60%;
    border-style: solid;
    border-width: 0,1vw;
    border-color: #2E3192;
    background-color: #F26522;
  }
  .pai-sobre-expecificacoes-prof{
    margin: 0;
    color: #2E3192;
  }
  .pai-sobre-expecificacoes-prof-nome{
    margin: 0;
    font-weight: normal;
  }
  .pai-sobre-expecificacoes-prof-proficao{
    margin: 0;
    font-weight: normal;
  }
  .pai-sobre-expecificacoes-prof-local{
    margin: 0;
    font-weight: normal;    
  }
  .pai-sobre-botao{
    border-radius: 8px;
    height: 5vh;
    width: 7vw;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;      
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
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-M{
    margin: 0;
    font-weight: normal;
    color: #FF611E;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma-T{
    margin: 0;
    font-weight: normal;
    color: #FF611E;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turma{
    display: flex;
    justify-content: flex-start;
    font-weight: normal;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-topo_turma-turno{
    margin: 0;
    font-weight: normal;
  }
  .pai-sobre_duvidas-retangulo-expecificaçoes-materia_sobre{
    display: flex;
    margin: 0;
    justify-content: space-around;
    height: 30vh;
    width: 14vw;
    overflow: auto;
  }
  .pai-centro_duvidas{
    display: flex;
    margin: 0 ;
    background-color: #FFFFFF;
    width: 80vw;
    border-color:#2E3192;
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
    justify-content: center;
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul{
    list-style-type: circle;
    overflow: auto;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    border-radius: 8px;
    
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul-li{
    margin: 5px;
    color: #2E3192;

  }
  .pai-centro_duvidas-lista_conteiner-recados{
    overflow: auto;
    width: 35vw;
  }
  .pai-centro_duvidas-lista_conteiner{
    display: flex;
    height: 90vh;
    width: 50vw;
    flex-direction: column;
    text-align: left;
    margin: 0;
    justify-content: center;
    color: #2E3192;
  }
  .pai-centro_duvidas-caixa_comentario{
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    width: 50vw;
    height: 9vh;
  }
  .pai-centro_duvidas-caixa_comentario-entrada{
    display: flex;
    border-style: solid;
    border-right: ;
    height: 8vh;
    width: 50vw ;
    border-radius: 8px;
    color: #2E3192;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    justify-content: space-around;
  }

  .pai-centro_duvidas-caixa_comentario-botao_iniciar{
    width: 10vw;
    height: 5vh;
    border-radius: 8px;
    background-color: #2E3192;
    color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    align-self: center;

  }
  .pai-centro_duvidas-caixa_comentario-entrada-descricao{
    display: flex;
    align-self: center;
  }
</style>
