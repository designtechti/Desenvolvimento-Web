// Funções

// Exemplo de funcionalidades de um carro

	var statusCarro = "desligado";
	var aceleracao = 0;
	var rotacacaoDoVolante = 0;

	function ligarDesligar(){
		// Aqui vão as instruções de ligar e desligar
			if (statusCarro === "desligado") {
				statusCarro = "ligado";
			} else {
				statusCarro = "desligado";
			}

			return statusCarro;

	}
	
	function acelerar(incremento){
		// Aqui vão as instruções de aceleração
			aceleracao = aceleracao + incremento;

			return "Acelerando a " + aceleracao + "m/s²";
	}
	
	function frear(decremento){
		// Aqui vão as instruções de desaceleração
			aceleracao = aceleracao - decremento;

			return "Desacelerando para " + aceleracao + "m/s²";
	}
	
	function girarVolante(anguloDeRotacao){
		// Aqui vão as instruções de direção
			rotacacaoDoVolante = anguloDeRotacao;

			return rotacacaoDoVolante + "º";
	}
	