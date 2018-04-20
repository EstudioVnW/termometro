<template>
  <div class="body">
    <PerfilProfessor></PerfilProfessor>
    <div class="conteudo">
      <div class="conteudo__informacoes">
        <div class="classe__informacoes__dados">
          <h3 class="classe__informacoes__dados--titulo">diário de classe</h3>
          <h3 class="classe__informacoes__dados--titulo">{{modulo}} - {{turma}}</h3>
          <h2 class="classe__informacoes__dados--subtitulo">{{turno}}</h2>
        </div>
        <div class="classe__informacoes__legenda">
          <h1 class="classe__informacoes__legenda--titulo">LEGENDA</h1>
          <p class="classe__informacoes__legenda--dado"><span>P</span> - presente</p>
          <p class="classe__informacoes__legenda--dado"><span>F</span> - falta</p>
          <p class="classe__informacoes__legenda--dado"><span>A</span> - atraso</p>
          <p class="classe__informacoes__legenda--dado"><span>S</span> - aula suspensa</p>
          </p>
        </div>
      </div>
      <table class="conteudo__chamada">
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna"></td> 
          <th class="conteudo__chamada--total" >Nome</th>
          <th class="conteudo__chamada--total" colspan="10">Abril</th> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna"></td> 
          <td class="conteudo__chamada--coluna"> </td> 
          <td class="conteudo__chamada--coluna">3</td>
          <td class="conteudo__chamada--coluna">5</td>
          <td class="conteudo__chamada--coluna">10</td>
          <td class="conteudo__chamada--coluna">12</td>
          <td class="conteudo__chamada--coluna">17</td>
          <td class="conteudo__chamada--coluna">19</td>
          <td class="conteudo__chamada--coluna">24</td>
          <td class="conteudo__chamada--coluna">26</td>
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">1</td> 
          <td class="conteudo__chamada--coluna-names"> Alan Fereira de Oliveira</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">2</td> 
          <td class="conteudo__chamada--coluna-names">Beatriz Regina Ferreira Mendes</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">3</td>
          <td class="conteudo__chamada--coluna-names">Daniella Machado Lima</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">4</td> 
          <td class="conteudo__chamada--coluna-names">Fabio Minervino da Silva</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">5</td> 
          <td class="conteudo__chamada--coluna-names">João Victor Pinto dos Santos</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">6</td> 
          <td class="conteudo__chamada--coluna-names"> Matheus Pereira Santana de Oliveira</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">7</td> 
          <td class="conteudo__chamada--coluna-names">  Pâmela Waleska de Oliveira da Costa</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>  
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">8</td> 
          <td class="conteudo__chamada--coluna-names">Rodrigo Francisco Gonçalves</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>  
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">9</td>
          <td class="conteudo__chamada--coluna-names">Agenor Junio</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">10</td> 
          <td class="conteudo__chamada--coluna-names">Tarcisio Adelson do Nascimento</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">11</td>
          <td class="conteudo__chamada--coluna-names">Thayná Barcelos Santos de Oliveira</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">12</td> 
          <td class="conteudo__chamada--coluna-names">Thiago Brandão da Barros</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">13</td>
          <td class="conteudo__chamada--coluna-names">Veridiane Aparecida Vidal da Silva</td> 
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
        <tr class="conteudo__chamada--linha">
          <td class="conteudo__chamada--coluna-marcacao">14</td> 
          <td class="conteudo__chamada--coluna-names">Yasmin Miranda dos Santos</td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td>
          <td class="conteudo__chamada--coluna-marcacao"><input type="text" maxlength="1"/> </td> 
        </tr>
      </table>
      <div class="conteudo__botoes">
        <div>
          <router-link to="professor-inicial">
            <input  class="conteudo__botoes--volta" type="button" name="botao-ok" value="Voltar">
            <input  class="conteudo__botoes--volta" type="button" name="botao-ok" value="Voltar" v-if="!professor && precisaMudar">
          </router-link>
        </div>
        <div>
          <router-link to="professor-inicial">
            <input  class="conteudo__botoes--iniciar" type="button" name="botao-ok" value="Iniciar Aula">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PerfilProfessor from './PerfilProfessor.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      modulo: 'Modulo I',
      turma: 'Turma 2',
      turno: 'Manhã'
    }
  },
  components: {
    PerfilProfessor
  }
}
</script>
<style scoped>
.body{
  height: 100vh;
  width: 100%;
  background: #F26522 url(../assets/fundo.jpg) no-repeat;
  background-size:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.conteudo{
  width: 80%;
  height: 89.7vh;
  border-radius: 11.5px;
  border:2px solid #2E3192; 
  background-color: #fff; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.conteudo__informacoes{
  width: 16%;
  height: 60vh;
  box-sizing: border-box;
  margin:0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.classe__informacoes__dados{
  width: 100%;
}
.classe__informacoes__dados--titulo{
  margin: 2% 0;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.870em;
  text-transform: uppercase;
  color: #FF611E;
  text-align: left;
}
.classe__informacoes__dados--subtitulo{
  margin: 0;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.80em;
  text-transform: uppercase;
  color: #0F2B92;
  text-align: left;
}

.classe__informacoes__legenda{
  width: 100%;
}
.classe__informacoes__legenda--titulo{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.8em;
  color: #0F2B92;
  text-align: left;
}
.classe__informacoes__legenda--dado{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  color: #FF611E;
  text-align: left;
}
span{
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
}
.conteudo__chamada{
  background: #fff;
  width: 70%;
  margin: 0 2%;
  border-color: #FFAC2D;
  border: 1px solid #FFAC2D;
  border-collapse: collapse;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  color:#0F2B92;
}
.conteudo__chamada--total{
  border: 1px solid #FFAC2D;
}
.conteudo__chamada--linha{
  min-width: 30px;
  border: 1px solid #FFAC2D;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
}
.conteudo__chamada--coluna{
  min-width: 30px;
  border: 1px solid #FFAC2D;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
}
.conteudo__chamada--coluna-marcacao{
  width: 17px;
  height: 17px;
  border: 1px solid #FFAC2D;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
}
.conteudo__chamada--coluna-marcacao input{
  width: 100%;
  border: none;
  text-align: center;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  text-transform: uppercase;
  color:#FF611E;
}
.conteudo__chamada--coluna-marcacao input:focus{
  outline:none;
}
.conteudo__chamada--coluna-names{
  text-align: left;
  font-size: 0.9em;
}
.conteudo__botoes{
  width: 100%;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
}
.conteudo__botoes--volta{
  width: 6vw;
  height: 5vh;
  background-color: #fff;
  border: solid 2px #2E3192;
  border-radius: 10px;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #2E3192;
}
.conteudo__botoes--iniciar{
  width: 10vw;
  height: 5vh;
  background-color: #2E3192;
  border-radius: 10px;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #fff;
}

</style>