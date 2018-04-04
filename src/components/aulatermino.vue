<template>
	<section class="container">
		<div class="orange">
			<div class="imagem">
				<img class="imagem-termometro" src="../assets/termometro2.svg">
				<img class="imagem-vainaweb" src="../assets/logo-vainaweb.svg">
			</div>
			<div class="texto">
				<p>Sua aula está sendo finalizada!</p>
			</div>
		</div>
	</section>
</template>



<style scoped>

.container{
	background-image: url(../assets/DSC_1866.jpg);
	background-size: 215vh;
	background-repeat: no-repeat;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.orange{
  background-color: rgb(252, 175, 23, 0.70);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.imagem{
	display: flex;
    flex-direction: row;
}

.imagem-termometro{	
    height: 305.38px;
}

.imagem-vainaweb{
	/*height: 211.46px;*/
	width:  302.69px;
    margin: auto 18px;
}

.texto{
	font-family: Ministry, Heavy, sans-serif;
	color: #fff;
	font-size: 2em;
	font-weight: bolder;
}

</style>