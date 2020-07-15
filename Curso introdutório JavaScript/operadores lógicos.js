// Operadores Lógicos

/*

 Operador E

-------------------------------------------------------------
|	Dia ensolarado	&&	Final de semana	|	Vou à praia		|
-------------------------------------------------------------
|		True		| 		True	 	|		True		|
|	 	True		| 		False		|		False		|
|	 	False		| 		True		|		False		|
|	 	False		| 		False 		|		False		|
-------------------------------------------------------------
*/

// Vou à praia
var diaEnsolarado = true;
var ehFinalDeSemana = true;
var vouPraPraia = true;

// Não vou à praia
var diaEnsolarado = true;
var ehFinalDeSemana = false;
var vouPraPraia = false;

// Não vou à praia
var diaEnsolarado = false;
var ehFinalDeSemana = true;
var vouPraPraia = false;

// Não vou à praia
var diaEnsolarado = false;
var ehFinalDeSemana = false;
var vouPraPraia = false;



/*

 Operador OU

-----------------------------------------------------------------
|	Tem gasolina	||	Tenho grana pro gás	|	Vou à praia		|
-----------------------------------------------------------------
|		True		| 		True		 	|		True		|
|	 	True		| 		False			|		True		|
|	 	False		| 		True			|		True		|
|	 	False		| 		False 			|		False		|
-----------------------------------------------------------------

*/

// Vou à praia
var carroTemGasolina = true;
var tenhoGranaProGas = true;
var vouPraPraia = true;

// Vou à praia
var carroTemGasolina = true;
var tenhoGranaProGas = false;
var vouPraPraia = true;

// Vou à praia
var carroTemGasolina = false;
var tenhoGranaProGas = true;
var vouPraPraia = true;

// Não vou à praia
var carroTemGasolina = false;
var tenhoGranaProGas = false;
var vouPraPraia = false;

