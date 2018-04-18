<template>    
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
      <div class="conteudo-descricao__detalhes" v-if="descricao">
          <p class="conteudo-descricao__detalhes--turma">{{modulo}} - {{turma}}</p>
          <p class="conteudo-descricao__detalhes--turno">Manhã</p>
          <p class="conteudo-descricao__detalhes--materia">Introdução ao CSS3</p>
          <p class="conteudo-descricao__detalhes--sobre">
            Esse módulo foi criado para você que quer iniciar no universo da programação. Nele você vai aprender a criar sites incríveis que funcionem em diferentes tamanhos de tela como computadores desktops, celulares, tablets, TVs e muito mais.
          </p>
      </div>
      <input  class="button1" type="button" name="botao-ok" value="Sair">
    </div>
</template>

<script>
	export default {
		name: 'PerfilProfessor',
		props: ['descricao'],
  data () {
    return {
      modulo: 'Modulo I',
      turma: 'Turma 2',

    }
  }
	}
</script>

<style scoped>

.column-perfil{
    width:16vw;
    height: 88vh;
    background-color: #FFFFFF; 
    border:2px solid #2E3192; 
    border-radius: 11.5px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 1% 0;
    box-sizing: border-box;

  }
  .logos{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo{
    width: 76px;
    height: 54px;
    margin: 0;
  }

  .termometro{
    width: 33px;
    height: 96px;
    margin: 0;
  }
.perfil{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    background-color: #F26522;
    border-color: #2E3192;
    border-width: 0,1em;
    border-style: solid;
  }

  .text-user{
    color: #2E3192;
    font-size: 0.9em;
    text-align: center;
    line-height: 0.3em;

}
.conteudo-descricao__detalhes{
    width: 90%;
    min-height: 30vh;
    margin-bottom: 4%;
    color: #2E3192;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-weight: normal;
  }
  .conteudo-descricao__detalhes--turma{
    margin: 0 2%;
    font-size: 16px;
    font-weight: bold;
    color: #FF611E;
  }
  .conteudo-descricao__detalhes--turno{
    margin:  0 2%;
    font-weight: bold;
  }
  .conteudo-descricao__detalhes--materia{
    font-weight: bold;
    margin: 5% 2%;
  }
  .conteudo-descricao__detalhes--sobre{
    min-height: 10vh;
    width: 14vw;
    margin: 0 2%;
    font-size: 14px;
    overflow: auto;
    

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
  color: #2E3192;
  font-weight: bold;
}

</style>