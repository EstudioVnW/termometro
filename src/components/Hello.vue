<template>
  <section>
    
    <div class="column-perfil">
      <div class="logos">
        <img src="../assets/termometro.svg" class="termometro">
        <img src="../assets/logo-vainaweb.svg" class="logo">
      </div>
      <div class="user">
        <img src="../assets/romulo.jpg" class="perfil">
        <div class="text-user">
          <h3>Rômulo</h3>
          <p>Professor</p>
          <p>Cpx. Alemão</p>
        </div>
      </div>
      <input  class="button1" type="button" name="botao-ok" value="Sair">
    </div>
    <div class="column">
      <div class="column-aula">
        <p class="descricao">Aqui você expõe qual será o conteúdo da aula e marca a presença dos estudantes.</p>
        <img src="../assets/aulas.svg">
        <button class="button"><h4>Centro de aulas</h4></button>
      </div>
      <div class="column-duvida">
        <p class="descricao">Local onde ficam armazenadas as dùvidas que aparecem durante a aula.</p>
        <img src="../assets/duvidas.svg">
        <button class="button"><h4>Centro de dúvidas</h4></button>
      </div>
      <div class="column-analisa">
        <p class="descricao">Nesta seção você vai encontrar as avaliações de todas as aulas realizadas durante o módulo.</p>
        <img src="../assets/analisa.svg">
        <button class="button"><h4>Balanço de Aulas</h4></button>
      </div>
    </div>
    

   </section>
   
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  section{
    height: 95.3vh;
    background-color: #F26522;
    display: flex;
    flex-direction: row;
    padding: 30px 10px  0 0;
    background-image: url(../assets/fundo.jpg);
    background-repeat:no-repeat;
    background-size: 215vh 55vw;
    justify-content: center;

    
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

  .perfil{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    margin: 0 55px 0;
    background-color: #F26522;
    border-color: #2E3192;
    border-width: 0,1em;
    border-style: solid;
  }

  .logos{
    display: flex;
    justify-content: center;
  }

  .logo{
    width: 50px;
    height: 46px;
    margin: 0;
  }

  .termometro{
    width: 33px;
    height: 50px;
    margin: 0;
  }
 
  .column-perfil{
    margin:0 0 0 41px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    background-color: #FFF8DC; 
    border:2px solid #2E3192; 
    padding: 5px;
    width:15vw;
    height: 88vh;
    border-radius: 11.5px;

  }

  .text-user{
    color: #2E3192;
    font-size: 0.9em;
    text-align: center;
    line-height: 0.3em;

}

.saida{
  color: #2E3192;
  font-size: 0.9em;
  font-family: 'Ministry';
  text-align: center;
  margin: 0 auto;
}

.button1{
  border-color: #2E3192;
  border-radius: 10px;
  width: 6vw;
  height: 5vh;
  background-color: #FFFFFF;
  margin: 0 auto;
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
  font-family: 'Ministry,Heavy';
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
}
  .column{
          margin: 0 0 0 50px;
          display: flex;
          justify-content: flex-end;
          justify-content: space-between;
          height: 32vw;
          width: 60vw;
          
    
  }

  .column-aula{
                margin: 0 50px 0 0;
                display: flex;
                flex-flow: column-reverse;
                justify-content: space-around;
                background-color: #FFF8DC; 
                border:2px solid #2E3192; 
                padding: 5px;
                width: 16vw;
                height: 88vh;
                border-radius: 11.5px;

  }

   .column-duvida{
    margin: 0 50px 0 0;
    display: flex;
    flex-flow: column-reverse;
    justify-content: space-around;
    background-color: #FFF8DC; 
    border:2px solid #2E3192; 
    padding: 5px;
    width: 16vw;
    height: 88vh;
    border-radius: 11.5px;
  }

   .column-analisa{
    margin: 0 50px 0 0;
    display: flex;
    flex-flow: column-reverse;
    justify-content: space-around;
    background-color: #FFF8DC; 
    border:2px solid #2E3192; 
    padding: 5px;
    width: 16vw;
    height: 88vh;
    border-radius: 11.5px;
  }
</style>
