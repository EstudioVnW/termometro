<template>
  <section class="tela__inicial">
    <PerfilProfessor></PerfilProfessor>
      <div class="telaInicial-colunas">
        <p class="telaInicial-coluna--descricao">Aqui você expõe qual será o conteúdo da aula e marca a presença dos estudantes.</p>
        <img  class="telaInicial-coluna--icones" src="../assets/aulas.svg">
        <div>
        <router-link to="descricao-aula">
        <button class="telaInicial-botao">
          <h4 class="telaInicial-botao--legenda">Centro de aulas</h4></button>
        </router-link>
        </div>
      </div>
      <div class="telaInicial-colunas">
        <p class="telaInicial-coluna--descricao">Local onde ficam armazenadas as dùvidas que aparecem durante a aula.</p>
        <img class="telaInicial-coluna--icones" src="../assets/duvidas.svg">
        <div>
        <router-link :to="{name: 'DuvidaAluno', query: {professor: 1}}">
        <button class="telaInicial-botao">
          <h4 class="telaInicial-botao--legenda">Centro de dúvidas</h4></button>
        </router-link>
        </div>
      </div>
      <div class="telaInicial-colunas">
        <p class="telaInicial-coluna--descricao">Nesta seção você vai encontrar as avaliações de todas as aulas realizadas durante o módulo.</p>
        <img class="telaInicial-coluna--icones" src="../assets/analisa.svg">
        <div>
        <router-link to="resultado-avaliacao-aula">
        <button class="telaInicial-botao">
          <h4 class="telaInicial-botao--legenda">Balanço de Aulas</h4></button>
        </router-link>
        </div>
      </div>
   </section>
</template>

<script>
  import PerfilProfessor from './PerfilProfessor.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    PerfilProfessor
  }
}
</script>
<style scoped>

.tela__inicial{
  height: 100vh;
  background: url(../assets/fundo.jpg) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;    
}
.telaInicial-colunas{               
 width: 16vw;
 height: 88vh;
 padding: 5px;
 background-color: #FFFFFF; 
 border:2px solid #2E3192; 
 border-radius: 11.5px;
 display: flex;
 flex-flow: column-reverse;
 justify-content: space-around;
}
.telaInicial-botao{
  width: 9vw;
  height: 6vh;
  margin: 0 auto;
  border-radius: 10px;
  border-color: #2E3192 5px;
  background-color: #2E3192;
}
.telaInicial-botao--legenda{
  margin: 0 auto;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9em;
  color: #FFFFFF;
  text-align: center;
}
.telaInicial-coluna--icones{ 
  width: 149.62px;
  height: 172.50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  vertical-align: middle;
}
.telaInicial-coluna--descricao{
  width: 165px;
  height: 103px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: left;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9em;
  color: #2E3192;
}
</style>
