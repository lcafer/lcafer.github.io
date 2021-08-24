function calcular(Pontos){ // criando a função de calcular com o parâmetro de pontos que é selecionável colocando o valor dentro dos parênteses ex: calcular(84); 
let freq1 = 0, freq2 = 0, freq3 = 0, freq4= 0, freq5 = 0, freq6 = 0, pntExtras = 0; // criei as variáveis de frequencia, como são 6 atributos, então 6 frequencias. além da variável de pontos extras pra checar se sobrou pontos, pois se o resultado de um atributo for maior que 18, é descontado. 
for (let r = 1; r <= Pontos; r++){ //criei a variável r para contar a rolagem de dados até a quantidade de pontos requiridas (vai rolar 84 dados de seis faces se for calcular(84)); 
  let rolarDados = Math.floor(Math.random()*6) + 1; //criei a variável rolarDados para simular a rolagem de um dado usando um Math.random()*6 + 1. Pois o valor inicial é 0, então se você quer um valor máximo de 6 e mínimo de 1, é importante usar math.random()*valorMáximo + valorMínimo. O Math.floor é para transformar o Math.random que é um valor float em um valor inteiro (int).  
  switch (rolarDados) { // usei uma função switch ao invés de ifs, pois fica menos verboso (texto mais rápido e menos linhas), pois ele analisa cada caso de acordo com os valores. O caso 1 é: se o dado for 1: verifique se a frequencia 1 já está igual a 18 [if(freq1 >= 18) então aumente os pontos extras e não mude o valor de frequencia 1. ELSE (se não for maior ou igual a 18) adicione +1 no valor de frequencia1. Essa lógica segue para todos as faces de dados rolados. 
    case 1: if(freq1 >= 18) pntExtras += 1; else freq1 += 1; break;
    case 2: if(freq2 >= 18) pntExtras += 1; else freq2 += 1; break;
    case 3: if(freq3 >= 18) pntExtras += 1; else freq3 += 1; break;
    case 4: if(freq4 >= 18) pntExtras += 1; else freq4 += 1; break;
    case 5: if(freq5 >= 18) pntExtras += 1; else freq5 += 1; break;
    case 6: if(freq6 >= 18) pntExtras += 1; else freq6 += 1; break;
  } 
 
  if (r == Pontos){ // se o valor da variável r que expliquei lá em cima, tiver igual o número dos pontos, quer dizer que todos os dados foram rolados e por isso vai exibir as frequencias no site no formato do array de atributos.
  document.getElementById('resultado').innerHTML = `${freq1}/${freq2}/${freq3}/${freq4}/${freq5}/${freq6}`;
  if(pntExtras != 0){  // Se o valor de pontos extras for diferente de 0 (já que é impossível nessa lógica ser MENOR que zero), então você tem pontuações extras e o programa vai exibir por isso a sua pontuação abaixo do array. 
  document.getElementById('pontosExtras').innerHTML = `Você tem ${pntExtras} pelo fato do resultado de algum atributo ter sido acima de 18 e descontado. Esses pontos você pode adicionar no atributo que desejar`;
  } else { // se não tiver pontos extras, exibe um campo em branco, até para resetar o texto, pois se não por o espaço em branco, fica o valor simulado antigo. Pq é uma função que não fica em loop, só executa qnd é chamada.
    document.getElementById('pontosExtras').innerHTML = '';
  }
  }
}
}

function calcularPersonalizado(){
	var input_pontuacao = document.getElementById("personalizado").value;
	var pontuacao = parseInt(input_pontuacao);
	document.getElementById('resultado').innerHTML = ``;
	
	if(pontuacao != null && pontuacao % 6 === 0){
		calcular(pontuacao);
	} else if(pontuacao %6 !== 0 && pontuacao != 0 && pontuacao != null) {
		document.getElementById('resultado').innerHTML = `Insira um número divisível por seis. A sua pontuação ${input_pontuacao} não é.`;
		document.getElementById('pontosExtras').innerHTML = ``;
	}
}



