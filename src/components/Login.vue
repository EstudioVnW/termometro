<template>
  <section class="Bloco__inicial">
    <div class="BlocoInicial-filtro">
      <div class="BlocoInicial-box">
        <img class="BlocoInicial-logo--termometro" src="../assets/termometro.svg">       
        <form action="" method="POST" >
          <div class="dados">
              <input class="dados-email" type="text" name="email"  placeholder="Email"></input>
              <input class="dados-senha" type="password" name="senha" placeholder="Senha"></input>
              <router-link to="professor-inicial">
                <button class="dados-button">Entrar</button>
              </router-link>
          </div>
          <div class="acesso">
            <p class="acesso-PrimeiroPassos"><a href="#">Primeiro Acesso</a></p>
            <p><a href="#">Esqueceu a senha?</a></p>
          </div>
        </form>
        <img class="BlocoInicial-logo--vnw" src="../assets/logo-vainaweb.svg">
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
    document.getElementById('postForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var email = document.getElementById('postEmail').value;
      var senha = document.getElementById('postSenha').value;

      axios.post('http://jsonplaceholder.typicode.com/users',{
        email: email,
        senha: senha
      }).then(function(result){
        postResults = document.getElementById('postResults');

        li = document.createElement('li');
        li.textContent = result.data.email;

        postResults.appendChild(li);
      }).cath(function(error) {
        console.log(error)
      });
      })
    }
  }
</script>


<style scoped>

.Bloco__inicial{
  height: 100vh;
  background: url(../assets/fundo.jpg) no-repeat;
  background-size: 100%;
}
.BlocoInicial-filtro{
  width: 100%;
  height: 100%;
  background-color: rgb(252, 175, 23, 0.70);
  display: flex;
  justify-content: center;
  align-items: center;
}
.BlocoInicial-box{
  width: 502px;
  height: 403px;
  background-color: #ffff;
  border: 2px solid #2E3192;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.BlocoInicial-logo--termometro{
  width: 20vw;
  height: 15vh;
  margin: 0 0 21px 0;
}
.dados{
  display: flex;
  flex-direction: column;
}
.dados form{
  display: flex;
  flex-direction: column;
}
.dados-email{
  height: 5.10vh;
  border: 2px solid #2E3192;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 0.75em;
  color: #2E3192;
  margin: 0 0 9px 0;
}
.dados-senha{
  height: 5.10vh;
  padding-left: 10px;
  margin: 0 0 9px 0;
  border: 2px solid #2E3192;
  border-radius: 10px;
  font-size: 0.75em;
  color: #2E3192;
}
::-webkit-input-placeholder {
  color: #2E3192;
  font: 12px Ministry, Medium, sans-serif;
}
:-moz-placeholder {
  color: #2E3192;
  font: 12px Ministry, Medium, sans-serif;
}
::-moz-placeholder {
  color: #2E3192;
  font: 12px Ministry, Medium, sans-serif;
}
:-ms-input-placeholder {  
  color: #2E3192;
  font: 12px Ministry, Medium, sans-serif;
}
.dados-button{
  width:  275.67px;
  padding: 10px;
  border: none;
  background-color: #2E3192;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
  border-radius:10px;   
  color: #fff;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 0.75em;
}
.acesso{
  margin: 5px;
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;
}
a  {text-decoration:none;color:#f26522;}
.acesso-PrimeiroPassos{
  margin: auto 30px auto 1px;
}
.BlocoInicial-logo--vnw{
  width: 10vw;
  height: 10vh;
}

</style>
