<template>
  <div class="body">
    <PerfilProfessor descricao="true" :professor="professor" :precisaMudar="true"></PerfilProfessor>
    <div class="conteudo-duvidas">
      <div class="conteudo-duvidas__container">
        <h1 class="conteudo-duvidas__container--titulo">Centro de Dúvidas</h1>
        <div class="conteudo-duvidas__container-bloco">
          <form class="conteudo-duvidas__container-bloco-caixa">
            <ul class="conteudo-duvidas__container-bloco-caixa-lista">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor"></div>
              <li class="conteudo-duvidas__container-bloco-caixa-lista--duvida" id="app" v-for="duvida in usuario.duvidas">{{duvida}}</li>
            </ul>
          </form>
          <div class="conteudo-duvidas__container-bloco-caixa2">
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor1"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Respondido</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor2"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Responder depois</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor3"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Chamar atenção</p>
            </div>
            <div class="conteudo-duvidas__container-bloco-caixa2-caixa">
              <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor">
                <div class="conteudo-duvidas__container-bloco-caixa2-caixa--cor--color cor4"></div>
              </div>
              <p class="conteudo-duvidas__container-bloco-caixa2-caixa--texto">Dar prioridade</p>
            </div>
          </div>
        </div>
        <div class="conteudo-duvidas__container-bloco2" v-if="!professor">
            <input class="conteudo-duvidas__container-bloco2--input" v-model="duvida" v-on:keyup.enter="addDuvida" placeholder="Digite a sua dúvida">
            <button class="conteudo-duvidas__container-bloco2--button" v-on:click="addDuvida">
              Enviar dúvida
            </button>
        </div>
        <div class="container-button">
          <div>
          <router-link to="professor-inicial" v-if="professor">
          <button class="container-button-voltar">Voltar</button>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
  import axios from 'axios';
  import PerfilProfessor from './PerfilProfessor.vue'
  export default {
  name: 'DuvidaAluno',
  props: ['professor'],
  data () {
    return {
      respostas: [],
            usuario: {
     duvidas:[     
        ],
    }
  }
},
  created: function() {
  this.professor = this.$route.query.professor;
  //   axios.get()
  //   .then(response => {
  //     this.respostas = response.data
  //     this.duvida = ''
  //   })
  // this.addDuvida();
},
  methods: {
    addDuvida: function(){
      axios.get()
      this.usuario.duvidas.push(this.duvida)
      this.duvida = ''
      
    }
    // .catch(e=>{
    //   this.error.push(e);
    // })
},
  components: {
    PerfilProfessor
  }
}
</script> 
<!--  methods: {
    addDuvida: function(){
      axios.get('http://jsonplaceholder.typicode.com/users')
      this.usuario.duvidas.push(this.duvida)
      this.duvida = ''
      .then(response => {
      // this.usuario.duvidas=response;
      this.usuario.duvidas.push(this.duvida);
      this.duvida = ''
    } -->
<!-- <script>
  import axios from 'axios';
  import PerfilProfessor from './PerfilProfessor.vue'
export default {
  name: 'DuvidaAluno',
  props: ['professor'],
  data () {
    return {
        respostas: [],
            usuario: {
        duvidas:[     
        ],
      },
    } 
  },
  // created
    // computed
    created() {
    this.professor = this.$route.query.professor;
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.respostas = response.data
      })
  },
  methods:{
    addDuvida(){
      this.usuario.duvidas.push(this.duvida)
      this.duvida = ''
    },
  },
  components: {
    PerfilProfessor
  }
}
</script>  -->

<!-- axios({
  method: 'post', // verbo http
  url: 'http://url-api.com/api/v1/recurso', // url
  data: {
    name: 'Carlos', // Parâmetro 1 enviado
    company: 'EspecializaTi' // Parâmetro 2 enviado
  }
})
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
}) -->

// import axios from 'axios'; 
  import PerfilProfessor from './PerfilProfessor.vue'
  // import duvidas from '..../termometro-api/services/duvidas.py'
  export default {
    name: 'DuvidaAluno',
    props: ['professor'],
    data () {
      return {
              usuario: {
          duvidas:[
          ],
          duvidas: [
          ]
        },
      }
    },
    created() {
      this.professor = this.$route.query.professor;

      axios.get(`http://0.0.0.0:5000/duvidas`)
      .then(response => {
        this.duvidas = response.data
      })
    },
    methods:{
      addduvida(){
        this.usuario.duvidas.push(this.duvida)
        this.duvida = ''
      }
    },
    components: {
      PerfilProfessor
    }
  }

// import axios from 'axios';
//   export default {
//     name: 'Aula11B',
//     data () {
//       return {
//         usuarios: []
//       }
//     },
//     created(){
//       axios.get(`http://jsonplaceholder.typicode.com/users`)
//       .then(response => {
//         this.usuarios = response.data
//       })
//     }
//   }

<style scoped>
.body{
    background: url(../assets/fundo.jpg) no-repeat;
    background-size: 100%;
    height: 93vh; 
    padding: 23px 6px;
    /*background: url(../assets/fundo.jpg) no-repeat #FF8C00; */
    /*background-size: cover;*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .conteudo-duvidas{
    width: 80vw;
    height: 88vh;
    background-color: #fff;
    border: solid 2px #2E3192;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .conteudo-duvidas__container{
    height: 90vh;
    width: 60vw;
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: #2E3192;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

  }
  .conteudo-duvidas__container--titulo{
    width: 100%;
  }
  .conteudo-duvidas__container-bloco{
    display: flex;
    justify-content: space-between;
  }
  .conteudo-duvidas__container-bloco-caixa{
    width: 40vw;
    height: 55vh;
    margin-bottom: 2%;
    padding-right: 1%;
    overflow: auto;
  }
  .conteudo-duvidas__container-bloco-caixa-lista{
    padding: 1%; 
    border: solid 2px #2E3192;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa-lista--duvida{
    width: 85%;
    margin: 5px 10px;
    color: #2E3192;
    list-style-type: none;
  }
  .conteudo-duvidas__container-bloco-caixa2{
    width: 25%;
    height: 25vh;
    padding: 1% 0;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--cor{
    width: 22px;
    height: 22px;
    border: solid 2px #2E3192;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--cor--color{
    width: 20px;
    height: 20px;
    border-radius: 5px;
  }
  .cor1{
    background: #18E834;
  }
  .cor2{
    background: #FCAF17;
  }
  .cor3{
    background: #FF0000;
  }
  .cor4{
    background: #F26522;
  }
  .conteudo-duvidas__container-bloco-caixa2-caixa--texto{
    width: 70%;
    font-size: 14px;
    margin-left: 2%;
    font-family: ministry, sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  .conteudo-duvidas__container-bloco2{
    width: 100%;
    height: 9vh;
    border: solid 2px #2E3192;
    border-radius: 8px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conteudo-duvidas__container-bloco2--input{
    width: 95%;
    height: 8vh;
    margin-right: 1%;
    border: none;
    font-size: 16px;
    color: #2E3192;
    padding-left: 1%;
  }
  .conteudo-duvidas__container-bloco2--button{
    width: 10vw;
    height: 7vh;
    background-color: #2E3192;
    border: none;
    border-radius: 8px;
    color: #fff;
    align-self: center;
  }
  .container-aula{
  color: #2E3192;
  border: 2px solid #2E3192;
  border-radius: 10px;
  background-color: #fff;
  width: 66vw;
  height: 90vh;
  text-align: left; 
  padding:0 60px 0 18px;
  
}
.container-button{
  display: flex;
  justify-content: space-between;
  margin: 30px 50px 0 0;

}
.container-button-voltar{
  width: 7vw;
  height: 6vh;
  border: 2px solid #2E3192;
  background-color: #fff;
  border-radius:10px;
  padding: 10px;
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  color: #2E3192;
}
</style>
