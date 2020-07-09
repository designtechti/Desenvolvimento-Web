// Arrays ou listas

// Cria uma lista/array para saber quem são os aprovados no processo seletivo da Trybe
var listaDeNomes = ["Ana", "Beatriz", "Caroline", "Diego", "Esther", "Fernando", "Guilherme"];

/*

	Com arrays é possível:
	- Saber quem foi a 1ª pessoa aprovada;
	- Saber quantas pessoas foram aprovadas;
	- Adicionar um novo nome;
	- Remover um nome;
	- Atualizar um nome que já está na lista.

*/

/* 
	No console do browser 
	se digitar o nome da variável 
	aparecerá o número de itens/índices 
	no array antes do conteúdo

	Ex.:
		listaDeNomes
		(7) ["Ana", "Beatriz", "Caroline", "Diego", "Esther", "Fernando", "Guilherme"];
*/

// Para saber qual a posição de um índice no array (sempre inicia no zero)
	listaDeNomes[0]; //Retorna o valor Ana
	listaDeNomes[1]; //Retorna o valor Beatiz
	listaDeNomes[2]; //Retorna o valor Caroline
	listaDeNomes[3]; //Retorna o valor Diego
	listaDeNomes[4]; //Retorna o valor Esther
	listaDeNomes[5]; //Retorna o valor Fernando
	listaDeNomes[6]; //Retorna o valor Guilherme

// Para adicionar um novo nome no array
	listaDeNomes.push("Heleno");

// Para descrobrir o tamanho do array
	listaDeNomes.length;

// Para acessar as posições dos índices do array
	listaDeNomes[listaDeNomes.length -1];

// Exercício das cores das bandeira do Estado onde eu nasci
	// (a) Crie uma variável que contenha as cores do Estado onde vc nasceu
	var coresDaBandeira = ["Vermelho", "Amarelo", "Verde"]

	// (b) Crie uma variável que mostre quantos itens o array possue
	var tamanho = coresDaBandeira.length;

	// (c) Acesse cada posição do array e veja o valor delas
	coresDaBandeira[0]; // Retorna o valor Vermelho
	coresDaBandeira[1]; // Retorna o valor Amarelo
	coresDaBandeira[2]; // Retorna o valor Verde
	
	coresDaBandeira[coresDaBandeira.length -1]; // Retorna o último valor
	coresDaBandeira[coresDaBandeira.length -2]; // Retorna o penúltimo valor
	coresDaBandeira[coresDaBandeira.length -3]; // Retorna o primeiro valor