<template>    
    <div class="conteudo">
      <div class="conteudo__logos">
        <img class="conteudo__logos--termometro" src="../assets/termometro.svg">
        <img class="conteudo__logos--vnw" src="../assets/logo-vainaweb.svg">
      </div>
      <div class="conteudo__user">
        <img class="conteudo__user--perfil" src="../assets/romulo.jpg">
        <div class="conteudo__user--text">
          <h3 class="conteudo__user--text-titulo">Rômulo</h3>
          <p class="conteudo__user--text-paragrafo">Professor</p>
          <p class="conteudo__user--text-paragrafo">Cpx. Alemão</p>
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
      <div>
      <router-link to="/">
       <input  class="conteudo-descricao__button" type="button" name="botao-ok" value="SairP" v-if="!precisaMudar || professor">
      </router-link>
      </div>
      <div>
      <router-link to="avaliando-aprendizado">
        <input  class="button1" type="button" name="botao-ok" value="SairA" v-if="!professor && precisaMudar">
      </router-link>
      </div>
    </div>
</template>
<script>
	export default {
		name: 'PerfilProfessor',
		props: ['descricao', 'professor', 'precisaMudar'],
    data () {
      return {
        modulo: 'Modulo I',
        turma: 'Turma 2',
      }
    }
	}
</script>

<style scoped>
.conteudo{
  width:16vw;
  height: 90vh;
  padding-top: 4%;
  background-color: #FFFFFF; 
  border: 2px solid #2E3192; 
  border-radius: 11.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.conteudo__logos{
  display: flex;
  justify-content: center;
  align-items: center;
}
.conteudo__logos--termometro{
  width: 33px;
  height: 96px;
  margin: 0;
}
.conteudo__logos--vnw{
  width: 76px;
  height: 54px;
  margin: 0;
}
.conteudo__user{

}
.conteudo__user--perfil{
  width: 130px;
  background-color: #F26522;
  border: solid 2px #2E3192;
  border-radius: 50%;
  vertical-align: middle;
  display: flex;
  justify-content: center;
}
.conteudo__user--text{
  color: #2E3192;
  font-size: 1em;
  text-align: center;
  line-height: 0.5em;
}
.conteudo__user--text-titulo{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
}
.conteudo__user--text-paragrafo{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
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
.conteudo-descricao__button{
  width: 6vw;
  height: 5vh;
  background-color: #FFFFFF;
  border-color: #2E3192;
  border-radius: 10px;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #2E3192;

}

</style>