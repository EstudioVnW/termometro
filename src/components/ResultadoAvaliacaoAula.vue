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
          recados: ['']
            
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
    height: 100vh;
    background-color: #FF8C00;
    background: url(../assets/fundo.jpg) no-repeat; 
    background-size: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .body__conteudo{
    width: 80%;
    height: 89.7vh;
    margin: 0;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
  }
  .body__conteudo-caixa{
    height: 43.9vw;
    width: 30vw;
    margin: 0;
    padding: 0 160px 0 0;
    color: #2E3192;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .body__conteudoCaixa-titulo{
    margin: 0;
    font-weight: normal;
    font-size: 1.5em;
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 1.5em;
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
    width: 17.8vw;
    height: 16vh;
    padding: 20px 0px 0px 0px;
    text-align: left;
    justify-content: flex-end;
    margin: 0;
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;
  }
  .body__conteudoCaixa-box{
    width: 60%;
    height: 8%;
    display: flex;
    align-items: flex-start;
    /*background-color: black;*/
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
    color: #2E3192;
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 700;
    align-self: flex-start;
    /*margin:  10px 0px 0px 50px;*/
  }
  .body__conteudoCaixa{
    color: #2E3192;
    height: 60vh;
    width: 38vw;
    margin: 0;
    text-align: left;
    align-self: center;
  }
  .body__conteudoCaixa-titulo{
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
  }
  .body__conteudoCaixa-caixa{
    height: 50vh;
    width: 33vw;
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
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

</style>

