<template>
  <div class="pai">
    <div class="pai-sobre-o-professor">
      <div class="pai-sobre-inicio">
        <img class="pai-sobre-inicio-termometro-img" src="../assets/termometro-logo.svg">
        <img class="pai-sobre-inicio-logo-img" src="../assets/logo-VNW.svg">
      </div>
      <div class="pai-sobre-expecificacoes-prof" >
        <img class="pai-sobre-foto-professor-perfil" src="../assets/foto-perfil.png">
        <div class="texto">
          <h4 class="pai-sobre-expecificacoes-prof-nome">Rômulo Tunala</h4>
          <h5 class="pai-sobre-expecificacoes-prof-proficao">Professor</h5>
          <h5 class="pai-sobre-expecificacoes-prof-local" >Cpx.alemão</h5>
        </div>
      </div>  
      <input class="pai-sobre-botao" type="button" name="botao-ok" value="Sair">
    </div>
    <div class="pai-avaliaçao-da-aula">
      <div class="pai-avaliaçao-da-aula-conteiner">
        <h1 class="pai-avaliaçao-da-aula-conteiner-titulo">Avaliação da Aula:</h1>
        <div class="pai-avaliaçao-da-aula-conteiner-dupla">
          <img class="pai-avaliaçao-da-aula-termometro_img" src="../assets/termometro.svg">
          <img class="pai-avaliacao-medidor" src="../assets/medidor.svg" >  
          
        </div>  
        <h3 class="pai-avaliaçao-da-aula-sobre_aula">A aula de hoje recebeu uma avaliação menor que 5. <br>Veja os comentarios dos estudantes.</h3>
        <input class="pai-avaliaçao-da-aula-botao" type="button" name="botao-ok" value="Voltar">
      </div>  
      <div class="pai-avaliaçao-da-aula-comentarios">
        <h1 class="pai-avaliaçao-da-aula-comentarios-h1">Comentários</h1>
        <div class="pai-avaliaçao-da-aula-comentarios-lista">
              <ul class="pai-avaliaçao-da-aula-comentarios-lista-ul" v-for="recado in usuario.recados">
              <li>{{recado}}</li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'recados',
    data () {
      return {
        recado: '',
        usuario: {
          recados: ['Não consegui entender o conteúdo. Seria melhor se tivesse um esquema para facilitar a visualização do conteúdo.','O método utilizado para explicar o conteúdo não foi muito fácil de entender.','Se o professor tivesse usado um desenho ou um video para explicar como funciona o CSS seria melhor.','Achei que o professor se extendeu demais durante a explica- ção e o conteúdo não ficou claro.','Eu teria compreendido melhor a aula se o professor tivesse usado um outr jeito de dar aula.','Socorro os codigos não gostão de mim, vou desistir sem socorro.','Eu quero minha mamãe, vou chorar, isso é muito difícil pra mim']
            
        }
      }
    },
    methods: {
      addRecado(recado) {
        return this.usuario.recados.push(this.recado),
             this.recado = ''
      }
    }
}
  
</script>

<style scoped>
  .pai{
    display: flex;
    flex-direction: row;
    background-color: #FF8C00;
    padding: 23px 3px 23px 6px;
    height: 93vh;
    justify-content: space-around;
    background-image: url(../assets/foto-fundo.jpg); 
    background-size: 100vw 113vh;
    background-repeat: no-repeat;
  }
  .pai-sobre-o-professor{
    display: flex;
    width: 15vw;
    border-style: solid;
    border-color: #2E3192;
    border-width: 2px;
    background-color: #FFFFFF;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
  }
  .pai-sobre-inicio-termometro-img{
    height: 80px;
    width: 60px;  
  }
  .pai-sobre-inicio-logo-img{
    height: 7vh;
    width: 5vw;
  }
  
  .pai-sobre-inicio{
    margin: 0 auto;
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: center;
  }
  .pai-sobre-foto-professor-perfil{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    margin: 0 35px 20px;
    background-color: #F26522;
    border-color: #2E3192;
    border-width: 0,1em;
    border-style: solid;
  }
  .pai-sobre-expecificacoes-prof{
    margin: 0;
    color: #2E3192;
  }
 
  .pai-sobre-expecificacoes-prof-nome{
    
    margin: 0;
    font-weight: bold;
    font-size: 0.9em;
  }
  .pai-sobre-expecificacoes-prof-proficao{
    margin: 0;
    font-weight: normal;
    font-size: 0.9em;
  }
  .pai-sobre-expecificacoes-prof-local{
    margin: 0;
    font-weight: normal;    
  }
  .pai-sobre-botao{
    border-radius: 8px;
    height: 5vh;
    width: 7vw;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;      
  }
  .pai-avaliaçao-da-aula{
    display: flex;
    margin: 0 ;
    background-color: #FFFFFF;
    width: 80vw;
    border-color:#2E3192;
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
  }
  .pai-avaliaçao-da-aula-conteiner{
    display: flex;
    flex-direction: column;
    height: 43.9vw;
    width: 30vw;
    margin: 0;
    color: #2E3192;
    justify-content: space-evenly;
    align-items: center;
  }
  .pai-avaliaçao-da-aula-conteiner-dupla{
    display: flex;
    justify-content: space-between;
    height: 30vh;
    width: 15vw;
    align-items: center;
  }
  .pai-avaliaçao-da-aula-conteiner-titulo{
    font-weight: normal;
    margin: 0;
    justify-content: flex-end;
    flex-direction: column;
    font-size: 1.5em;
    font-weight:bold;
  }
  .pai-avaliaçao-da-aula-termometro_img{
    height: 300px;
    width: 107px;
    margin: 0;
  }
  .pai-avaliacao-medidor{
    height: 240px;
    width: 160px;
    margin: 0 0 20px 0;
  } 

  .pai-avaliaçao-da-aula-sobre_aula{
    margin: 0;
    justify-content: flex-end;
    height: 50vh;
    align-self: center;
    padding: 10px 0px 0px 0px;
  }
  .pai-avaliaçao-da-aula-sobre_aula{
    width: 18vw;
    height: 7vh;
    text-align: left;
    justify-content: flex-end;
    margin: 0;
    font-weight: normal;
    font-size: 1em;
  }
  .pai-avaliaçao-da-aula-botao{
    align-self: flex-end;
    border-radius: 8px;
    height: 5vh;
    width: 7vw;
    border-style: 2px;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    align-self: flex-start;
    margin:  10px 0px 0px 40px;
  }
  .pai-avaliaçao-da-aula-comentarios{
    color: #2E3192;
    height: 60vh;
    width: 38vw;
    margin: 0;
    text-align: left;
    align-self: center; 

  }
  .pai-avaliaçao-da-aula-comentarios-h1{
    font-weight: normal;
    font-weight: bold;
    font-size: 1.5em;
  }
  .pai-avaliaçao-da-aula-comentarios-lista{
    height: 50vh;
    margin: 0;
    overflow: auto;
  }
  .pai-avaliaçao-da-aula-comentarios-lista-ul{
    overflow: auto;
    list-style: none;
    border-style: solid;
    border-width: 2px;
    border-color: #2E3192;
    border-radius: 8px;
  }
</style>

