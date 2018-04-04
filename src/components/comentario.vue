<template>
  <section class="container">
    <div class="containner-descricao">
      <div class="containner-descricao-imagem">
        <img class="containner-descricao-imagem-termometro" src="../assets/termometro2.svg">
        <img class="containner-descricao-imagem-VaiNaWeb" src="../assets/logo-vainaweb.svg">
      </div>
      <div class="containner-descricao-titulo">
        <p class="containner-descricao-titulo-frase">Agora é a hora de avaliar a aula que você assistiu.</p>
      </div>
      <div class="containner-descricao-texto">
        <p>Responda com sinceridade e faça comentários objetivos e construtivos, que possam ajudar a equipe Vai na Web a melhor o seu aprendizado. Adoramos receber sugestões, então se tiver alguma, deixa aí junto com a sua avaliação.</p>
      </div>
      <div class="containner-avaliacao">
        <img class="containner-avaliacao-imagem" src="../assets/chata.png">
        <img class="containner-avaliacao-imagem" src="../assets/desanimada1.png">
        <img class="containner-avaliacao-imagem" src="../assets/ok.png">
        <img class="containner-avaliacao-imagem" src="../assets/animada.png">
        <img class="containner-avaliacao-imagem" src="../assets/incrivel.png">
      </div>
    </div>
    <div class="container-comentario">
      <div class="container-comentario-titulo">
        <p>Deixe aqui o seu comentário</p>
      </div>
      <div class="container-comentario-escrever">
        <textarea placeholder="Deixe aqui o seu comentário"></textarea>
        <!-- <input v-model="escrevercomentario" placeholder="Deixe aqui o seu comentário"> -->
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
  height: 100vh;
  display: flex;
  justify-content: center;
}

.containner-descricao{
  width: 50%;
  text-align: left;
  padding: 5.5% 0 5.5% 5.5%;
}

.containner-descricao-imagem-termometro{
  width: 5.6%;
}

.containner-descricao-imagem-VaiNaWeb{
  width: 16%;
  margin: 19px 8px;
}

.containner-descricao-titulo {  
  font-family: Ministry, Heavy, sans-serif;
  color: #2E3192;
  font-size: 2em;
  width: 63%;  
  font-weight: bolder;
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
  width: 89.85px;
  height: 79.85px;
}

.container-comentario {
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bolder;
}

.container-comentario-titulo{
  color: #2E3192;
  font-size: 2em;
  font-family: Ministry, Heavy, sans-serif;
  text-align: left;  
  font-weight: bolder;
}

.container-comentario-escrever textarea{ 
  height: 30vh;   
  width: 37vw;
  border: 2px solid #2E3192;  
  border-radius: 10px;
  resize: none;
  color: #2E3192;
  padding: 10px;
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