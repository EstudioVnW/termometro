<template>
  <div class="body">
    <PerfilProfessor></PerfilProfessor>
    <div class="body__conteudo">
      <div class="body__conteudo-caixa">
        <h1 class="body__conteudoCaixa-titulo">Avaliação da Aula:</h1>
        <div class="body__conteudoCaixa-imgs">
          <img class="body__conteudoCaixa-imgs--termometro" src="../assets/termometro.svg">
          <img class="body__conteudoCaixa-imgs--medidor" src="../assets/medidor.svg">
        </div>  
        <h2 class="body__conteudoCaixa-subtitulo">
          A aula de hoje recebeu uma avaliação menor que 5.
        </h2>
        <h2 class="body__conteudoCaixa-subtitulo">
          Veja os comentarios dos estudantes.
        </h2>
        <div class="body__conteudoCaixa-box">
          <router-link to="professor-inicial">
          <input class="body__conteudoCaixa--botao" type="button" name="botao-ok" value="Voltar">
          </router-link>
        </div>
      </div>  
      <div class="body__conteudoCaixa">
        <h1 class="body__conteudoCaixa-titulo">Comentários</h1>
        <div class="body__conteudoCaixa-caixa">
              <ul class="body__conteudoCaixa-lista" v-for="recado in usuario.recados">
                <li class="body__conteudoCaixa-lista--item">{{recado}}</li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import PerfilProfessor from './PerfilProfessor.vue'  
export default {
    name: 'recados',
    data () {
      return {
        recado: '',
        usuario: {
          recados: ['Não consegui entender o conteúdo. Seria melhor se tivesse um esquema para facilitar a visualização do conteúdo.','O método utilizado para explicar o conteúdo não foi muito fácil de entender.','Se o professor tivesse usado um desenho ou um video para explicar como funciona o CSS seria melhor.','Achei que o professor se extendeu demais durante a explica- ção e o conteúdo não ficou claro.','Eu teria compreendido melhor a aula se o professor tivesse usado um outr jeito de dar aula.','Socorro os codigos não gostão de mim, vou desistir sem socorro.','Eu quero minha mamãe, vou chorar, isso é muito difícil pra mim']
            
        }
      }
    },
    methods: {
      addRecado(recado) {
        return this.usuario.recados.push(this.recado),
             this.recado = ''
      }
    },
    components: {
    PerfilProfessor
  }
}
</script>

<style scoped>
  .body{
    height: 93vh;
    background-color: #FF8C00;
    padding: 23px 3px 23px 6px;
    background: url(../assets/foto-fundo.jpg) no-repeat; 
    background-size: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .body__conteudo{
    width: 80vw;
    height: 90vh;
    margin: 0;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
  }
  .body__conteudo-caixa{
    width: 50%;
    height: 90%;
    margin: 0;
    padding: 0 160px 0 0;
    color: #2E3192;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .body__conteudoCaixa-titulo{
    margin: 0;
    font-weight: normal;
    font-size: 1.5em;
    font-weight:bold;
  }
  .body__conteudoCaixa-imgs{
    display: flex;
    justify-content: space-between;
    height: 30vh;
    width: 15vw;
    align-items: center;
  }
  .body__conteudoCaixa-imgs--termometro{
    height: 271px;
    width: 107px;
    margin: 0;
  }
  .body__conteudoCaixa-imgs--medidor{
    height: 240px;
    width: 160px;
    margin: 0 0 20px 0;
  }
  .body__conteudoCaixa-subtitulo{
    width: 18vw;
    height: 16vh;
    padding: 20px 0px 0px 0px;
    text-align: left;
    justify-content: flex-end;
    margin: 0;
    font-weight: normal;
    font-size: 1.2em;
  }
  .body__conteudoCaixa-box{
    width: 50%;
    height: 5%;
  }
  .body__conteudoCaixa--botao{
    align-self: flex-end;
    border-radius: 8px;
    height: 5vh;
    width: 7vw;
    border-style: 2px;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    align-self: flex-start;
    margin:  10px 0px 0px 40px;
  }
  .body__conteudoCaixa{
    color: #2E3192;
    height: 60vh;
    width: 50%;
    margin: 0;
    text-align: left;
    align-self: center;
  }
  .body__conteudoCaixa-titulo{
    font-weight: normal;
    font-weight: bold;
    font-size: 1.5em;
  }
  .body__conteudoCaixa-caixa{
    height: 50vh;
    margin: 0;
    overflow: auto;
  }
  .body__conteudoCaixa-lista{
    overflow: auto;
    list-style: none;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    border-radius: 8px;
  }
</style>

