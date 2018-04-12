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
      <input class="pai-sobre-botao" type="button" name="botao-ok" value="Sair">
    </div>
    <div class="pai-centro_duvidas">
       <div class="pai-centro_duvidas-retangulo">
        <div class="pai-centro_duvidas-retangulo-expecificaçoes">
          <div class="pai-centro_duvidas-retangulo-expecificaçoes-topo_turma">
            <div class="pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma">
              <p class="pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma-M">MÓDULO 1 -</p>
              <p class="pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma-T">TURMA 2</p>
            </div>
            <p class="pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turno">Manhã</p>
          </div>
          <p class="pai-centro_duvidas-retangulo-expecificaçoes-materia">Introdução ao CSS3</p>
          <p class="pai-centro_duvidas-retangulo-expecificaçoes-materia_sobre">Esse módulo foi criado para você que quer iniciar no universo da programação. Nele você vai aprender a criar sites incríveis que funcionem em diferentes tamanhos de tela como computadores desktops, celulares, tablets, TVs e muito mais. É o primeiro passo para você desenvolver páginas para sites, aplicativos mobile e sistemas web e desktop.</p>
        </div>
        <input class="pai-centro_duvidas-retangulo-botao" type="button" name="botao-ok" value="Voltar">
      </div>
      <div class="pai-centro_duvidas-lista_conteiner">
        <h1>Centro de Dúvidas</h1>
        <div class="pai-centro_duvidas-lista_conteiner-recados">
          <ul class="pai-centro_duvidas-lista_conteiner-recados-ul" v-for="recado in usuario.recados">
            <li class="pai-centro_duvidas-lista_conteiner-recados-ul-li">{{recado}}</li>
          </ul>
        </div>
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
  </div>
</template>

<script>
export default {
    name: 'recados',
    name:'legendas',
    data () {
      return {
        recado: '',
        legenda:'',
        usuario: {
          recados: ['Não ficou claro como o sistema funciona!','Não entendi exatamente qual a ordem correta de usar os caractéres na hora de fechar uma tag.','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?','Como faz para colocar um video rodando automa- ticamente quando a página carregar?'],   
          legendas: ['Respondido','Responder depois','Chamar atenção']
        }
      }
    },
    methods: {
      addRecado(recado) {
        return this.usuario.recados.push(this.recado),
             this.recado = ''
      }
      /*addLegenda(legenda) {
        return this.usuario.legendas.push(this.legenda),
           this.legenda = '' 
      }*/
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
    width: 130px;
    height: 130px;
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
    font-weight: bold;
    font-size: 0.9em;
  }
  .pai-sobre-expecificacoes-prof-proficao{
    margin: 0;
    font-weight: normal;
    font-size: 0.9em;
  }
  .pai-sobre-expecificacoes-prof-local{
    margin: 0;
    font-weight: normal; 
    font-size: 0.9em;   
  }
  .pai-sobre-botao{
    border-radius: 8px;
    height: 5vh;
    width: 7vw;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192; 
    color:#2E3192;
    font-weight: bold;     
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
    justify-content: space-around;
  }
  .pai-centro_duvidas-retangulo{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes{
    display: flex;
    margin: 0 ;
    width: 13vw;
    height: 55vh;
    text-align: left;
    flex-direction: column;
    font-weight: normal;
    color: #2E3192;
    
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma-M{
    margin: 0;
    font-weight: normal;
    color: #FF611E;
    font-weight: bold;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma-T{
    margin: 0;
    font-weight: normal;
    color: #FF611E;
    font-weight: bold;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turma{
    display: flex;
    justify-content: flex-start;
    font-weight: normal;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-topo_turma-turno{
    margin: 0;
    font-weight: normal;
    font-weight: bold;
  }
  .pai-centro_duvidas-retangulo-botao{
      border-radius: 8px;
      height: 5vh;
      width: 7vw;
      background-color: #FFFFFF;
      border-style: solid;
      border-width: 2px;
      border-color: #2E3192;
      margin: 10px 10px 0px 0px;
      color:#2E3192;
      font-weight: bold;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-materia{
    font-weight: bold;
  }
  .pai-centro_duvidas-retangulo-expecificaçoes-materia_sobre{
    display: flex;
    margin: 0;
    justify-content: space-around;
    height: 40vh;
    width: 12vw;
    text-align: left;
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul{
    
    overflow: auto;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    border-radius: 8px;
    list-style: none;
  }
  .pai-centro_duvidas-lista_conteiner-recados-ul-li{
    margin: 5px;
    color: #2E3192;
  }
  .pai-centro_duvidas-lista_conteiner-recados{
    overflow: auto;
    
  }
  .pai-centro_duvidas-lista_conteiner{
    display: flex;
    height: 70vh;
    width: 39vw;
    flex-direction: column;
    text-align: left;
    margin: 25px 0 0 0;
    justify-content: center;
    color: #2E3192;
  }
  h1{
    font-size: 1.5em;
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
  .pai-sobre-botao_iniciar{
    width: 10vw;
    height: 5vh;
    border-radius: 8px;
    background-color: #2E3192;
    color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    align-self: flex-end;
  }
</style>
