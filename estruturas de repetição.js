// Estruturas de Repetição (ou laços de repetição)

// Comando FOR
	// Para escrever a tabuada de um nº
		var número = 7; // Retorna a tabuada do número 7
		for (var contador = 1; contador <= 10; contador ++) {
			console.log(número * contador);
		}

// Comando FOR junto com Array
	// Para dar uma mensagem de boas-vindas aos alunos da trybe
		var listaDeNomes = ["Ana", "Beatriz", "Caroline", "Diego", "Esther", "Fernando", "Guilherme"];
		for (var indice = 0; indice < listaDeNomes.length; indice++) {
			var mensagem = "Boas-Vindas, " + listaDeNomes[indice] + "!";
			console.log(mensagem);
		}
