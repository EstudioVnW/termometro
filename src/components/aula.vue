<template>
  <section class="container">
    <div class="container-perfil">
      <div class="container-perfil-logo">
        <img class="container-perfil-logo-termometro" src="../assets/termometro2.svg">
        <img class="container-perfil-logo-vainaweb" src="../assets/logo-vainaweb.svg">
      </div>
      <div  class="container-perfil-professor">
        <img class="container-perfil-professor-foto" src="../assets/foto-perfil.png">
        <p class="container-perfil-professor-nome">Rômulo Tunala</p>
        <p class="container-perfil-professor-proficao">Professor</p>
        <p class="container-perfil-professor-local">Cpx.alemão</p>
      </div>
      <div class="container-perfil-button">
        <input class="container-perfil-button-sair" type="button" name="botao-ok" value="Sair">
      </div>
    </div>
    <div class="container-aula">
      <div class="container-aula-texto">
        <div>
          <div class="container-aula-descricao">
              <p class="container-aula-polo">Pólo:</p>
              <div class="container-aula-polo-descricao">
                <ul class="custom-radio">
                  <li>
                    <input type="radio" name="choice" checked>
                    <span></span>
                    <label>Alemão</label>
                  </li>
                  <li>
                    <input type="radio" name="choice">
                    <span></span>
                    <label>Prazeres</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="container-aula-descricao">
              <p class="container-aula-modulo">Módulo:</p>
              <ul class="custom-radio">
                <li>
                  <input type="radio" name="modulo" checked>
                  <span></span>
                  <label>Módulo 1</label>
                </li>
                <li>
                  <input type="radio" name="modulo">
                  <span></span>
                  <label>Módulo 2</label>
                </li>
                <li>
                  <input type="radio" name="modulo">
                  <span></span>
                  <label>Módulo 3</label>
                </li>
              </ul>
            </div>
            <div class="container-aula-descricao">
              <p  class="container-aula-turno">Turno:</p>
              <ul class="custom-radio">
                <li>
                  <input type="radio" name="Turno"  checked>
                  <span></span>
                  <label>Manhã</label>
                </li>
                <li>
                  <input type="radio" name="Turno">
                  <span></span>
                  <label>Tarde</label>
                </li>
              </ul>
            </div>
          </div>
        <div  class="container-aula-Dois">
          <div class="container-aula-descricao">
            <p class="container-aula-tema">Tema da aula:</p>
            <input class="container-aula-tema-input" type="" name="">
          </div>
          <div class="container-aula-descricao">
            <p class="container-aula-conteudo">Descrição do conteúdo:</p>
            <textarea class="container-aula-conteudo-input"></textarea>
          </div>
        </div>              
      </div>
      <div class="container-button">
          <button class="container-button-voltar">Voltar</button> 
          <button class="container-button-chamada">Fazer Chamada</button>       
      </div>  
    </div>
  </section>
</template>

<script>
  
</script>

<style type="text/css">

.container{ 
  padding: 23px 3px 23px 6px;
  height: 93vh;
  display: flex;
  justify-content: space-around;
  background-image: url(../assets/DSC_1866.jpg); 
  background-size: 100vw 113vh;
  background-repeat: no-repeat;
}

.container-perfil{
  display: flex;
  width: 19.5vw;
  border: 2px solid #2E3192;
  background-color: #FFFFFF;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: space-around;
}

.container-perfil-logo{
  display: flex;
  width: 15vw;
  align-items: center;
  justify-content: center;
}

.container-perfil-logo-termometro{
  height: 95.67px;
  width: 60px;
}

.container-perfil-logo-vainaweb{
  height: 54.47px;
  width: 76.54px;
}

.container-perfil-professor{
  color: #2E3192;
}

.container-perfil-professor-foto{
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 2px solid #2E3192;
  background-color: #F26522;
}

.container-perfil-professor-nome{
  margin: 0;
  font-size: 1em;
    font-family: Ministry, Heavy, sans-serif;
}

.container-perfil-professor-proficao{
  margin: 0;
  font-size: 1em;
    font-family: Ministry, Heavy, sans-serif;
}

.container-perfil-professor-local{
  margin: 0;
  font-size: 1em;
    font-family: Ministry, Heavy, sans-serif;
}

.container-perfil-button{
  margin-bottom: -36px;
}

.container-perfil-button-sair{
  border-radius: 10px;
  height: 6vh;
  width: 8vw;
  background-color: #FFFFFF;
  border: 2px solid #2E3192;
  color: #2E3192;
  font-size: 1em;
  font-family: Ministry, Heavy, sans-serif; 
}

.container-aula{
  color: #2E3192;
  border: 2px solid #2E3192;
  border-radius: 10px;
  background-color: #fff;
  width: 66vw;
  text-align: left; 
  
}

.container-aula-texto{
  display: flex;
  justify-content: space-around;
}

.custom-radio {
  padding: 0;
  margin: 0;
}

.custom-radio li{
  list-style: none;
  position: relative;
}

.custom-radio li span{
  width: 28.42px;
  height: 28.42px;
  top: 5px;
  background: #fff;
  position: relative;
  display: inline-block;
  border: 2px solid #2E3192;
  border-radius: 50%;
}

.custom-radio li span::after{
  position: absolute;
  content: "";
  width: 18.95px;
  height: 18.95px;
  background: #E84818;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.custom-radio li input[type="radio"]{
  position: absolute;
  opacity: 0;
  top: 10px;
  z-index: 99;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);  
  cursor: pointer;
  /*-webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;*/
}

input[type=radio]:checked::after{
  opacity: 1;
  background-color: red;
  width: 15px;
  line-height: 1px;
}

.custom-radio li input[type="radio"]:checked + span::after{
  opacity: 1;
}

.container-aula-descricao{
}
.container-aula-polo{
  font-family: Ministry, Heavy, sans-serif;
  font-weight: bolder;
  font-size: 2em;
  margin: 25px 0 11px 0;
}

.container-aula-polo-descricao{
  display: flex;
}

.container-aula-polo-descricao input{
    height: 25px;
    width: 25px;
}

.container-aula-polo-alemao{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;
  display: flex;
  flex-direction: row;
}

.container-aula-polo-prazeres{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;
}

.container-aula-modulo{ 
  font-family: Ministry, Heavy, sans-serif;
  font-weight: bolder;
  font-size: 2em;
  margin: 31px 0 11px 0;
}

.container-aula-modulo-um{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;
}

.container-aula-modulo-dois{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;
}

.container-aula-modulo-tres{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;
}

.container-aula-turno{
  font-family: Ministry, Heavy, sans-serif;
  font-weight: bolder;
  font-size: 2em;
  margin: 31px 0 11px 0;
}

.container-aula-turno-manha{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;

}

.container-aula-turno-tarde{
  font-family: Ministry, Medium, sans-serif;
  font-size: 1em;

}

.container-aula-tema{
  font-family: Ministry, Heavy, sans-serif;
  font-weight: bolder;
  font-size: 2em;
}
.container-aula-tema-input{
  width: 40vw;
  height: 6vh;
  border: 2px solid #2E3192;  
    border-radius: 10px;
    color: #2E3192;
    padding: 0;
}

.container-aula-conteudo{
  font-family: Ministry, Heavy, sans-serif;
  font-weight: bolder;
  font-size: 2em;

}

.container-aula-conteudo-input{
  width: 40vw;
  height: 40vh;
  border: 2px solid #2E3192;  
  border-radius: 10px;
  color: #2E3192;
  padding: 0;
  resize: none;
}

.container-button{
  display: flex;
  justify-content: space-between;
  margin: 47px 50px 0 22px;
}

.container-button-voltar{
  font-family: Ministry, Heavy, sans-serif;
  font-size: 1em;
  width: 113.67px;
  color: #2E3192;
  border: 2px solid #2E3192;
  background-color: #fff;
  border-radius:10px;
    padding: 10px;
}

.container-button-chamada{
  font-family: Ministry, Heavy, sans-serif;
  font-size: 1em;
  width:  181.67px;
  color: #fff;
  background-color: #2E3192;
  border-radius:10px;
    padding: 10px;
    border:none;
}

</style>