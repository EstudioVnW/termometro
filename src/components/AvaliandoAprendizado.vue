<template>
  <div class="body">
    <div class="body__descricao">
      <div class="body__descricao-imgs">
        <img class="body__descricao--termometro" src="../assets/termometro.svg">
        <img class="body__descricao--vnw" src="../assets/logo-vainaweb.svg">
      </div>
      <h1 class="body__descricao--titulo">
        Agora é a hora de avaliar a aula que você assistiu.
      </h1>
      <p class="body__descricao--paragrafo">
        Responda com sinceridade e faça comentários objetivos e construtivos, que possam ajudar a equipe Vai na Web a melhor o seu aprendizado. Adoramos receber sugestões, então se tiver alguma, deixa aí junto com a sua avaliação.
      </p>
      <div class="body__descricao-avaliacao">
        <div class="body__descricao-avaliacao--caixa">
          <img class="body__descricao-avaliacao--img" src="../assets/chata.png">
          <span class="body__descricao-avaliacao--leg">chata</span>
        </div>
        <div class="body__descricao-avaliacao--caixa">
          <img class="body__descricao-avaliacao--img" src="../assets/desanimada1.png">
          <span class="body__descricao-avaliacao--leg">desanimada</span>
        </div>
        <div class="body__descricao-avaliacao--caixa">
          <img class="body__descricao-avaliacao--img" src="../assets/ok.png">
          <span class="body__descricao-avaliacao--leg">ok</span>
        </div>
        <div class="body__descricao-avaliacao--caixa">
          <img class="body__descricao-avaliacao--img" src="../assets/animada.png">
          <span class="body__descricao-avaliacao--leg">animada</span>
        </div>
        <div class="body__descricao-avaliacao--caixa">
          <img class="body__descricao-avaliacao--img" src="../assets/incrivel.png">
          <span class="body__descricao-avaliacao--leg">incrível</span>
        </div>
      </div>
    </div>
    <div class="body__descricao body__descricao--direita">
      <h1 class="body__descricao--titulo">Deixe aqui o seu comentário</h1>
      <textarea class="body__descricao--comentario" placeholder="Deixe aqui o seu comentário"></textarea>
      <div class="body__descricao--button">
        <router-link to="aviso-termino">
        <button class="body__descricao--button-avaliar">Avaliar aula</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comentario',
  data () {
    return {
      escrevercomentario: ''
    }
  }
}
</script>

<style type="text/css">
.body{ 
  height: 100vh;
  background-color: #FCAF17;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.body__descricao{
  width: 50%;
  padding: 4%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
}
.body__descricao--direita{
  height: 79.2vh;
  padding: 0;
  justify-content: flex-end;
}
.body__descricao-imgs{
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: flex-start;
}
.body__descricao--termometro{
  width: 5.6%;
}
.body__descricao--vnw{
  width: 16%;
  margin: 19px 8px;
}
.body__descricao--titulo{
  font-family:"ministry";
  font-style:normal;
  font-weight:700;
  color: #2E3192;
  font-size: 2em;
  text-align: left;
}
.body__descricao--paragrafo{
  margin: 0 0 3% 0;
  font-family:"ministry";
  font-style:normal;
  font-weight:400;
  color: #fff;
  font-size: 1.375em;
  text-align: left;
}
.body__descricao-avaliacao{
  display: flex;
  flex-direction: row;
}
.body__descricao-avaliacao--caixa{
  margin: 0 1%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.body__descricao-avaliacao--img{
  width: 89px;
  height: 79px;
  margin: 0 1%;
  transition: opacity 2s, transform .4s;
}
.body__descricao-avaliacao--img:hover{
  transform: scale(1.2);
}
.body__descricao-avaliacao--leg{
  font-size: .8em;
  color: #000;
  font-family:"ministry";
  font-style:normal;
  font-weight:400;
  opacity: 0;
}
.body__descricao-avaliacao--img:hover + .body__descricao-avaliacao--leg{
  opacity: 1;
}
.body__descricao--comentario{ 
  width: 85%;
  height: 30vh;   
  padding: 10px;
  border: 2px solid #2E3192;  
  border-radius: 10px;
  resize: none;
  color: #2E3192;
}
::-webkit-input-placeholder {
  color: #2E3192;
  font: 16px Ministry, Medium, sans-serif;
}
:-moz-placeholder {
  color: #2E3192;
  font: 16px Ministry, Medium, sans-serif;
}
::-moz-placeholder {
  color: #2E3192;
  font: 16px Ministry, Medium, sans-serif;
}
:-ms-input-placeholder {  
  color: #2E3192;
  font: 16px Ministry, Medium, sans-serif;
}
.body__descricao--button{
  width: 89%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
.body__descricao--button-avaliar{
  width:  181.67px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #2E3192;
  color: #fff;
  font-family:"ministry";
  font-style:normal;
  font-weight:400;
  font-size: 1em;    
  /*box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);*/
}
</style>