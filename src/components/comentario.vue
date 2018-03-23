<template>
  <section>
    <div class="containnerUm">
      <div class="imagem">
        <img class="imagem-termometro" src="../assets/termometro.png">
        <img class="imagem-vainaweb" src="../assets/logo-vainaweb.svg">
      </div>
      <div class="titulo">
        <p class="titulo-frase">Agora é a hora de avaliar a aula que você assistiu.</p>
      </div>
      <div class="texto">
        <p>Responda com sinceridade e faça comentários objetivos e construtivos, que possam ajudar a equipe Vai na Web a melhor o seu aprendizado. Adoramos receber sugestões, então se tiver alguma, deixa aí junto com a sua avaliação.</p>
      </div>
      <div class="avaliacao">
        <p class="avaliacao-imagem"></p>
        <p class="avaliacao-imagem"></p>
        <p class="avaliacao-imagem"></p>
        <p class="avaliacao-imagem"></p>
        <p class="avaliacao-imagem"></p>
      </div>
    </div>
    <div class="comentario">
      <div class="comentario-titulo">
        <p>Deixe aqui o seu comentário</p>
      </div>
<div class="comentario-escrever">
        <input v-model="escrevercomentario" placeholder="Deixe aqui o seu comentário">
      </div>
      <div class="comentario-button">
        <button class="button">Avaliar aula</button>
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

body{
  background-color: #FCAF17;
  margin: 0;
  padding: 0;
  border: 1px solid #707070;
  height: 86vh;
  /*overflow: hidden;*/
}
section{  
  display: flex;
  flex-direction: row;
  justify-content: center;
  /*margin: auto 0;*/
  }

.containnerUm{
  /*width: 50%;*/
  text-align: left;
}
.imagem{
}

.imagem-termometro{
  width: 40.36px;
}

.imagem-vainaweb{
  width: 102.41px;
}

.titulo {  
  font-family: Ministry, Heavy, sans-serif;
  color: #2E3192;
  font-size: 32px;
  width: 387px;

}
.texto {
  color: #fff;
  font-size: 22px;
  font-family: Ministry, Medium, sans-serif;
  width: 480px; 
}

.avaliacao{
  display: flex;
  flex-direction: row;
}
.avaliacao-imagem{
  background: #fff;
  width:  89.85px;
  height:  89.85px;
  border-radius: 50%;
  margin: 2px;
}

.comentario {
  margin-top: 95px;
}

.comentario-titulo{
  color: #2E3192;
  font-size: 32px;
  font-family: Ministry, Heavy, sans-serif;
  text-align: left;
}

.comentario-escrever {
 

}

.comentario-escrever input{ 
  height: 264.53px; 
  border:1px solid #2E3192;  
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  width: 37vw;
  color: #2E3192;
}

.comentario-escrever:: -webkit-input-placeholder {
  color: #f8433f;
}

.comentario-escrever input:: -webkit-input-placeholder{
    color: #f8433f;
    /*background-color: #4C4;
    text-transform: uppercase;
    font-style: bold;*/
}

.comentario-button {
  min-height: 41.53px;
  margin-top: 33px;
  display: flex;
  justify-content: flex-end;
}

.button{
  border: none;
  background-color: #2E3192;
  color: #fff;
  border-radius:10px;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 16px;    
  width:  181.67px;
  padding: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}


</style>