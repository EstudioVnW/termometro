<template>
	<section class="container">
		<div class="imagem">
			<img class="imagem-termometro" src="../assets/termometro.png">
			<img class="imagem-vainaweb" src="../assets/logo-vainaweb.svg">
		</div>
		<div class="texto">
			<p>Sua aula ja vai começar!</p>
		</div>
	</section>
</template>



<style type="text/css">

body{
	margin: 0;
}

.container{
	background-color: #FCAF17;
	margin: 0;
	padding: 0;
	height: 99.7vh;
	border: 1px solid rgba(0, 0, 0, 0.70);
  	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.imagem-termometro{
	/*width: 106.95px;*/
	width: 24%;
}

.imagem-vainaweb{
	/*width:  302.69px;*/
	width: 53%;
    margin: 0 0 35px 0;
}

.texto{
	font-family: Ministry, Heavy, sans-serif;
	color: #fff;
	font-size: 2em;
}

</style>