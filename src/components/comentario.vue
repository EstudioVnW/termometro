<template>
  <section class="container">
    <div class="containner-descricao">
      <div class="containner-descricao-imagem">
        <img class="containner-descricao-imagem-termometro" src="../assets/termometro.png">
        <img class="containner-descricao-imagem-VaiNaWeb" src="../assets/logo-vainaweb.svg">
      </div>
      <div class="containner-descricao-titulo">
        <p class="containner-descricao-titulo-frase">Agora é a hora de avaliar a aula que você assistiu.</p>
      </div>
      <div class="containner-descricao-texto">
        <p>Responda com sinceridade e faça comentários objetivos e construtivos, que possam ajudar a equipe Vai na Web a melhor o seu aprendizado. Adoramos receber sugestões, então se tiver alguma, deixa aí junto com a sua avaliação.</p>
      </div>
      <div class="containner-avaliacao">
        <p class="containner-avaliacao-imagem"></p>
        <p class="containner-avaliacao-imagem"></p>
        <p class="containner-avaliacao-imagem"></p>
        <p class="containner-avaliacao-imagem"></p>
        <p class="containner-avaliacao-imagem"></p>
      </div>
    </div>
    <div class="container-comentario">
      <div class="container-comentario-titulo">
        <p>Deixe aqui o seu comentário</p>
      </div>
      <div class="container-comentario-escrever">
        <input v-model="escrevercomentario" placeholder="Deixe aqui o seu comentário">
      </div>
      <div class="container-comentario-button">
        <button class="container-comentario-button-avaliar">Avaliar aula</button>
      </div>
    </div>
  </section>
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


section{ 
  background-color: #FCAF17;
  border: 1px solid rgba(0, 0, 0, 0.70);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  height: 99.7vh;
  display: flex;
  /*flex-direction: row;
  justify-content: center;*/
}

.containner-descricao{
  width: 50%;
  text-align: left;
  padding: 5.5% 1% 5.5% 5.5%;
 /*text-align: left;*/
}

.containner-descricao-imagem-termometro{
  width: 6%;
}

.containner-descricao-imagem-VaiNaWeb{
  width: 13%;
  margin-bottom: 1.5%;
}

.containner-descricao-titulo {  
  font-family: Ministry, Heavy, sans-serif;
  color: #2E3192;
  font-size: 2em;
 /* width: 387px;*/
  width: 63%;
}

.containner-descricao-texto {
  color: #fff;
  font-size: 1.375em;
  font-family: Ministry, Medium, sans-serif;
  width: 71%; 
}

.containner-avaliacao{
  display: flex;
  flex-direction: row;
}


.containner-avaliacao-imagem{
  background: #fff;
  width:  12.5vh;
  height:  12.5vh;
  border-radius: 50%;
  border: 1px solid #707070;
  margin: 0 10px auto;
}

.container-comentario {
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-comentario-titulo{
  color: #2E3192;
  font-size: 2em;
  font-family: Ministry, Heavy, sans-serif;
  text-align: left;
}

.container-comentario-escrever input{ 
  height: 44vh;   
  width: 37vw;
  border:1px solid #2E3192;  
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
/*
.container-comentario-escrever:: -webkit-input-placeholder {
  color: #f8433f;
}*/

/*.container-comentario-escrever input:: -webkit-input-placeholder{
    color: #f8433f;*/
    /*background-color: #4C4;
    text-transform: uppercase;
    font-style: bold;
}*/

.container-comentario-button{
  height: 41.53px;
  margin-top: 33px;
  display: flex;
  justify-content: flex-end;
}

.container-comentario-button-avaliar{
  border: none;
  background-color: #2E3192;
  color: #fff;
  border-radius:10px;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 1em;    
  width:  181.67px;
  padding: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}


</style>