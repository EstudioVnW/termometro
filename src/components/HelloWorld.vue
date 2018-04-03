<template>
  <section>
    <div class="container">
      <div class="logo-Termometro">
        <img src="../assets/termometro.png">
      </div>
      <form v-on:submit.prevent="loginRequest">
        <div class="dados">
          <input 
          class="dados-email"  
          placeholder="Email" 
          type="email" 
          @input="event => {form.email = event.target.value} " />
          <input 
          class="dados-senha"  
          placeholder="Senha" 
          type="password" 
          @input="event => {form.senha = event.target.value} "/>
          <button class="dados-button" type="submit">Entrar</button>
        </div>
      </form>
      <div class="acesso">
        <p class="acesso-PrimeiroPassos">Primeiro Acesso</p>
        <p>Esqueceu a senha?</p>
      </div>
      <div class="logo-VaiNaWeb">
        <img src="../assets/logo-vainaweb.svg">
      </div>
    </div>
  </section>
</template>

<style type="text/css"></style>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'login'
  ],
  data () {
    return {
      form: {}
    }
  },
  methods: {
    loginRequest() {
      this.login(this.form.email, this.form.senha)
    }
  }
}
</script>


<style scoped>

section{
  background-color: #FCAF17;
  border: 1px solid rgba(0, 0, 0, 0.70);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  height: 99.7vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 502px;
  min-height: 403px;
  background-color: #fff;
  border: 2px solid #2E3192;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo-Termometro img{
  /*width: 5vw;*/
  /*width: 36px;*/
  width: 10%;
  /*width: 36%;*/
  margin: 0 0 21px 0;
}

.dados{
  display: flex;
  flex-direction: column;
} 

.dados-email{
  font-size: 0.75em;
  color: #2E3192;
  margin: 0 0 9px 0;
  height: 5.10vh;
  border: 2px solid #2E3192;
  border-radius: 10px;
  padding-left: 5px;
}

.dados-senha{
  font-size: 0.75em;
  color: #2E3192;
  margin: 0 0 9px 0;
  height: 5.10vh;
  border: 2px solid #2E3192;
  border-radius: 10px;
  padding-left: 5px;
}

.dados-button{
  /*width:  27vw;*/
  width:  275.67px;
  padding: 10px;
  color: #fff;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 0.75em;
  border: none;
  background-color: #2E3192;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius:10px;   
}

.acesso{
  color: #f26522;
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;    
}

.acesso-PrimeiroPassos{
  margin: auto 30px auto 1px;
}

.logo-VaiNaWeb img{
  /*width: 10vw;
  width: 76.54px;*/
  width: 37%;
}

</style>
