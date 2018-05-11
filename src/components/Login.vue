<template>
  <section>
    <div class="orange">
      <!-- <img src="../assets/DSC_1866.jpg"> -->
      <div class="container">
        <div class="logo-Termometro">
          <img src="../assets/termometro.svg">
        </div>
        <div class="dados">
          <input class="dados-email" type="text" name="email"  placeholder="Email0000"></input>
          <input class="dados-senha" type="password" name="senha" placeholder="Senha"></input>
          <div>
          <router-link to="professor-inicial">
          <button class="dados-button">Entrar</button>
          </router-link>
          </div>
        </div>
        <div class="acesso">
          <p class="acesso-PrimeiroPassos"><a href="#">Primeiro Acesso</a></p>
          <p><a href="#">Esqueceu a senha?</a></p>
        </div>
        <div class="logo-VaiNaWeb">
          <img src="../assets/logo-vainaweb.svg">
        </div>
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

section{
  background-image: url(../assets/DSC_1866.jpg);
  background-size: 240vh;;
  background-repeat: no-repeat;
  height: 100vh;/*
  display: flex;
  justify-content: center;
  align-items: center;*/
}

.orange{
  background-color: rgb(252, 175, 23, 0.70);
  width: 100%;
  height: 100%;
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
  /*width: 10%;*/
  width: 66%;
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
  padding-left: 10px;
}

.dados-senha{
  font-size: 0.75em;
  color: #2E3192;
  margin: 0 0 9px 0;
  height: 5.10vh;
  border: 2px solid #2E3192;
  border-radius: 10px;
  padding-left: 10px;
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
  /*width:  27vw;*/
  width:  275.67px;
  padding: 10px;
  color: #fff;
  font-family: Ministry, Heavy, sans-serif;
  font-size: 0.75em;
  border: none;
  background-color: #2E3192;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
  border-radius:10px;   
}

.acesso{
  font-size: 0.875rem;
  display: flex;
  flex-direction: row;
  margin: 5px;

}
a  {text-decoration:none;color:#f26522;}

.acesso-PrimeiroPassos{
  margin: auto 30px auto 1px;
}

.logo-VaiNaWeb img{
  /*width: 10vw;
  width: 76.54px;*/
  width: 37%;
}

</style>
