<template>
  <section class="container">
    <PerfilProfessor></PerfilProfessor>
    <div class="container__caixa">
      <div class="container__caixa-coluna">
        <p class="container__caixaColuna-titulo">Pólo:</p>
        <ul class="container__caixaColuna-radio">
          <li>
            <input type="radio" name="choice" checked>
            <span></span>
            <label>Alemão</label>
          </li>
          <li>
            <input type="radio" name="choice">
            <span></span>
            <label>Prazeres</label>
          </li>
        </ul>
        <p class="container__caixaColuna-titulo">Módulo:</p>
        <ul class="container__caixaColuna-radio">
          <li>
            <input type="radio" name="modulo" checked>
            <span></span>
            <label>Módulo 1</label>
          </li>
          <li>
            <input type="radio" name="modulo">
            <span></span>
            <label>Módulo 2</label>
          </li>
          <li>
            <input type="radio" name="modulo">
            <span></span>
            <label>Módulo 3</label>
          </li>
        </ul>
        <p  class="container__caixaColuna-titulo">Turno:</p>
        <ul class="container__caixaColuna-radio">
          <li>
            <input type="radio" name="Turno"  checked>
            <span></span>
            <label>Manhã</label>
          </li>
          <li>
            <input type="radio" name="Turno">
            <span></span>
            <label>Tarde</label>
          </li>
        </ul>
      </div>
      <div  class="container__caixa-descricao">
          <p class="container__caixaDescricao-tema">Tema da aula:</p>
          <input class="container__caixaDescricao-input" type="" name="">
          <p class="container__caixaDescricao-conteudo">Descrição do conteúdo:</p>
          <textarea class="container__caixaDescricao-inputConteudo"></textarea>
      </div>              
      <div class="container__caixa-botoes">
          <div>
          <router-link to="professor-inicial">
          <button class="container__caixaBotoes-voltar">Voltar</button>
          </router-link>
          </div>
          <div>
          <router-link to="diario-de-classe">
          <button class="container__caixaBotoes-chamada">Fazer Chamada</button>
          </router-link>
          </div>       
      </div>  
      {{polos}}
    </div>
  </section>
</template>

<script>
  import PerfilProfessor from './PerfilProfessor.vue'
  import { mapGetters, mapActions } from 'vuex'

export default {
   methods: {
      ...mapActions({ 
        getPolos: 'getPolos' 
    })
  },
  components: {
    PerfilProfessor
  },
  computed: {    
    ...mapGetters ({ 
      polos: 'polos'
    })
  },
  created (){
    this.getPolos()
  }
}
</script>

<style type="text/css">

.container{ 
  height: 100vh;
  background: url(../assets/fundo.jpg) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container__caixa{
  width: 80%;
  height: 89.7vh;
  padding:0;
  background-color: #fff;
  border: 2px solid #2E3192;
  border-radius: 10px;
  text-align: left; 
  color: #2E3192;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.container__caixa-coluna{
  width: 20%;
  height: 80%;
}
.container__caixa-descricao{
  width: 55%;
}
.container__caixaDescricao-tema{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
}
.container__caixaDescricao-input{
  width: 100%;
  height: 6vh;
  padding-left: 2%;
  border: 2px solid #2E3192;  
  border-radius: 10px;
  box-sizing: border-box;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #2E3192;
}
.container__caixaDescricao-conteudo{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6em;
}
.container__caixaDescricao-inputConteudo{
  width: 100%;
  height: 40vh;
  padding: 2%;
  border: 2px solid #2E3192;  
  border-radius: 10px;
  box-sizing: border-box;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #2E3192;
  resize: none;
}
.container__caixaColuna-radio {
  padding: 0;
  margin: 0;
}
.container__caixaColuna-radio li{
  list-style: none;
  position: relative;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
}
.container__caixaColuna-radio li span{
  width: 28.42px;
  height: 28.42px;
  top: 5px;
  background: #fff;
  border: 2px solid #2E3192;
  border-radius: 50%;
  position: relative;
  display: inline-block;
}
.container__caixaColuna-radio li span::after{
  content: "";
  width: 18.95px;
  height: 18.95px;
  background: #E84818;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.container__caixaColuna-radio li input[type="radio"]{
  position: absolute;
  opacity: 0;
  top: 10px;
  z-index: 99;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);  
  cursor: pointer;
}
input[type=radio]:checked::after{
  width: 15px;
  line-height: 1px;
  background-color: red;
  opacity: 1;
}
.container__caixaColuna-radio li input[type="radio"]:checked + span::after{
  opacity: 1;
}
.container__caixaColuna-titulo{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6em;
  margin: 25px 0 11px 0;
}
.container__caixa-botoes{
  width: 88%;
  display: flex;
  justify-content: space-between;
}
.container__caixaBotoes-voltar{
  width: 113.67px;
  padding: 10px;
  border: 2px solid #2E3192;
  background-color: #fff;
  border-radius:10px;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #2E3192;
}
.container__caixaBotoes-chamada{
  width:  181.67px;
  padding: 10px;
  background-color: #2E3192;
  border-radius:10px;
  border:none;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #fff;
}
</style>