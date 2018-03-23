<template>
  <section>
    <div class="containner">
      <div class="LogoTermometro">
        <img src="../assets/termometro.png">
      </div>
      <div class="dados">
        <input class="dados-email"  placeholder="Email"></input>
        <input class="dados-senha"  placeholder="Senha"></input>
        <button class="dados-button">Entrar</button>
      </div>
      <div class="acesso">
        <p>Primeiro Acesso</p>
        <p>Esqueceu a senha?</p>
      </div>
      <div class="logovai">
        <img src="../assets/logo-vainaweb.svg">
      </div>
    </div>
  </section>
</template>

<style type="text/css"></style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

section{
  display: flex;
  justify-content: center;
  align-items: center;
}

.containner{
  width: 502px;
  min-height: 403px;
  background-color: #fff;
  border: 2px solid #2E3192;
  border-radius: 10px;
 /* box-shadow: 0px 3px 6px #000000;*/
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.LogoTermometro img{
  width: 33.51px;
}

.dados{
  color: #2E3192;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}

.dados-email{
  color: #2E3192;
}

.dados-senha{
  color: #2E3192;
}

.dados-button{
  width:  275.67px;
  margin: 9.47px 0 0 0;
  padding: 10px;
  color: #fff;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 16px;
  border: none;
  background-color: #2E3192;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius:10px;   
}

.acesso{
  color: #f26522;
  font-size: 0.875rem;
  /*display: flex;  
  justify-content: space-around;
  align-items: center;*/
}

.logovai{
  width: 10vh;
}

</style>
