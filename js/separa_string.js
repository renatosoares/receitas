//Uso da função de divisão de string para separar uma sring em partes

function splitString(){
	var teste = "primeiro nome=Stanley, Segundo nome=Kubck, Estado=Rio Grande do Norte, statement='This is a test, of split'";
	var inputString = new String(teste);
	var arrayTokens = inputString.split(',',3);

	// processa a divisão nas vírgulas

	for (var i = 0; i < arrayTokens.length; i++) {
		
		document.writeln(arrayTokens[i] + "<br />");
		// agora divide em iguais e grava apenas o valor
		var newTokens = arrayTokens[i].split('=');
		document.writeln(newTokens[1] + "<br /><br />");


	}
	
}


window.onload=splitString;

/*
Uma das formas de processar campos de formulário
antes que ele seja submetido ao servidor.
*/