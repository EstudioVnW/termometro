<template>
	<div class="body">
		<div class="body__filtro">
			<div class="body__imgs">
				<img class="bodyImgs__termometro" src="../assets/termometro.svg">
				<img class="bodyImgs__vnw" src="../assets/logo-vainaweb.svg">
			</div>
			<p class="body__titulo">Sua aula está sendo finalizada!</p>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
.body{
	height: 100vh;
	background: url(../assets/DSC_1866.jpg) no-repeat;
	background-size: 100%;
}
.body__filtro{
	width: 100%;
	height: 100%;
	background-color: rgb(252, 175, 23, 0.60);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.body__imgs{
	display: flex;
}
.bodyImgs__termometro{	
    height: 305px;
}
.bodyImgs__vnw{
	width:  302px;
    margin: auto 18px;
}
.body__titulo{
	font-family:"ministry";
	font-style:normal;
	font-weight:700;
	color: #fff;
	font-size: 2em;
}
</style>