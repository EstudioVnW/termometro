<template>
  <section>
    <PerfilProfessor></PerfilProfessor>
    
    
      <div class="column-aula">
        <p class="descricao">Aqui você expõe qual será o conteúdo da aula e marca a presença dos estudantes.</p>
        <img src="../assets/aulas.svg">
        <div>
        <router-link to="descricao-aula">
        <button class="button"><h4>Centro de aulas</h4></button>
        </router-link>
        </div>
      </div>
      <div class="column-duvida">
        <p class="descricao">Local onde ficam armazenadas as dùvidas que aparecem durante a aula.</p>
        <img src="../assets/duvidas.svg">
        <div>
        <router-link :to="{name: 'DuvidaAluno', query: {professor: 1}}">
        <button class="button"><h4>Centro de dúvidas</h4></button>
        </router-link>
        </div>
      </div>
      <div class="column-analisa">
        <p class="descricao">Nesta seção você vai encontrar as avaliações de todas as aulas realizadas durante o módulo.</p>
        <img src="../assets/analisa.svg">
        <div>
        <router-link to="resultado-avaliacao-aula">
        <button class="button"><h4>Balanço de Aulas</h4></button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  section{
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(../assets/fundo.jpg);
    background-repeat:no-repeat;
    background-size: 100%;
    padding: 0 5%;    
  }

  img{ 

    width: 149.62px;
    height: 172.50px;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    margin: 0 auto;
  }

  .user{
    margin: 0;
  }

.button{
  background-color: #2E3192;
  border-radius: 10px;
  width: 9vw;
  height: 6vh;
  margin: 0 auto;
  
}

h4{
  color: #FFFFFF;
  font-size: 0.9em;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;

}
.descricao{
  font-size: 0.9em;
  color: #2E3192;
  width: 165px;
  height: 103px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: left;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
}
  

  .column-aula{
                
                display: flex;
                flex-flow: column-reverse;
                justify-content: space-around;
                background-color: #FFFFFF; 
                border:2px solid #2E3192; 
                padding: 5px;
                width: 16vw;
                height: 88vh;
                border-radius: 11.5px;

  }

   .column-duvida{
    
    display: flex;
    flex-flow: column-reverse;
    justify-content: space-around;
    background-color: #FFFFFF; 
    border:2px solid #2E3192; 
    padding: 5px;
    width: 16vw;
    height: 88vh;
    border-radius: 11.5px;
  }

   .column-analisa{
    
    display: flex;
    flex-flow: column-reverse;
    justify-content: space-around;
    background-color: #FFFFFF; 
    border:2px solid #2E3192; 
    padding: 5px;
    width: 16vw;
    height: 88vh;
    border-radius: 11.5px;
  }
</style>
